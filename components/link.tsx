import NextLink from 'next/link';

import { isExternalLink } from '@/utils';

interface Props {
  href?: string;
  [key: string]: any;
}

export const Link = ({ href = '#', ...rest }: Props) => {
  const isExternal = isExternalLink(href);
  if (isExternal) {
    return (
      <a
        className="link break-words after:content-['_↗']"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...rest}
      />
    );
  }

  return <NextLink className="link" href={href} {...rest} />;
};
