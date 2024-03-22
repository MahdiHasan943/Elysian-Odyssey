"use client";
import Image from "next/image";
import React from "react";
import Title from "./reusable/Title";
import Description from "./reusable/Description";
import { TypingText } from "./reusable/CustomText";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const Charecters = () => {
  return (
    <div id="charecter">
      <div className="">
        <div className=" min-h-[1300px]   lg:min-h-[1300px] lg:max-h-[1300px]  relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/new_charecter.png"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className=""
            />
            <div className="w-full px-4  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className=""
              >
                <TypingText
                  title="Characters"
                  textStyles={` text-center text-[#f2d387] pt-5 pb-20 font-bold text-[40px] leading-[40px] uppercase `}
                />
              </motion.div>
              <div className="flex gap-4 ">
                <div className="w-[40%]"></div>
                <div className="w-[60%]">
                  <h2 className=" text-[#f9d286] font-bold text-[28px] leading-[40px] uppercase">
                    Celestial: The Eternal Observer
                  </h2>
                  <h3 className=" py-4  text-[#fff] font-bold text-[24px] leading-[30px] capitalize">
                    Physical Appearance:
                  </h3>
                  <ul className="px-8 list-disc ">
                    <li className="text-[16px] px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      Radiant Form: Celestial's form is composed of celestial
                      energies, emitting a gentle glow. They may have iridescent
                      wings, symbolising their connection to cosmic forces.
                    </li>
                    <li className="text-[16px] py-4 px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      Cosmic Patterns: Celestial's skin is adorned with
                      intricate patterns resembling constellations, which
                      shimmer in response to their emotions.
                    </li>
                  </ul>

                  <h3 className=" py-4  text-[#fff] font-bold text-[24px] leading-[30px] capitalize">
                    Abilities:
                  </h3>
                  <ul className="px-8 list-disc ">
                    <li className="text-[16px] px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      Cosmic Perception: Celestial can perceive the entirety of
                      the cosmos, navigating through time and space
                      effortlessly.
                    </li>
                    <li className="text-[16px] py-4 px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      Temporal Manipulation: Can manipulate time, enabling them
                      to witness events from the past, present, and potential
                      futures.
                    </li>
                    <li className="text-[16px] px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      Interdimensional Communication: Celestial can communicate
                      with beings across dimensions, sharing their observations
                      and insights.
                    </li>
                  </ul>

                  <h3 className=" py-4  text-[#fff] font-bold text-[24px] leading-[30px] capitalize">
                    Personality:
                  </h3>
                  <ul className="px-8 list-disc ">
                    <li className="text-[16px] px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      CosEternal Curiosity: Driven by an insatiable curiosity,
                      Celestial seeks to explore the mysteries of the universe
                      and understand the interconnectedness of all things.
                    </li>
                    <li className="text-[16px] py-4 px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      Compassion: Despite their vast knowledge, Celestial
                      harbors a deep empathy for the struggles and joys of
                      sentient beings.
                    </li>
                    <li className="text-[16px] px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      Loneliness: The eternal nature of Celestial's existence
                      may evoke a sense of loneliness, motivating them to forge
                      connections with others.
                    </li>
                  </ul>
                  <h3 className=" py-4  text-[#fff] font-bold text-[24px] leading-[30px] capitalize">
                    Desires:{" "}
                  </h3>
                  <ul className="px-8 list-disc ">
                    <li className="text-[16px] px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      Witness to Unity: Celestial aspires to witness a moment of
                      universal unity, where beings from all corners of
                      existence come together in harmony.
                    </li>
                    <li className="text-[16px] py-4 px-3 xl:text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]">
                      Shared Journey: Desires companionship to share the eternal
                      journey of observation, creating shared memories with
                      fellow cosmic entities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charecters;
