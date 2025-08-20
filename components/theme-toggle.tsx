"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="size-7">
        <div className="size-4" />
      </Button>
    );
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="size-7 overflow-hidden"
      onClick={(e) => {
        e.preventDefault();
        toggleTheme();
      }}
    >
      <motion.div
        className="relative size-4"
        animate={{ 
          rotate: theme === "dark" ? 360 : 0, 
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ 
            opacity: theme === "dark" ? 0 : 1,
            scale: theme === "dark" ? 0.5 : 1
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <Icons.sun className="size-4" />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ 
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <Icons.moon className="size-4" />
        </motion.div>
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
