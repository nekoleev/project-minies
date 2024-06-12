"use client";

import { AnimatePresence, easeOut, motion } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 1, 0] }}
      transition={{
        ease: "easeOut",
        duration: 7,
      }}
      className="h-screen w-screen flex flex-col"
    >
      {children}
    </motion.div>
  );
}
