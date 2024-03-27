"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import { Roboto_Slab, Work_Sans } from "next/font/google";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
export const TypingText = ({ title, textStyles }) => (
  <motion.h2
    variants={textContainer}
    className={` ${roboto_slab.className}  ${textStyles}  `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h2>
);

export const TypingTexth1 = ({ title, textStyles }) => (
  <motion.h1
    variants={textContainer}
    className={` ${roboto_slab.className}  ${textStyles}  `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>
);

export const TypingText1 = ({ title, textStyles }) => (
  <motion.h1
    variants={textContainer}
    className={` ${roboto_slab.className}  ${textStyles}  `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>
);
export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={` ${textStyles}`}
  >
    {title}
  </motion.h2>
);
