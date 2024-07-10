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
import { Roboto_Slab } from "next/font/google";
import Description from "./reusable/Description";
import Link from "next/link";
const roboto_slab = Roboto_Slab({
  weight: ["300", "400", "500", "600"],
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
      <div className=" min-h-[850px] mt-[-200px] sm:min-h-[950px]    larger:min-h-[1000px] larger:max-h-[1200px]  relative overflow-hidden ">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/Assets/Background-Landing-P.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="w-full px-4 flex justify-center items-center  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[2500px] mx-auto sm:px-4 xl:px-16 h-full items-center gap-2 w-full  ">
              <div className="mt-[100px] lg:mt-0">
                {/* <Image
                  src={"/Assets/Logo.webp"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  width={500}
                  height={500}
                  className=""
                /> */}
                <img
                  src="/Assets/Logo.webp"
                  className="w-[260px] sm:w-[500px] mx-auto lg:w-auto lg:h-auto"
                  alt=""
                />
                <Image
                  src={"/Assets/Button.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  onClick={handleDownload}
                  width={350}
                  height={100}
                  className="w-[200px] hover:scale-x-125 duration-300 delay-100 ease-linear sm:w-auto mx-auto mt-8"
                />
              </div>
              <img
                src="/Assets/Linija.svg"
                className="absolute top-[50%] hidden lg:block left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]"
                alt=""
              />

              <div className="min-w-[50%] mt-[-120px] sm:mt-0 z-10 xl:min-w-auto">
                {/* <p
                  className={`text-[30px] wel sm:text-[42px] atharo:text-[80px] font-[300!important] text-center lg:text-right text-[#D4D297] atharo:leading-[90px]`}
                >
                  Welcome to
                </p>
                <h1
                  className={`hero_title font-bold text-[#D4D297] text-[38px] leading-[50px]  sm:text-[52px] sm:leading-[62px]    atharo:text-[79px] text-center lg:text-right atharo:leading-[88px]`}
                >
                  Elysian Odyssey
                </h1> */}
                <img
                  src="/Assets/welcome.svg"
                  className="w-[300px] sm:w-[450px] ml-auto mr-auto lg:mr-0  lg:w-[350px] xl:w-[400px] 2xl:w-auto lg:ml-auto"
                  alt=""
                />
                <p
                  className={`${roboto_slab.className} text-[18px] leading-[27px] sm:text-[20px] sm:leading-[36px]  xl:text-[31px] font-[300!important] text-center lg:text-right text-[#F3F3F3] xl:leading-[42px]`}
                >
                  <span className={`font-bold`}>Elysian Odyssey</span> is a{" "}
                  <span className={`font-bold`}>game development platform</span>
                  <br className="hidden sm:block"></br> that requires
                  <span className="text-[#0DA25A]"> no prior</span> game
                  <span className={`font-bold`}> development skills,</span>{" "}
                  <br className="hidden sm:block"></br> allows
                  <span className="text-[#0DA25A]"> seamless</span>{" "}
                  <span className={`font-bold`}>asset integration,</span>{" "}
                  delivers<br className="hidden sm:block"></br>{" "}
                  <span className="text-[#0DA25A]">extremely lightweight</span>{" "}
                  <span className={`font-bold`}>content,</span> powered by the{" "}
                  <br className="hidden sm:block"></br>
                  revolutionary <span className={`text-[#0DA25A]`}>i</span>
                  <span className={`font-bold`}>Magus</span> engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
