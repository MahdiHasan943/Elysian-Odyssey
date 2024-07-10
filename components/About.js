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
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[-50px]  z-0"
      id="About-Us"
    >
      <div className=" min-h-[1450px] mt-[0] sm:min-h-[1050px] sm:max-h-[1050px]   lg:min-h-[1050px] lg:max-h-[1050px]  relative  ">
        <div className=" absolute top-0 flex bg-[#191919] sm:bg-transparent justify-center items-center w-full min-h-[100px] sm:h-[400px] left-0 z-[50]">
          <h2
            className={`${cinzel.className} capitalize text-center  sectionTitle text-[42px] sm:text-[120px] lg:text-[160px] 2xl:text-[200px]`}
          >
            ABOUT US
          </h2>
        </div>

        <div className="absolute top-0 bg-[#191919] left-0 h-full w-full">
          {/* <Image
            src={"/Assets/about.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
            className=""
          /> */}
        </div>
        <div className="w-full mt-[50px]  sm:mt-[50px]  px-4  md:min-h-[800px] md:max-h-[800px]    py-10 flex justify-center items-center absolute top-0 left-0 h-full  max-auto">
          <div className="   mx-auto w-full ">
            {/* <Image
              src={"/Screenshot_2.png"}
              alt="eye"
              width={400}
              height={400}
              className="block sm:hidden"
            /> */}
            <div className="grid w-full 2xl:w-[70%] mx-auto grid-cols-1 mt-[-100px] sm:mt-0  md:mt-[200px] gap-1  xl:gap-1 md:grid-cols-2">
              <div className="mx-auto border  flex justify-center items-center border-[#D4D297] h-[280px] w-full group abox1  relative">
                <div className=" py-2 w-[300px] xl:w-[500px] group-hover:w-full group-hover:h-full  duration-300 delay-100 ease-linear  h-[80%] abox">
                  <p
                    className={`${cinzel.className} capitalize text-[#D4D297] text-center text-[56px] font-bold`}
                  >
                    Mission
                  </p>
                  <div
                    className={` w-full max-w-[290px] min-w-[290px]   xl:min-w-[500px] xl:max-w-full  h-[2px] bg-[#D4D297]`}
                  ></div>
                  <p
                    className={`${roboto_slab.className} group-hover:hidden  capitalize text-[#fff] text-center pt-4 text-[22px] `}
                  >
                    Revolutionize the Gaming Industry
                  </p>
                  <div className="hidden group-hover:block transition-opacity duration-300 delay-100">
                    <p
                      className={`${roboto_slab.className} font-normal capitalize text-[#bab9b9] text-center pt-4 text-[18px] xl:text-[22px] `}
                    >
                      At{" "}
                      <span className="text-[#fff] font-bold">
                        {" "}
                        Elysian Odyssey, our mission
                      </span>{" "}
                      is <br></br>to{" "}
                      <span className="text-[#fff] font-bold">
                        revolutionize the gaming industry
                        <br />
                      </span>{" "}
                      by making game development accessible
                      <br /> to everyone.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div className="mx-auto border  flex justify-center items-center border-[#D4D297] h-[280px] w-full group abox2  relative">
                <div className=" py-2 w-[300px] xl:w-[500px] group-hover:w-full group-hover:h-full  duration-300 delay-100 ease-linear  h-[80%] abox">
                  <p
                    className={`${cinzel.className} capitalize text-[#D4D297] text-center text-[56px] font-bold`}
                  >
                    Vision
                  </p>
                  <div
                    className={` w-full max-w-[290px] min-w-[290px]   xl:min-w-[500px] xl:max-w-full  h-[2px] bg-[#D4D297]`}
                  ></div>
                  <p
                    className={`${roboto_slab.className} group-hover:hidden  capitalize text-[#fff] text-center pt-4 text-[22px] `}
                  >
                    Create a Sustainable,
                    <br /> Player-Driven Ecosystem
                  </p>
                  <div className="hidden group-hover:block transition-opacity duration-300 delay-100">
                    <p
                      className={`${roboto_slab.className} font-normal capitalize text-[#bab9b9] text-center pt-4 text-[18px] xl:text-[22px] `}
                    >
                      <span className="text-[#fff] font-bold"> Our vision</span>{" "}
                      is to
                      <span className="text-[#fff] px-1 font-bold">
                        create a sustainable,
                        <br />
                        player-driven ecosystem
                        <br />
                      </span>{" "}
                      that fosters creativity and innovation.
                    </p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="mx-auto border  flex justify-center items-center border-[#D4D297]  hover:h-[380px] lg:hover:h-[280px]  h-[280px] w-full group abox1  relative">
                <div className=" py-2 w-[300px] xl:w-[500px] group-hover:w-full group-hover:h-full  duration-300 delay-100 ease-linear  h-[80%] abox">
                  <p
                    className={`${cinzel.className} capitalize text-[#D4D297] text-center text-[56px] font-bold`}
                  >
                    Team
                  </p>
                  <div
                    className={` w-full max-w-[290px] min-w-[290px]   xl:min-w-[500px] xl:max-w-full  h-[2px] bg-[#D4D297]`}
                  ></div>
                  <div className="hidden group-hover:block transition-opacity duration-300 delay-100">
                    <p
                      className={`${roboto_slab.className} font-normal capitalize text-[#bab9b9] text-center pt-4 text-[18px] xl:text-[22px] `}
                    >
                      Meet our
                      <span className="text-[#fff] font-bold">
                        {" "}
                        team of industry veterans
                      </span>{" "}
                      with over a<br />
                      century of combined experience. Our members
                      <br />
                      ave worked on top-tier projects lik
                      <span className="text-[#fff] pl-1 font-bold">
                        Assassin's Creed
                        <br />
                        League of Legends, World of Warcraft, PUBG,
                      </span>{" "}
                      and more.
                    </p>
                  </div>{" "}
                  <a href="#team">
                    <img
                      src="/Assets/abtn.png"
                      className="mx-auto w-[230px] pt-4"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* 4 */}
              <div className="mx-auto border overflow-hidden  flex justify-center items-center border-[#D4D297] hover:h-[380px] lg:hover:h-[280px]  h-[280px] w-full group abox2  relative">
                <div className=" py-2 w-[300px] xl:w-[500px] group-hover:w-full group-hover:h-full  duration-300 delay-100 ease-linear  h-[80%] abox">
                  <p
                    className={`${cinzel.className} capitalize text-[#D4D297] text-center text-[56px] font-bold`}
                  >
                    Our Story
                  </p>
                  <div
                    className={` w-full max-w-[290px] min-w-[290px]   xl:min-w-[500px] xl:max-w-full  h-[2px] bg-[#D4D297]`}
                  ></div>
                  <p
                    className={`${roboto_slab.className} group-hover:hidden  capitalize text-[#fff] text-center pt-4 text-[22px] `}
                  >
                    iMagus engine
                  </p>
                  <div className="hidden group-hover:block transition-opacity duration-300 delay-100">
                    <p
                      className={`${roboto_slab.className} font-normal capitalize text-[#bab9b9] text-center pt-4 text-[18px] xl:text-[22px] `}
                    >
                      <span className="text-[#fff] font-bold">
                        {" "}
                        Elysian Odyssey
                      </span>{" "}
                      was founded with the goal of breaking down the barriers to
                      game development. Our journey began with the creation of
                      the
                      <span className="text-[#fff] px-1 font-bold">
                        Magus engine,
                        <br />
                      </span>
                      designed to empower anyone to create
                      <span className="text-[#fff] px-1 font-bold">
                        high-quality games
                      </span>
                      without prior experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
