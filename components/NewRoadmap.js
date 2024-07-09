"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { TypingText } from "./reusable/CustomText";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  slideIn,
  staggerContainer,
  textVariant2,
  textVariant3,
} from "@/utils/motion";
import { Cinzel, Roboto_Slab, Work_Sans } from "next/font/google";
import Description from "./reusable/Description";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const cinzel = Cinzel({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const NewRoadmap = () => {
  return (
    <div id="Roadmap" className="bg-[#241D1C] px-4  sm:px-16">
      <h2
        className={`${cinzel.className} text-center sectionTitle text-[60px] md:text-[110px] larger:text-[200px]`}
      >
        ROADMAP
      </h2>
      <div className="max-w-[1100px] mx-auto">
        <p
          className={`${roboto_slab.className} font-bold text-[#fff] text-[60px] sm:text-[100px] text-center`}
        >
          2022
        </p>
        <div className="border border-[#8F8D68] mx-auto">
          <h2
            className={`${roboto_slab} font-bold text-[36px] sm:text-[44px] border p-5 border-t-0 border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
          >
            {" "}
            NFT Community Building and NFT Sale
          </h2>
          <div className="p-5">
            <p className="py-6 font-semibold text-[#fff] text-[18px] text-center">
              During this phase our team has worked on creating the storyline,
              designing the characters, building community and selling the
              characters in form of NFT.
            </p>
            <p className="text-[#fff] text-[16px] text-center">
              - Lore creation: The story about the four beings of genesis has
              been born.Each character got in depth explanation about their
              abilities and disadvantages. <br /> - Character design: Each
              character was carefully designed to contain the characteristics
              described in the Lore. <br /> - NFT mint: 5556 Elysians were born
              to live on the blockchain -
              <br /> Community building: a community of 1000+ holders was
              created.
            </p>
          </div>
        </div>
        <p
          className={`${roboto_slab.className} font-bold text-[#fff] text-[60px] sm:text-[100px] text-center`}
        >
          2023
        </p>
        <div className="grid relative grid-cols-1 py-4 lg:grid-cols-2 gap-5 lg:gap-1">
          <div className="">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q1
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q2
                </p>
              </div>
              <h2
                className={`${roboto_slab} font-bold px-2 text-[30px] sm:text-[38px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                NFT Community Building and NFT Sale
              </h2>
            </div>
            <div className="w-full border border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                During this phase, our team focuses on conceptualising the game
                mechanics, storyline, and world-building elements of Elysian
                Odyssey. Key activities include:
              </p>
              <p className="py-6 text-[#fff] text-[16px] px-4">
                - Conceptualization: Refining the game concept, defining core
                gameplay mechanics, and establishing the narrative framework. -
                Prototype Development: Building early-stage prototypes to test
                fundamental game mechanics and gather user feedback.
              </p>
            </div>
          </div>
          <Image
            src={"/whiteline.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            width={5}
            height={600}
            className="absolute top-0 hidden lg:block left-[50%] translate-x-[-50%] h-full  w-[5px]  "
          />
          {/* 2 */}
          <div className=" lg:mt-20">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q3
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q4
                </p>
              </div>
              <h2
                className={`${roboto_slab} font-bold px-2 text-[30px] sm:text-[38px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                NFT Community Building and NFT Sale
              </h2>
            </div>
            <div className="w-full border border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                During this phase, our team focuses on conceptualising the game
                mechanics, storyline, and world-building elements of Elysian
                Odyssey. Key activities include:
              </p>
              <p className="py-6 text-[#fff] text-[16px] px-4">
                - Conceptualization: Refining the game concept, defining core
                gameplay mechanics, and establishing the narrative framework. -
                Prototype Development: Building early-stage prototypes to test
                fundamental game mechanics and gather user feedback.
              </p>
            </div>
          </div>
        </div>

        <p
          className={`${roboto_slab.className} font-bold text-[#fff] text-[60px] sm:text-[100px] text-center`}
        >
          2024
        </p>
        {/* 2 grid */}
        <div className="grid relative grid-cols-1 py-4 lg:grid-cols-2 gap-5 lg:gap-1">
          <div className="">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q1
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q2
                </p>
              </div>
              <h2
                className={`${roboto_slab} font-bold px-2 text-[30px] sm:text-[38px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                NFT Community Building and NFT Sale
              </h2>
            </div>
            <div className="w-full border border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                During this phase, our team focuses on conceptualising the game
                mechanics, storyline, and world-building elements of Elysian
                Odyssey. Key activities include:
              </p>
              <p className="py-6 text-[#fff] text-[16px] px-4">
                - Conceptualization: Refining the game concept, defining core
                gameplay mechanics, and establishing the narrative framework. -
                Prototype Development: Building early-stage prototypes to test
                fundamental game mechanics and gather user feedback.
              </p>
            </div>
          </div>
          <Image
            src={"/whiteline.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            width={5}
            height={600}
            className="absolute top-0 hidden lg:block left-[50%] translate-x-[-50%] h-full  w-[5px]  "
          />
          {/* 2 */}
          <div className=" lg:mt-20">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q3
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q4
                </p>
              </div>
              <h2
                className={`${roboto_slab} font-bold px-2 text-[30px] sm:text-[38px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                NFT Community Building and NFT Sale
              </h2>
            </div>
            <div className="w-full border border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                During this phase, our team focuses on conceptualising the game
                mechanics, storyline, and world-building elements of Elysian
                Odyssey. Key activities include:
              </p>
              <p className="py-6 text-[#fff] text-[16px] px-4">
                - Conceptualization: Refining the game concept, defining core
                gameplay mechanics, and establishing the narrative framework. -
                Prototype Development: Building early-stage prototypes to test
                fundamental game mechanics and gather user feedback.
              </p>
            </div>
          </div>
        </div>
        <p
          className={`${roboto_slab.className} font-bold text-[#fff] text-[60px] sm:text-[100px] text-center`}
        >
          2025
        </p>
        <div className="flex justify-center items-center  py-4 lg:grid-cols-2 gap-5 ">
          <div className="max-w-[540px]">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q1
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q2
                </p>
              </div>
              <h2
                className={`${roboto_slab} font-bold px-2 text-[30px] sm:text-[38px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                NFT Community Building and NFT Sale
              </h2>
            </div>
            <div className="w-full border border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                During this phase, our team focuses on conceptualising the game
                mechanics, storyline, and world-building elements of Elysian
                Odyssey. Key activities include:
              </p>
              <p className="py-6 text-[#fff] text-[16px] px-4">
                - Conceptualization: Refining the game concept, defining core
                gameplay mechanics, and establishing the narrative framework. -
                Prototype Development: Building early-stage prototypes to test
                fundamental game mechanics and gather user feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoadmap;
