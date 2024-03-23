"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { TypingText } from "./reusable/CustomText";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  slideIn,
  staggerContainer,
} from "@/utils/motion";
import { Roboto_Slab, Work_Sans } from "next/font/google";
import Description from "./reusable/Description";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Team = () => {
  return (
    <>
      <div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=""
        id="team"
      >
        <div className=" min-h-[1700px]   lg:min-h-[1200px] lg:max-h-[1200px]  relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/tokinomics.png"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          <div className="w-full px-4  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className=""
            >
              <TypingText
                title="Tournaments and Esports:"
                textStyles={` text-center flex flex-wrap justify-center  text-[#f2d387] pt-10 pb-20 font-bold text-[40px] leading-[40px] uppercase `}
              />
            </motion.div>

            <Description
              className={"py-4"}
              text="Elysian Odyssey embraces the competitive spirit with an array of tournaments and esports events that pit players against each other
in thrilling battles of skill and strategy. As players hone their abilities and rise through the ranks, they'll have the opportunity to test
their mettle against fellow adventurers from around the globe, competing for glory, prestige, and valuable rewards.
"
            />
            <Description
              text="Tournaments in Elysian Odyssey offer a diverse range of challenges, from individual duels to team-based showdowns, each designed
to showcase the diverse talents of the game's player base. Whether vying for supremacy in intense PvP battles or demonstrating
mastery in cooperative PvE encounters, players will find ample opportunities to prove themselves and claim victory.
"
            />
            <Description
              className={"py-4"}
              text="In addition to in-game tournaments, Elysian Odyssey also hosts esports events that elevate competitive gaming to new heights. With
professional leagues, live broadcasts, and spectator modes, these esports competitions provide a platform for the most skilled players
to shine, attracting audiences of fans and enthusiasts eager to witness the pinnacle of virtual competition."
            />
            <Description
              text="Through its robust tournament and esports infrastructure, Elysian Odyssey fosters a vibrant and competitive community where
players can showcase their skills, forge rivalries, and celebrate the thrill of victory. Whether aspiring to become a champion or simply
seeking to test their abilities, players of all levels will find a welcoming and competitive environment in the esports arena of Elysian
Odyssey"
            />

            <motion.div
              variants={slideIn("down", "bounce", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className=" pt-[100px] pb-20 sm:px-20"
            >
              <Image
                src={"/images/Screenshot_2-removebg-preview.png"}
                alt="chart"
                width={600}
                height={300}
                className="ml-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
