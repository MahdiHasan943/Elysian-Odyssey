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
import { Roboto_Slab, Work_Sans, Cinzel } from "next/font/google";
import Description from "./reusable/Description";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
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
      id="our-mission"
    >
      <div className=" min-h-[1450px] mt-[0]   md:min-h-[900px] md:max-h-[900px]  relative overflow-hidden ">
        <div className=" absolute top-0 flex justify-center items-center w-full h-[400px] left-0 z-[50]">
          <h2 className=" text-center sectionTitle text-[42px] lg:text-[160px] 2xl:text-[200px]">
            WHO ARE WE
          </h2>
        </div>

        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/panel/who.jpg"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="w-full mt-[50px] sm:mt-[50px]  px-4  md:min-h-[800px] md:max-h-[800px]   py-10 flex justify-center items-center absolute top-0 left-0 h-full z-[100000] max-auto">
          <div className=" max-w-[1600px]  mx-auto  sm:mt-[300px] md:mt-0 md:min-h-[450px] md:max-h-[450px] ">
            {/* <Image
              src={"/Screenshot_2.png"}
              alt="eye"
              width={400}
              height={400}
              className="block sm:hidden"
            /> */}
            <div className="grid grid-cols-1  gap-5 md:grid-cols-3">
              <motion.div
                variants={fadeIn("right", "bounce", 0.2, 1)}
                className=""
              >
                <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] ">
                  <Image
                    src={"/who1.png"}
                    alt="eye"
                    layout="fill"
                    objectFit="fill"
                    className="hover:scale-[1.1] duration-200 delay-75 ease-linear"
                  />
                  <div className="absolute  w-full bottom-[80px] left-1/2 -translate-x-1/2">
                    <p className="text-[#fff] font-bold  text-center">
                      Crafting a{" "}
                      <span className="text-[#ff7f98]">Custom Engine </span>
                      <br /> to Cultivate a Sustainable <br /> Gaming Ecosystem
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "bounce", 0.2, 1)}
                className=""
              >
                <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] xl:w-[450px] xl:h-[400px] ">
                  <Image
                    src={"/who2.png"}
                    alt="eye"
                    layout="fill"
                    objectFit="fill"
                    className="hover:scale-[1.1] duration-200 delay-75 ease-linear"
                  />
                  <div className="absolute  w-full bottom-[80px] left-1/2 -translate-x-1/2">
                    <p className="text-[#fff] font-bold  text-center">
                      Bringing a Revolutionary <br />
                      <span className="text-[#ff7f98] pr-1">
                        {" "}
                        AI-Driven MMORPG
                      </span>
                      Experience <br />
                      to Gamers Worldwide.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("left", "bounce", 0.2, 1)}
                className=""
              >
                <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] ">
                  <Image
                    src={"/who3.png"}
                    alt="eye"
                    layout="fill"
                    objectFit="fill"
                    className="hover:scale-[1.1] duration-200 delay-75 ease-linear"
                  />
                  <div className="absolute  w-full bottom-[80px] left-1/2 -translate-x-1/2">
                    <p className="text-[#fff] font-bold  text-center">
                      Creating{" "}
                      <span className="text-[#ff7f98]">Jobs and Careers</span>{" "}
                      <br />
                      of the New Age Within Game
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
