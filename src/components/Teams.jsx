/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import Title from "./Title";
import { teamData } from "../../assets/assets";

export default function Teams() {
  return (
    <div
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24
    xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brands success."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.4,
            },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5"
      >
        {teamData.map((team, index) => {
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 1.1,
                    ease: [0.23, 1, 0.32, 1],
                  },
                },
              }}
              className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl
              border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.3 + 0.6,
                  ease: [0.23, 1, 0.32, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                src={team.image}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3 + 0.8,
                  ease: [0.23, 1, 0.32, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-1"
              >
                <h3 className="font-bold text-sm">{team.name}</h3>
                <p className="text-xs opacity-60">{team.title}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
