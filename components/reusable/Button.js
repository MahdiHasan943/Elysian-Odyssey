"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant3 } from "@/utils/motion";

const Button = ({ className, children, ...props }) => {
  return (
    <motion.div
      variants={textVariant3}
      initial="hidden"
      whileInView="show"
      className={`animated-button h-[55px] w-[200px] relative flex justify-center items-center overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Button;
