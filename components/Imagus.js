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
  weight: ["400", "500", "600", "700", "800", "900"],
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
      className="mt-[-50px]"
      id="iMagus"
    >
      <div className="  mt-[0] min-h-[2080px] sm:min-h-[1500px] sm:max-h-[1800px]   lg:min-h-[900px] lg:max-h-[900px]  relative ">
        <div className=" absolute top-0 flex justify-center items-center w-full min-h-[250px] sm:h-[400px] left-0 z-[50]">
          <img
            className="absolute top-[-50px] w-[120px]  border-[5px] hover:border-[#0F8049] duration-200 delay-75 ease-linear hover:rotate-[-5deg] border-[#94180C] rounded-[999px]   left-[50%] translate-x-[-50%]"
            src="/Assets/iMagus.png"
            alt=""
          />

          <h2
            className={`  text-center  sectionTitle text-[42px] tracking-tighter sm:text-[120px] lg:text-[160px] 2xl:text-[180px]`}
          >
            <span
              className={`${roboto_slab.className} mr-[-20px] font-[400]  text-[32px] sm:text-[100px] lg:text-[140px] 2xl:text-[160px] sm:mr-[-50px]`}
            >
              {" "}
              i
            </span>{" "}
            <span className={`${cinzel.className}`}>Magus Engine</span>
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
            <div className="grid grid-cols-1  h-auto xl:max-w-[1400px] border border-[#D4D297] p-2 md:mt-[200px] gap-5 lg:gap-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mx-auto w-[98%] h-[98%] hover:w-full hover:h-full min-h-[500px] group   duration-500 delay-150 ease-linear  xl:w-auto imagus1  relative">
                <div className="w-full h-full imagus">
                  <p
                    className={`${cinzel.className} px-2 text-left group-hover:text-center group-hover:bg-[#f7f6a4] group-hover:text-[#111] duration-500 delay-150 ease-linear capitalize text-[#f7f6a4]  text-[44px]  lg:text-[44px] font-bold`}
                  >
                    Overview
                  </p>
                  <div className={` w-full   h-[2px] bg-[#D4D297]`}></div>
                  <p
                    className={`${roboto_slab.className} group-hover:scale-105 px-2 capitalize text-[#cfcd9a] text-center pt-4 text-[20px] `}
                  >
                    The
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      iMagus engine{" "}
                    </span>
                    is the heart of{" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      Elysian Odyssey,{" "}
                    </span>
                    designed to make game development{" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      accessible{" "}
                    </span>
                    and efficient. Our{" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      custom-built engine{" "}
                    </span>
                    delivers{" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      high-quality graphics,{" "}
                    </span>
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      lightweight content,{" "}
                    </span>
                    and{" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      seamless asset integration.{" "}
                    </span>
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="mx-auto w-[98%] h-[98%] hover:w-full hover:h-full min-h-[500px] group   duration-200 delay-75 ease-linear  xl:w-auto imagus2  relative">
                <div className="w-full  h-full imagus">
                  <p
                    className={`${cinzel.className}  px-2 text-left group-hover:text-center group-hover:bg-[#f7f6a4] group-hover:text-[#111] duration-300 delay-75 ease-linear capitalize text-[#f7f6a4]  text-[44px]  lg:text-[44px] font-bold`}
                  >
                    Key Advantages
                  </p>
                  <div className={` w-full  h-[2px] bg-[#D4D297]`}></div>
                  <p
                    className={`${roboto_slab.className} group-hover:scale-105 px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    {" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      No Prior Skills Required -{" "}
                    </span>
                    Create and develop games without any technical expertise.{" "}
                  </p>

                  <p
                    className={`${roboto_slab.className} group-hover:scale-105 px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      - Optimized Performance{" "}
                    </span>
                    - Enjoy high-quality graphics with minimal weight.
                  </p>
                  <p
                    className={`${roboto_slab.className} group-hover:scale-105 px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      - Blockchain Integration{" "}
                    </span>
                    - Secure and transparent transactions with full on-chain
                    support.
                  </p>
                  <p
                    className={`${roboto_slab.className} group-hover:scale-105 px-2 capitalize pb-10 text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      - Easy asset integration{" "}
                    </span>
                    - Effortlessly integrate assets for a seamless game
                    development experience
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="mx-auto w-[98%] h-[98%] hover:w-full hover:h-full min-h-[500px] group   duration-200 delay-75 ease-linear  xl:w-auto imagus3  relative">
                <div className="w-full  h-full imagus">
                  <p
                    className={`${cinzel.className} px-2 text-left group-hover:text-center group-hover:bg-[#f7f6a4] group-hover:text-[#111] duration-300 delay-75 ease-linear capitalize text-[#f7f6a4]  text-[44px]  lg:text-[44px] font-bold`}
                  >
                    Compatibility
                  </p>
                  <div className={` w-full h-[2px] bg-[#D4D297]`}></div>
                  <p
                    className={`${roboto_slab.className} group-hover:scale-105 px-2 capitalize text-[#D4D297] text-center pt-4 text-[20px] `}
                  >
                    Designed for{" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      all game types,{" "}
                    </span>
                    our platform supports{" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      2D, 3D, AAA titles, indie games,{" "}
                    </span>
                    and beyond, ensuring{" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      versatility{" "}
                    </span>
                    and{" "}
                    <span className=" pl-1 text-[#f7f6a4] text-[24px] font-bold">
                      flexibility{" "}
                    </span>
                    for any development project.
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
