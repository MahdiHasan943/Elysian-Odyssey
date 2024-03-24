"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

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
      className="w-full mt-[-140px] h-[900px] overflow-hidden relative grid place-items-center"
    >
      {/* <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        PARALLAX
      </motion.h1> */}

      <motion.img
        src={"/images/logo.png"}
        alt="logo"
        style={{ y: textY }}
        className="font-bold w-[450px] mt-[-100px] h-[500px] text-white text-7xl md:text-9xl relative z-10"
      />
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
