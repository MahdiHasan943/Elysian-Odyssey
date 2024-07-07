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
const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[-50px] z-0"
      id="About-Us"
    >
      <div className=" min-h-[1100px] mt-[0]   md:min-h-[900px] md:max-h-[900px]  relative overflow-hidden ">
        <div className=" absolute top-0 flex justify-center items-center w-full min-h-[100px] sm:h-[400px] left-0 z-[50]">
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
        <div className="w-full mt-[50px] sm:mt-[50px]  px-4  md:min-h-[800px] md:max-h-[800px]   py-10 flex justify-center items-center absolute top-0 left-0 h-full z-[100000] max-auto">
          <div className="   mx-auto  ">
            {/* <Image
              src={"/Screenshot_2.png"}
              alt="eye"
              width={400}
              height={400}
              className="block sm:hidden"
            /> */}
            <div className="grid grid-cols-1 mt-[-100px] sm:mt-0  md:mt-[200px] gap-6  xl:gap-20 md:grid-cols-2">
              <div className="mx-auto w-full xl:w-auto abox1  relative">
                <div className="w-full p-5 h-full abox">
                  <p
                    className={`${roboto_slab.className} capitalize text-[#D4D297] text-center text-[56px] font-bold`}
                  >
                    Mission
                  </p>
                  <div
                    className={` w-full max-w-[290px] min-w-[290px]   xl:min-w-[500px] xl:max-w-full  h-[2px] bg-[#D4D297]`}
                  ></div>
                  <p
                    className={`${roboto_slab.className} capitalize text-[#fff] text-center pt-4 text-[22px] `}
                  >
                    Revolutionize the Gaming Industry
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="mx-auto abox2 w-full xl:w-auto  relative">
                <div className="w-full p-5 h-full abox">
                  <p
                    className={`${roboto_slab.className} capitalize text-[#D4D297] text-center text-[56px] font-bold`}
                  >
                    Vision
                  </p>
                  <div
                    className={` w-full max-w-[290px] min-w-[290px]    xl:min-w-[500px] xl:max-w-full  h-[2px] bg-[#D4D297]`}
                  ></div>
                  <p
                    className={`${roboto_slab.className} capitalize text-[#fff] text-center pt-4 text-[22px] `}
                  >
                    Create a Sustainable, <br></br> Player-Driven Ecosystem{" "}
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="mx-auto w-full xl:w-auto abox3  relative">
                <div className="w-full p-5 h-full abox">
                  <p
                    className={`${roboto_slab.className} capitalize text-[#D4D297] text-center text-[56px] font-bold`}
                  >
                    Team{" "}
                  </p>
                  <div
                    className={` w-full max-w-[290px] min-w-[290px]   xl:min-w-[500px] xl:max-w-full  h-[2px] bg-[#D4D297]`}
                  ></div>
                  <img src="/Assets/abtn.png" className="mx-auto pt-4" alt="" />
                </div>
              </div>
              {/* 4 */}
              <div className="mx-auto abox4 w-full xl:w-auto relative">
                <div className="w-full p-5 h-full abox">
                  <p
                    className={`${roboto_slab.className} capitalize text-[#D4D297] text-center text-[56px] font-bold`}
                  >
                    Our Story
                  </p>
                  <div
                    className={` w-full max-w-[290px] min-w-[290px]  xl:min-w-[500px] xl:max-w-full  h-[2px] bg-[#D4D297]`}
                  ></div>
                  <p
                    className={`${roboto_slab.className} capitalize text-[#fff] text-center pt-4 text-[22px] `}
                  >
                    iMagus engine
                  </p>
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
