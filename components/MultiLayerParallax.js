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

  return (
    <div
      ref={ref}
      className="w-full mt-[-220px] h-[990px] overflow-hidden relative grid place-items-center"
    >
      {/* <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        PARALLAX
      </motion.h1> */}

      <motion.div
        style={{ y: textY }}
        className=" mt-[-200px] overflow-hidden h-[400px] flex flex-col justify-center items-center relative z-10"
      >
        <motion.img
          src="/images/whitelogo.png"
          alt="logo"
          className="font-bold w-[550px] h-[220px] text-white text-7xl md:text-9xl "
        />
        <Button className=" uppercase mx-auto text-center  text-[#fff] ">
          whitepaper
        </Button>
      </motion.div>

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
