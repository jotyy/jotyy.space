'use client';

import { domAnimation, LazyMotion, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { highlight } from 'sugar-high';

import { Button } from '@/components/ui/button';

const THREE_HUNDRED_MILLISECONDS = 3000;

export type CodeBlockProps = {
  title?: string;
  code: string;
};

export function CodeBlock({ title, code }: CodeBlockProps) {
  const codeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const codeHTML = highlight(code);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => setCopied(false), THREE_HUNDRED_MILLISECONDS);
  };

  useEffect(() => {
    const codeElem = codeRef.current;
    if (!codeElem) {
      return;
    }

    codeElem.innerHTML = codeHTML;
  }, [codeHTML]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-zinc-200 bg-zinc-50 py-1.5 pr-2 pl-4">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-zinc-200" />
            <span className="h-4 w-4 rounded-full bg-zinc-200" />
            <span className="h-4 w-4 rounded-full bg-zinc-200" />
          </span>
          {title && <p className="m-0 font-medium text-sm">{title}</p>}
        </div>
        <Button
          className="rounded-lg"
          disabled={copied}
          onClick={onCopy}
          size="sm"
          variant="outline"
        >
          <LazyMotion features={domAnimation}>
            <motion.span
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex w-14 items-center justify-center gap-0.5"
              exit={{ opacity: 0, y: -2 }}
              initial={{ opacity: 0, y: 2 }}
              key={copied ? 'copied' : 'copy'}
              transition={{ duration: 0.3 }}
            >
              {copied ? (
                <>
                  <svg
                    className="shrink-0"
                    fill="none"
                    height="14"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Copied</title>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg
                    className="mr-0.5"
                    fill="none"
                    height="14"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Copy</title>
                    <rect height="14" rx="2" ry="2" width="14" x="8" y="8" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  Copy
                </>
              )}
            </motion.span>
          </LazyMotion>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <pre>
          <code className="sh__line" ref={codeRef} />
        </pre>
      </div>
    </>
  );
}
