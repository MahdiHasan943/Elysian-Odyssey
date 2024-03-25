"use client";
// MultiLayerParallax.js
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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

  // const handleDownload = () => {
  //   // You can implement the download logic here
  //   // For example, triggering the download of a PDF file
  //   // In this case, we're simulating the download of a PDF file
  //   const pdfURL = "/Elysian-Odyssey-Whitepaper-copy-compressed.pdf";
  //   window.open(pdfURL, "_blank");
  // };
  const handleDownload = () => {
    const pdfURL = "/Elysian-Odyssey-Whitepaper-copy-compressed.pdf";

    // Create a temporary anchor element
    const anchorElement = document.createElement("a");
    anchorElement.href = pdfURL;
    anchorElement.download = "whitepaper.pdf"; // Set the filename for the download

    // Append the anchor element to the body
    document.body.appendChild(anchorElement);

    // Trigger a click event on the anchor element
    anchorElement.click();

    // Remove the anchor element from the body
    document.body.removeChild(anchorElement);
  };

  return (
    <div
      ref={ref}
      className="w-full mt-[-220px] h-[1000px] sm:h-[990px] overflow-hidden relative grid place-items-center"
    >
      <div
        // Set zIndex dynamically
        className="  overflow-hidden mt-[-250px]  sm:mt-[-220px]  flex flex-col justify-center items-center relative "
      >
        <motion.img
          style={{ y: textY }}
          src="/images/whitelogo.png"
          alt="logo"
          className="font-bold mt-[150px] w-[550px] h-[220px]  z-10 "
        />
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
        className="absolute inset-0  z-0"
        style={{
          backgroundImage: `url(/images/heromain.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          // y: backgroundY,
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
