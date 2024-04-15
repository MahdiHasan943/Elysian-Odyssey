"use client";
import Image from "next/image";
import React from "react";
import { TypingText } from "./reusable/CustomText";
import { motion } from "framer-motion";
import { planetVariants, slideIn, staggerContainer } from "@/utils/motion";
import { Roboto_Slab, Work_Sans } from "next/font/google";
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
      className=""
      id="our-mission"
    >
      <div className=" min-h-[1000px] mt-[0]   md:min-h-[800px] md:max-h-[800px]  relative overflow-hidden ">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/whoweare.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="w-full  px-4  md:min-h-[800px] md:max-h-[800px]   py-10 flex justify-center items-center absolute top-0 left-0 h-full z-[100000] max-auto">
          <div className=" max-w-[1400px]  mx-auto  sm:mt-[300px] md:mt-0 md:min-h-[450px] md:max-h-[450px] ">
            <Image
              src={"/Screenshot_2.png"}
              alt="eye"
              width={400}
              height={400}
              className="block sm:hidden"
            />
            <div className="grid grid-cols-1  gap-5 md:grid-cols-3">
              <div className="">
                <Image
                  src={"/images/OurVision.png"}
                  alt="eye"
                  width={400}
                  height={400}
                />
              </div>

              <div className="">
                <Image
                  src={"/images/OurMission.png"}
                  alt="eye"
                  width={400}
                  height={400}
                />
              </div>
              <div className="">
                <Image
                  src={"/images/Commitment.png"}
                  alt="eye"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
