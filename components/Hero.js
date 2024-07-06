"use client";
import Image from "next/image";
import React, { useState } from "react";
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
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);
  let timeoutId;

  // Function to toggle hover status with a delay
  const handleHover = () => {
    // Clear any existing timeout
    clearTimeout(timeoutId);

    // Set a new timeout to toggle the hover state after 200 milliseconds
    timeoutId = setTimeout(() => {
      setIsHovered(!isHovered);
    }, 200);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    // Clear the timeout if mouse leaves before the delay
    clearTimeout(timeoutId);

    // Reset the hover state immediately
    setIsHovered(false);
  };
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
      className="z-10"
    >
      <div className=" min-h-[800px] mt-[-200px] sm:min-h-[1000px]    larger:min-h-[1400px] larger:max-h-[1200px]  relative overflow-hidden ">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/Assets/Background-Landing-P.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="w-full px-4 flex justify-center   py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-20"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
