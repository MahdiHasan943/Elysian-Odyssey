"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { slideIn, textVariant } from "@/utils/motion";
import { experiences } from "@/constants";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ExperienceCard = ({ experience }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <VerticalTimelineElement
      visible={true}
      animate={true}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experiences.iconBg }}
      icon={
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="flex justify-center items-center w-full h-full"
        >
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={100}
            height={100}
            className="w-[100%] h-[100%] rounded-full "
          />
        </motion.div>
      }
    >
      <div>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>{" "}
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-white-100  font-thin text-[8px] py-2 pl-1 tracking-wider"
          style={{ margin: 0, fontSize: "13px" }}
        >
          {experience.des}
        </p>{" "}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            <span className="font-bold text-[18px]"></span> {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const TimelineRoadmap = () => {
  return (
    <>
      <motion.div variants={textVariant()}></motion.div>

      <motion.div className="mt-20 flex flex-col">
        <VerticalTimeline visible={true} animate={true}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default TimelineRoadmap;
