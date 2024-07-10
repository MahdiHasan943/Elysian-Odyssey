"use client";
import { motion } from "framer-motion";
import {
  planetVariants,
  slideIn,
  staggerContainer,
  textVariant2,
  textVariant3,
} from "@/utils/motion";
import About from "@/components/About";
import Charecters from "@/components/Charecters";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import Hero from "@/components/Hero";
import { Cinzel, Roboto_Slab } from "next/font/google";
import Imagus from "@/components/Imagus";
import Genesis from "@/components/Genesis";
import NewRoadmap from "@/components/NewRoadmap";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const cinzel = Cinzel({
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full"
    >
      <Hero />
      {/* <MultiLayerParallax /> */}
      <About />
      <Imagus></Imagus>
      <Genesis />
      <div
        id="NFT"
        className="w-full group overflow-hidden h-auto bg-[#191919] text-center border border-[#566000] py-8 px-4"
      >
        <button
          className={`${cinzel.className} group-hover:mt-[-130px!important] bg-[#D5D399] py-1  text-[44px] px-10  rounded-sm`}
        >
          NFT
        </button>
        <motion.div
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="hidden group-hover:block duration-300 delay-75 ease-linear relative py-2 border min-h-[200px] max-w-[1000px] mx-auto border-[#D4D297] border-t-1 border-l-0 border-r-0 border-b-0 sm:px-2"
        >
          <div className="absolute hidden lg:block top-[-7px] left-[-35px] rotate-[20deg] h-full w-[1px] bg-[#D4D297]"></div>
          <div className="absolute hidden lg:block top-[-7px] right-[-35px] rotate-[-20deg] h-full w-[1px] bg-[#D4D297]"></div>
          <p
            className={`${roboto_slab.className}  px-2 capitalize text-[#92916f]  text-center pt-4 group-hover:text-[21px] text-[20px] `}
          >
            {" "}
            Currently,{" "}
            <span className=" pl-1 text-[#D4D297]  group-hover:text-[25px] text-[24px] font-bold">
              5556 NFTs{" "}
            </span>
            have been{" "}
            <span className=" pl-1 text-[#D4D297]  group-hover:text-[25px] text-[24px] font-bold">
              minted{" "}
            </span>
            and are{" "}
            <span className=" pl-1 text-[#D4D297]  group-hover:text-[25px] text-[24px] font-bold">
              live{" "}
            </span>
            on the{" "}
            <span className=" pl-1 text-[#ae5967]  group-hover:text-[25px] text-[24px] font-bold">
              BNB Chain.{" "}
            </span>
            <br></br>
            Each{" "}
            <span className=" pl-1 text-[#D4D297]  group-hover:text-[25px] text-[24px] font-bold">
              NFT{" "}
            </span>
            features{" "}
            <span className=" pl-1 text-[#D4D297]  group-hover:text-[25px] text-[24px] font-bold">
              unique traits{" "}
            </span>{" "}
            and represents a
            <span className=" pl-1 text-[#D4D297]  group-hover:text-[25px] text-[24px] font-bold">
              playable character{" "}
            </span>{" "}
            in <br />
            <span className=" pl-1 text-[#ae5967]  group-hover:text-[25px] text-[24px] font-bold">
              The Genesis game.{" "}
            </span>
          </p>
        </motion.div>
      </div>
      <Charecters />
      <div
        id="Buy-Sell-Trade"
        className="w-full bg-[#191919]  z-[90000000] relative text-center border border-[#566000] py-8 px-4"
      >
        <img
          src="/Assets/buybtn1.png"
          className="mt-[-50px] hover:scale-110 duration-300 delay-75 ease-linear pl-2 sm:pl-0 sm:mt-[-90px] mx-auto"
          alt=""
        />
        <p
          className={`${roboto_slab.className} px-2 mt-[-10px] capitalize text-[#fff] text-center  text-[20px] `}
        >
          You can buy, sell, and trade NFTs securely. Discover rare items and
          expand your collection.
        </p>
        <img
          src="/Assets/buybtn2.png"
          className="w-[80px]    duration-200 delay-75 ease-linear hover:rotate-[10deg] hover:scale-105  rounded-[999px]   lg:w-auto mx-auto mt-6"
          alt=""
        />
      </div>
      {/* <Tokenomics /> */}
      <Team />
      {/* <Roadmap /> */}
      <NewRoadmap />
    </motion.main>
  );
}
