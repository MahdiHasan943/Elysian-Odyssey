"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Button from "./reusable/Button";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const buttonZ = useTransform(scrollYProgress, [0, 1], [30, 10]); // Adjust z based on scroll
  const textYB = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div
      ref={ref}
      className="w-full mt-[-220px] h-[990px] overflow-hidden relative grid place-items-center"
    >
      <div
        // Set zIndex dynamically
        className="  overflow-hidden mt-[-220px]  flex flex-col justify-center items-center relative "
      >
        <motion.img
          style={{ y: textY }}
          src="/images/whitelogo.png"
          alt="logo"
          className="font-bold mt-[150px] w-[550px] h-[220px]  z-10 "
        />
        <motion.div style={{ y: textYB, zIndex: buttonZ }} className="">
          <Button className=" uppercase mx-auto text-center  text-[#fff] ">
            whitepaper
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/images/heromain.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
