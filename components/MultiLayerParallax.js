"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Button from "./reusable/Button";
import Title from "./reusable/Title";
import { TypingText, TypingText1 } from "./reusable/CustomText";
import { staggerContainer } from "@/utils/motion";

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

  const handleDownload = () => {
    const pdfURL = "/images/newfile_compressed.pdf";
    window.open(pdfURL, "_blank");
  };

  return (
    <div
      ref={ref}
      className="w-full mt-[-220px] h-[1000px] sm:h-[990px] overflow-hidden relative grid place-items-center"
    >
      <div
        // Set zIndex dynamically
        className="  overflow-hidden mt-[-250px]  sm:mt-[-100px]  flex flex-col justify-center items-center relative "
      >
        {/* <motion.img
          style={{ y: textY }}
          src="/images/whitelogo.png"
          alt="logo"
          className="font-bold mt-[150px] w-[550px] h-[220px]  z-10 "
        /> */}
        <motion
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="div"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            style={{ y: textY }}
            className="font-bold text-white w-full sm:w-auto sm:max-w-[750px] mx-auto text-center pt-20 text-[20px]   sm:text-[40px] sm:leading-[60px] uppercase relative z-20"
          >
            {" "}
            <TypingText1
              textStyles={"text-white"}
              title="Elysian Odyssey - Build On Fast"
            />
            <TypingText1
              textStyles={"text-white"}
              title="Scalable AND Custom Engine"
            />
          </motion.div>
        </motion>

        <motion.div
          style={{ y: textYB, zIndex: buttonZ }}
          className="min-h-[100px] mt-[-50px] py-20"
        >
          <Button
            className=" uppercase mx-auto text-center  text-[#fff] "
            onClick={handleDownload}
          >
            whitepaper
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0  z-10"
        style={{
          backgroundImage: `url(/images/heromain.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      <motion.div
        className="absolute inset-0  z-0"
        style={{
          backgroundImage: `url(/images/heromain.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0  z-20"
        style={{
          backgroundImage: `url(/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
