/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

export default function Title({ title, desc }) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl sm:text-5xl font-medium"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-lg text-center text-gray-500 dark:text-white/74 mb-6"
      >
        {desc}
      </motion.p>
    </>
  );
}
