/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import Title from "./Title";
import assets from "../../assets/assets";
import toast from "react-hot-toast";

export default function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eeab4892-6388-42a8-bada-6825942c7a26");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you For the Submission");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
      pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your businees forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person icon" />
            <input
              name="text"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-2 text-sm font-medium">Email adress</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="email icon" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="sm:col-span-2"
        >
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit
          <img src={assets.arrow_icon} alt="arrow icon in submit button" />
        </motion.button>
      </motion.form>
    </div>
  );
}
