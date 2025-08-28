/* eslint-disable no-unused-vars */
import React from "react";
import { company_logos } from "../../assets/assets";
import { motion } from "motion/react";

export default function TrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80"
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="font-semibold"
      >
        Trusted By Leading Companies
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.8,
            },
          },
        }}
        className="flex items-center justify-center flex-wrap gap-10 m-4"
      >
        {company_logos.map((logo, index) => (
          <motion.img
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.6 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.23, 1, 0.32, 1],
                },
              },
            }}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl hover:scale-110 transition-transform duration-200"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
