/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import Title from "./Title";
import assets from "../../assets/assets";

export default function OurWork() {
  const workData = [
    {
      title: "Mobile App Marketing",
      image: assets.work_mobile_app,
      description:
        "we turn bold ideas into powerful digital solutions that connect,engage...",
    },
    {
      title: "Dashboard Management",
      image: assets.work_dashboard_management,
      description: "we help you execute your plan and deliver results",
    },
    {
      title: "Fitness App Promotion",
      image: assets.work_fitness_app,
      description:
        "we help you create a marketing strategy that drives results.",
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        desc="From strategy to excution, we craft digital solutions that move business forward."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.4,
              delayChildren: 0.3,
            },
          },
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {workData.map((work, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
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
            className="hover:scale-105 duration-500 transition-all cursor-pointer"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.4 + 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl"
            />
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.4 + 0.7,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-3 mb-2 text-lg font-semibold"
            >
              {work.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.4 + 0.9,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm opacity-60 w-5/6"
            >
              {work.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
