import NextLink from 'next/link';

import { isExternalLink } from '@/utils';

export const Link = ({ href = '#', ...rest }) => {
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
