'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

const THREE_HUNDRED_SIXTY = 360;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <Button className="size-7" size="icon" variant="ghost">
        <div className="size-4" />
      </Button>
    );
  }

  return (
    <Button
      className="size-7 overflow-hidden"
      onClick={(e) => {
        e.preventDefault();
        toggleTheme();
      }}
      size="icon"
      variant="ghost"
    >
      <motion.div
        animate={{
          rotate: theme === 'dark' ? THREE_HUNDRED_SIXTY : 0,
        }}
        className="relative size-4"
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          animate={{
            opacity: theme === 'dark' ? 0 : 1,
          }}
          className="absolute inset-0"
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <Icons.sun className="size-4" />
        </motion.div>
        <motion.div
          animate={{
            opacity: theme === 'dark' ? 1 : 0,
          }}
          className="absolute inset-0"
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <Icons.moon className="size-4" />
        </motion.div>
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
