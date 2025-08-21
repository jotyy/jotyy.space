/** biome-ignore-all lint/suspicious/noExplicitAny: <tbd> */
'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { CodeBlock } from '@/components/contentful/code-block';
import { Link } from '@/components/link';
import type {
  ComponentRichImage,
  PageBlogPostFieldsFragment,
} from '@/lib/contentful/__generated/sdk';
import { dasherize } from '@/utils';

const DynamicIframe = dynamic(() => import('@/components/contentful/iframe'));

export type EmbeddedEntryType = ComponentRichImage | null;

const DEFAULT_ASSET_HEIGHT = 300;
const DEFAULT_ASSET_WIDTH = 400;

function options(
  links:
    | {
        entries: {
          block: EmbeddedEntryType[];
        };
      }
    | any
) {
  const findAsset = (id: string) =>
    links?.assets.block.find((item: any) => item.sys.id === id);
  const findInlineEntry = (id: string) =>
    links?.entries.inline.find((item: any) => item.sys.id === id);

  return {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <span className="font-semibold text-black">{text}</span>
      ),
      [MARKS.ITALIC]: (text: React.ReactNode) => (
        <span className="italic">{text}</span>
      ),
      [MARKS.CODE]: (text: React.ReactNode) => (
        <code className="inline-code">{text}</code>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (_: unknown, children: React.ReactNode) => {
        const id = dasherize(children);
        const url = `h2-${id}`;
        return (
          <h2
            className="group before:-left-4 relative mt-6 mb-2 w-fit cursor-pointer before:absolute hover:before:content-['#']"
            id={url}
          >
            <a
              className="group-hover:underline group-hover:underline-offset-4"
              href={`#${url}`}
            >
              {children}
            </a>
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (_: unknown, children: React.ReactNode) => {
        const id = dasherize(children);
        const url = `h3-${id}`;
        return (
          <h3
            className="group before:-left-4 relative mt-6 mb-2 w-fit cursor-pointer before:absolute hover:before:content-['#']"
            id={url}
          >
            <a
              className="group-hover:underline group-hover:underline-offset-4"
              href={`#${url}`}
            >
              {children}
            </a>
          </h3>
        );
      },
      // Must be a <div> instead of <p> to avoid descendant issue, hence to avoid mismatching UI between server and client on hydration.
      [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => (
        <div className="mb-4 leading-slacker last:mb-0">{children}</div>
      ),
      [BLOCKS.UL_LIST]: (_: unknown, children: React.ReactNode) => (
        <ul className="mb-4 flex list-disc flex-col gap-0.5 pl-6">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (_: unknown, children: React.ReactNode) => (
        <ol className="mb-4 flex list-inside list-[decimal-leading-zero] flex-col gap-2">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (_: unknown, children: React.ReactNode) => (
        <li>{children}</li>
      ),
      [BLOCKS.QUOTE]: (_: unknown, children: React.ReactNode) => (
        <blockquote className="mb-4 rounded-r-lg border-zinc-200 border-l-2 px-4 font-medium">
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = findAsset(node.data.target.sys.id);

        return (
          <figure className="mb-6 flex flex-col gap-2 overflow-hidden rounded-xl">
            <Image
              alt={asset.description || asset.title}
              className="animate-reveal"
              height={asset.height || DEFAULT_ASSET_HEIGHT}
              loading="lazy"
              src={asset.url}
              width={asset.width || DEFAULT_ASSET_WIDTH}
            />
            {asset.description && (
              <figcaption className="break-all text-center font-light text-xs text-zinc-500">
                {asset.description}
              </figcaption>
            )}
          </figure>
        );
      },
      [BLOCKS.HR]: () => <hr className="my-12" />,
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <Link href={node.data.uri}>{children}</Link>
      ),
      [INLINES.EMBEDDED_ENTRY]: (node: any) => {
        const entry = findInlineEntry(node.data.target.sys.id);

        switch (entry.__typename) {
          case 'ContentEmbed': {
            const { embedUrl, title, type } = entry;

            switch (type) {
              case 'Video': {
                return (
                  <DynamicIframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="aspect-video"
                    embedUrl={embedUrl}
                    title={title}
                  />
                );
              }
              case 'SoundCloud': {
                return (
                  <DynamicIframe
                    className="h-[166px]"
                    embedUrl={embedUrl}
                    scrolling="no"
                    title={title}
                  />
                );
              }
              default:
                return null;
            }
          }
          case 'CodeBlock': {
            return <CodeBlock {...entry} />;
          }
          // case "Tweet": {
          //   const { id } = entry;
          //   return <TweetCard id={id} />;
          // }
          default:
            return null;
        }
      },
    },
  };
}

export type Content = PageBlogPostFieldsFragment['content'];

export const RichText = ({ content }: { content: Content }) => {
  if (!content) {
    return null;
  }
  return documentToReactComponents(content.json, options(content.links));
};
