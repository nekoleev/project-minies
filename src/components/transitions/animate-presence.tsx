"use client";

import { AnimatePresence, motion } from "framer-motion";
export const MyTransition = ({ isVisible }: { isVisible: string }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
};
