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
      className="mt-[-50px]  z-0"
      id="The-Genesis"
    >
      <div className="  mt-[0] min-h-[1450px] sm:min-h-[1150px] sm:max-h-[1200px]   lg:min-h-[1100px] lg:max-h-[1100px]  relative ">
        <div className=" absolute top-0 flex justify-center items-center w-full min-h-[180px] sm:h-[200px] lg:h-[400px] left-0 z-[50]">
          <h2
            className={`${cinzel.className} capitalize text-center  sectionTitle text-[42px] carsho30:text-[50px] tracking-tighter sm:text-[100px] lg:text-[120px] 2xl:text-[180px]`}
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

            <div className=" w-full px-4 absolute top-0 left-[50%] translate-x-[-50%] mt-[60px] tinso90:mt-[92px] carsho12:mt-[110px] carsho14:mt-[108px] carsho30:mt-[150px] sm:mt-[130px] lg:mt-[240px] bg-[#1C1817] h-[0px] ">
              <img
                className="absolute top-[-0px] w-[60px]  border-[5px] hover:border-[#D4D297] duration-200 delay-75 ease-linear hover:rotate-[-5deg] border-[#D4D297] rounded-[999px]   sm:w-[120px]   left-[50%] translate-x-[-50%]"
                src="/Assets/TheGenesis.png"
                alt=""
              />
              <img
                src="/Assets/Screenshot_13-removebg-preview.png"
                className="mx-auto min-h-[130px] "
                alt=""
              />
            </div>
            <div className="grid grid-cols-1  h-full xl:max-w-[1400px] border border-t-[1]  border-b-0 border-l-0 border-r-0 border-[#D4D297] p-2 mt-[60px] tinso90:mt-[75px] carsho12:mt-[60px]  sm:mt-[-30px]  lg:mt-[380px] sxl:mt-[395px] gap-y-0 gap-x-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mx-auto w-full group    min-h-[250px] h-auto sm:h-[250px]   xl:w-auto   relative">
                <div className="w-full h-full genesis">
                  <p
                    className={`${cinzel.className} group-hover:bg-[#D4D297] group-hover:mb-2 duration-300 delay-75 ease-linear  group-hover:text-[#111]      border border-[#D4D297] capitalize text-[#D4D297] text-center text-[38px] 2xl:text-[44px] font-bold`}
                  >
                    Featured Game
                  </p>
                  <p
                    className={`${roboto_slab.className}  px-2 capitalize group-hover:text-[#92916f] text-[#615d55] text-center pt-4 group-hover:text-[21px] text-[20px] `}
                  >
                    Discover{" "}
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      'The Genesis',{" "}
                    </span>
                    our first{" "}
                    <span className=" pl-1 text-[#615d55] group-hover:text-[#D4D297] group-hover:text-[25px]  text-[24px] font-bold">
                      AI-driven AAA MMORPG.{" "}
                    </span>
                    Explore a{" "}
                    <span className=" pl-1 text-[#615d55] group-hover:text-[#D4D297] group-hover:text-[25px]  text-[24px] font-bold">
                      vast, dynamic{" "}
                    </span>
                    world filled with{" "}
                    <span className=" pl-1 text-[#615d55] group-hover:text-[#D4D297] group-hover:text-[25px]  text-[24px] font-bold">
                      adventure{" "}
                    </span>
                    and{" "}
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px]  text-[24px] font-bold">
                      opportunity{" "}
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="mx-auto     min-h-[250px] h-auto sm:h-[250px]  group mt-5 sm:mt-0 w-full xl:w-auto  relative">
                <div className="w-full  h-full genesis">
                  <p
                    className={`${cinzel.className} group-hover:bg-[#D4D297] group-hover:mb-2 duration-300 delay-75 ease-linear  group-hover:text-[#111]      border border-[#D4D297] capitalize text-[#D4D297] text-center text-[38px] 2xl:text-[44px] font-bold`}
                  >
                    Play-and-Earn
                  </p>
                  <p
                    className={`${roboto_slab.className}  px-2 capitalize group-hover:text-[#92916f] text-[#615d55] text-center pt-4 group-hover:text-[21px] text-[20px] `}
                  >
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      Elysian Odyssey's{" "}
                    </span>
                    play-and-earn model allows you to{" "}
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      earn real-world rewards{" "}
                    </span>
                    by participating in the game. Complete
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      quests, win battles,{" "}
                    </span>
                    and{" "}
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      contribute{" "}
                    </span>
                    to the ecosystem and
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      earn $ELY tokens.{" "}
                    </span>
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="mx-auto group mt-5 lg:mt-0   min-h-[250px] h-auto sm:h-[250px]   w-full xl:w-auto   relative">
                <div className="w-full  h-full genesis">
                  <p
                    className={`${cinzel.className} group-hover:bg-[#D4D297] group-hover:mb-2 duration-300 delay-75 ease-linear  group-hover:text-[#111]      border border-[#D4D297] capitalize text-[#D4D297] text-center text-[34px] 2xl:text-[38px] font-bold`}
                  >
                    In-Game Professions
                  </p>
                  <p
                    className={`${roboto_slab.className}  px-2 capitalize group-hover:text-[#92916f] text-[#615d55] text-center pt-4 group-hover:text-[21px] text-[20px] `}
                  >
                    Choose from various{" "}
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      in-game professions{" "}
                    </span>
                    such as{" "}
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      crafting, trading,{" "}
                    </span>
                    and{" "}
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      mining.{" "}
                    </span>
                    Each profession{" "}
                    <span className=" pl-1 group-hover:text-[#D4D297] text-[#615d55] group-hover:text-[25px] text-[24px] font-bold">
                      offers unique opportunities to earn and grow{" "}
                    </span>
                    within the game.
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