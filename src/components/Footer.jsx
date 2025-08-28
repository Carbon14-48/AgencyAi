/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import assets from "../../assets/assets";

export default function Footer({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4
    sm:px-10 lg:px-24 xl:px-40"
    >
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            From Strategy to execution, we craft digital solutions that move
            your business forward.
          </motion.p>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.9,
                },
              },
            }}
            className="flex gap-8 pb-4"
          >
            {[
              { href: "#hero", text: "Home" },
              { href: "#services", text: "Services" },
              { href: "#our-work", text: "Our Work" },
              { href: "#contact-us", text: "Contact Us" },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
                  },
                }}
              >
                <a href={item.href} className="hover:text-primary">
                  {item.text}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-gray-600 dark:text-gray-400">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-semibold"
            >
              Subscribe to our NewsLetter
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm mt-2 mb-6"
            >
              The latest news, articles,and resources, sent to your inbox
              weekly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-2 text-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full
              p-3 text-sm outline-none rounded dark:taxt-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
              />
              <button className="bg-primary text-white rounded-full py-2 px-6 hover:scale-103 transition-all ">
                Subscribe
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.hr
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="border-gray-300 dark:border-gray-600 my-6"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyright 2025 © agency.io - Carbon14</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 1.2,
              },
            },
          }}
          className="flex gap-4 justify-between items-center"
        >
          {[
            assets.facebook_icon,
            assets.twitter_icon,
            assets.instagram_icon,
            assets.facebook_icon,
          ].map((icon, index) => (
            <motion.img
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
                },
              }}
              src={icon}
              alt={`Social icon ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
