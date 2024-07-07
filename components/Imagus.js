"use client";
import Image from "next/image";
import React from "react";
import { TypingText } from "./reusable/CustomText";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  slideIn,
  staggerContainer,
} from "@/utils/motion";
import { Roboto_Slab, Cinzel } from "next/font/google";
import Description from "./reusable/Description";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const cinzel = Cinzel({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});
const Imagus = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[-50px] z-0"
      id="iMagus"
    >
      <div className="  mt-[0] min-h-[2000px] sm:min-h-[1500px] sm:max-h-[1800px]   lg:min-h-[900px] lg:max-h-[900px]  relative ">
        <div className=" absolute top-0 flex justify-center items-center w-full min-h-[250px] sm:h-[400px] left-0 z-[50]">
          <img
            className="absolute top-[-50px] w-[120px]   left-[50%] translate-x-[-50%]"
            src="/Assets/iMagus.png"
            alt=""
          />

          <h2
            className={`${cinzel.className} capitalize text-center  sectionTitle text-[42px] tracking-tighter sm:text-[120px] lg:text-[160px] 2xl:text-[180px]`}
          >
            iMagus Engine
          </h2>
        </div>

        <div className="absolute top-0 bg-[#191919] border border-[#566000] left-0 h-full w-full">
          {/* <Image
            src={"/Assets/about.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
            className=""
          /> */}
        </div>
        <div className="w-full mt-[50px]  xl:px-16 sm:mt-[50px]  px-4 sm:min-h-[1200px] sm:max-h-[1200px]    lg:min-h-[800px] lg:max-h-[800px]   py-10 flex justify-center items-center absolute top-0 left-0 h-full z-[100000] max-auto">
          <div className="   mx-auto  ">
            {/* <Image
              src={"/Screenshot_2.png"}
              alt="eye"
              width={400}
              height={400}
              className="block sm:hidden"
            /> */}
            <div className="grid grid-cols-1  h-full xl:max-w-[1400px] border border-[#D4D297] p-2 md:mt-[200px] gap-y-0 gap-x-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mx-auto w-full min-h-[500px]  xl:w-auto imagus1  relative">
                <div className="w-full h-full imagus">
                  <p
                    className={`${roboto_slab.className}  capitalize text-[#D4D297] text-center text-[50px] lg:text-[56px] font-bold`}
                  >
                    Overview
                  </p>
                  <div className={` w-full   h-[2px] bg-[#D4D297]`}></div>
                  <p
                    className={`${roboto_slab.className} px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    ReThe iMagus engine is the heart of Elysian Odyssey,
                    designed to make game development accessible and efficient.
                    Our custom-built engine delivers high-quality graphics,
                    lightweight content, and seamless asset integration.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="mx-auto imagus2 min-h-[500px]  mt-5 sm:mt-0 w-full xl:w-auto  relative">
                <div className="w-full  h-full imagus">
                  <p
                    className={`${roboto_slab.className}  capitalize text-[#D4D297] text-center text-[50px] lg:text-[56px] font-bold`}
                  >
                    Key Advantages
                  </p>
                  <div className={` w-full  h-[2px] bg-[#D4D297]`}></div>
                  <p
                    className={`${roboto_slab.className} px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    C- No Prior Skills Required - Create and develop games
                    without any technical expertise.{" "}
                  </p>

                  <p
                    className={`${roboto_slab.className} px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    - Optimized Performance - Enjoy high-quality graphics with
                    minimal weight.
                  </p>
                  <p
                    className={`${roboto_slab.className} px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    - Blockchain Integration - Secure and transparent
                    transactions with full on-chain support.
                  </p>
                  <p
                    className={`${roboto_slab.className} px-2 capitalize pb-10 text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    - Easy asset integration - Effortlessly integrate assets for
                    a seamless game development experience
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="mx-auto mt-5 lg:mt-0 min-h-[500px]  w-full xl:w-auto imagus3  relative">
                <div className="w-full  h-full imagus">
                  <p
                    className={`${roboto_slab.className}  capitalize text-[#D4D297] text-center text-[50px] lg:text-[56px] font-bold`}
                  >
                    Compatibility
                  </p>
                  <div className={` w-full h-[2px] bg-[#D4D297]`}></div>
                  <p
                    className={`${roboto_slab.className} px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    Designed for all game types, our platform supports 2D, 3D,
                    AAA titles, indie games, and beyond, ensuring versatility
                    and flexibility for any development project.
                  </p>
                </div>
              </div>
              {/* 4 */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Imagus;
