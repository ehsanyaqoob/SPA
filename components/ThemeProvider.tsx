"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevents hydration mismatch
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-500" />
    );
  }

  return (
    <NextThemesProvider {...props}>
      <AnimatePresence mode="wait">
        <motion.div
          key={props?.attribute || "theme"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen transition-colors duration-500"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </NextThemesProvider>
  );
}
