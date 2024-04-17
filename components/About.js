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
      <div className=" min-h-[1200px] mt-[0]   md:min-h-[800px] md:max-h-[800px]  relative overflow-hidden ">
        <div className=" absolute top-0 flex justify-center items-center w-full h-[400px] left-0 z-[50]">
          <h2 className=" text-center sectionTitle text-[42px] md:text-[200px]">
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
        <div className="w-full mt-[150px] sm:mt-[50px]  px-4  md:min-h-[800px] md:max-h-[800px]   py-10 flex justify-center items-center absolute top-0 left-0 h-full z-[100000] max-auto">
          <div className=" max-w-[1400px]  mx-auto  sm:mt-[300px] md:mt-0 md:min-h-[450px] md:max-h-[450px] ">
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
                <Image
                  src={"/images/OurVision.png"}
                  alt="eye"
                  width={400}
                  height={400}
                  className="hover:scale-[1.1] duration-200 delay-75 ease-linear"
                />
              </motion.div>

              <motion.div
                variants={fadeIn("up", "bounce", 0.2, 1)}
                className=""
              >
                <Image
                  src={"/images/OurMission.png"}
                  alt="eye"
                  width={400}
                  height={400}
                  className="hover:scale-[1.1] duration-200 delay-75 ease-linear"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", "bounce", 0.2, 1)}
                className=""
              >
                <Image
                  src={"/images/Commitment.png"}
                  alt="eye"
                  width={400}
                  height={400}
                  className="hover:scale-[1.1] duration-200 delay-75 ease-linear"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
