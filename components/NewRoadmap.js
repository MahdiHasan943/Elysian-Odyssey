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
    <div className="bg-[#241D1C] px-4 sm:px-16">
      <h2
        className={`${cinzel.className} text-center sectionTitle text-[60px] md:text-[200px] larger:text-[200px]`}
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
      </div>
    </div>
  );
};

export default NewRoadmap;
