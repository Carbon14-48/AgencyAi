import React from "react";
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-105 duration-500 transition-all cursor-pointer"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
