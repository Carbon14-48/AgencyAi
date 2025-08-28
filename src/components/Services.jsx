import React from "react";
import assets from "../../assets/assets";
import Title from "./Title";

export default function Services() {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "we turn bold ideas into powerful digital solutions that connect, engage ...",
      icons: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver results .",
      icons: assets.marketing_icon,
    },
    {
      title: "Content Writing ",
      description:
        "We help you create a marketing Strategy  that drives results .",
      icons: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We help you Build a srong social media presence and engage with your audience .",
      icons: assets.social_icon,
    },
  ];
  return (
    <div
      id="services"
      className="relative flex flex-col items-center
    gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="How Can we Help ?"
        desc="From Strategy to excutuon , we craft digital solutions that move your business forwward ."
      />
    </div>
  );
}
