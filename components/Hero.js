"use client";
import Image from "next/image";
import React from "react";
import { TypingText } from "./reusable/CustomText";
import { motion } from "framer-motion";
import {
  planetVariants,
  slideIn,
  staggerContainer,
  textVariant2,
  textVariant3,
} from "@/utils/motion";
import { Roboto_Slab, Work_Sans } from "next/font/google";
import Description from "./reusable/Description";
import Link from "next/link";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const About = () => {
  const handleDownload = () => {
    const pdfURL = "/images/newfile_compressed.pdf";
    window.open(pdfURL, "_blank");
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
      id="our-mission"
    >
      <div className=" min-h-[800px] mt-[-200px]   lg:min-h-[1400px] lg:max-h-[1200px]  relative overflow-hidden ">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/images/new_charecter.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="w-full px-4 flex justify-center   py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-20">
              <motion.div
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                className=""
              >
                {" "}
                <Image
                  src={"/Logo-Zlatno.png"}
                  alt="logo"
                  width={800}
                  height={500}
                />
              </motion.div>
              <motion.div
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className=""
              >
                <Image
                  onClick={handleDownload}
                  src={"/redwhitePapper.png"}
                  alt="logo"
                  width={400}
                  height={127}
                  className="hover:scale-[1.1] w-[200px]  sm:h-auto sm:w-auto duration-200 delay-75 ease-linear"
                />
              </motion.div>
            </div>
          </div>
        </div>{" "}
      </div>
    </motion.div>
  );
};

export default About;
