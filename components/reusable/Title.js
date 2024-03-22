"use client";
import React from "react";
import { Roboto_Slab, Work_Sans } from "next/font/google";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
import { motion } from "framer-motion";
import { textVariant3 } from "@/utils/motion";

const Title = ({ text, className }) => {
  return (
    <motion.h2
      variants={textVariant3}
      initial="hidden"
      whileInView="show"
      className={`${roboto_slab.className}  text-[#f2d387] pt-5 pb-20 font-bold text-[40px] leading-[40px] uppercase ${className}`}
    >
      {text}
    </motion.h2>
  );
};

export default Title;
