"use client";
import Image from "next/image";
import React from "react";
import { TypingText } from "./reusable/CustomText";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  slideIn,
  staggerContainer,
} from "@/utils/motion";
import { Roboto_Slab, Cinzel } from "next/font/google";
import Description from "./reusable/Description";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const cinzel = Cinzel({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});
const Genesis = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[-50px] z-0"
      id="The-Genesis"
    >
      <div className="  mt-[0] min-h-[2000px] sm:min-h-[1500px] sm:max-h-[1800px]   lg:min-h-[1000px] lg:max-h-[1000px]  relative ">
        <div className=" absolute top-0 flex justify-center items-center w-full min-h-[250px] sm:h-[400px] left-0 z-[50]">
          <h2
            className={`${cinzel.className} capitalize text-center  sectionTitle text-[42px] tracking-tighter sm:text-[120px] lg:text-[160px] 2xl:text-[180px]`}
          >
            The Genesis{" "}
          </h2>
        </div>

        <div className="absolute top-0 bg-[#1C1817] border border-[#566000] left-0 h-full w-full">
          {/* <Image
            src={"/Assets/about.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
            className=""
          /> */}
        </div>
        <div className="w-full mt-[50px]  xl:px-16 sm:mt-[50px]  px-4 sm:min-h-[1200px] sm:max-h-[1200px]    lg:min-h-[800px] lg:max-h-[800px]   py-10 flex justify-center items-center absolute top-0 left-0 h-full z-[100000] max-auto">
          <div className="   mx-auto  ">
            {/* <Image
              src={"/Screenshot_2.png"}
              alt="eye"
              width={400}
              height={400}
              className="block sm:hidden"
            /> */}

            <div className=" w-full absolute top-0 left-[50%] translate-x-[-50%] mt-[240px] bg-[#1C1817] h-[0px] ">
              <img
                className="absolute top-[-0px] w-[120px]   left-[50%] translate-x-[-50%]"
                src="/Assets/TheGenesis.png"
                alt=""
              />
              <img
                src="/Assets/Screenshot_13-removebg-preview.png"
                className="mx-auto "
                alt=""
              />
            </div>
            <div className="grid grid-cols-1  h-full xl:max-w-[1400px] border border-t-[1] border-b-0 border-l-0 border-r-0 border-[#D4D297] p-2 md:mt-[380px] gap-y-0 gap-x-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mx-auto w-full  min-h-[200px]  xl:w-auto   relative">
                <div className="w-full h-full genesis">
                  <p
                    className={`${roboto_slab.className} border border-[#D4D297] capitalize text-[#D4D297] text-center text-[38px] lg:text-[44px] font-bold`}
                  >
                    Featured Game
                  </p>
                  <p
                    className={`${roboto_slab.className} px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    Discover 'The Genesis', our first AI-driven AAA MMORPG.
                    Explore a vast, dynamic world filled with adventure and
                    opportunity.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="mx-auto   min-h-[200px]  mt-5 sm:mt-0 w-full xl:w-auto  relative">
                <div className="w-full  h-full genesis">
                  <p
                    className={`${roboto_slab.className} border border-[#D4D297]  capitalize text-[#D4D297] text-center text-[38px] lg:text-[44px] font-bold`}
                  >
                    Play-and-Earn
                  </p>
                  <p
                    className={`${roboto_slab.className} px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    Elysian Odyssey's play-and-earn model allows you to earn
                    real-world rewards by participating in the game. Complete
                    quests, win battles, and contribute to the ecosystem and
                    earn $ELY tokens.
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="mx-auto mt-5 lg:mt-0 min-h-[200px]  w-full xl:w-auto   relative">
                <div className="w-full  h-full genesis">
                  <p
                    className={`${roboto_slab.className} border border-[#D4D297]  capitalize text-[#D4D297] text-center text-[38px] lg:text-[44px] font-bold`}
                  >
                    In-Game Professions
                  </p>
                  <p
                    className={`${roboto_slab.className} px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    Choose from various in-game professions such as crafting,
                    trading, and mining. Each profession offers unique
                    opportunities to earn and grow within the game.
                  </p>
                </div>
              </div>
              {/* 4 */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Genesis;
