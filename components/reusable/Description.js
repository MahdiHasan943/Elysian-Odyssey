"use client";
import React from "react";
import { IBM_Plex_Mono, Roboto_Slab } from "next/font/google";

import { motion } from "framer-motion";
import { textVariant3, textVariant4 } from "@/utils/motion";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const Description = ({ text, className }) => {
  return (
    <motion.p
      variants={textVariant4}
      initial="hidden"
      whileInView="show"
      className={`${roboto_slab.className}  ${className} text-[21px] max-w-[1220px] mx-auto font-thin text-[#fff]`}
    >
      {text}
    </motion.p>
  );
};

export default Description;
