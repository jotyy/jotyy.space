import { ShowInView } from "@/components/show-in-view";
import { cn } from "@/lib/utils";

export interface IframeProps
  extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  embedUrl: string;
  title: string;
}

export default function Iframe({
  embedUrl,
  title,
  className,
  ...rest
}: IframeProps) {
  return (
    <ShowInView>
      <figure>
        <iframe
          src={embedUrl}
          title={title}
          allowFullScreen
          className={cn(
            "w-full rounded border-0 border-none shadow-lg",
            className
          )}
          {...rest}
        />
        <figcaption className="mt-2 break-words text-center text-sm text-neutral-500">
          {title}
        </figcaption>
      </figure>
    </ShowInView>
  );
}
