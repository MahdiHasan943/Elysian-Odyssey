"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { TypingText } from "./reusable/CustomText";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  slideIn,
  staggerContainer,
} from "@/utils/motion";
import { Roboto_Slab, Work_Sans } from "next/font/google";
import Description from "./reusable/Description";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import TimelineRoadmap from "./TimelineRoadmap";

const Team = () => {
  const swiperRef = useRef(null);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  };
  return (
    <>
      <div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=""
        id="road"
      >
        <div className="min-h-[5400px] bg-[black]  mb-[-5px] smallest:min-h-[5000px] moreSmall:min-h-[4800px]   lg:min-h-[3500px] lg:max-h-[3400px]  relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/roadmap.png"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          <div className="w-full px-4 pt-[200px]  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
            {/* <TimelineRoadmap /> */}
            <div className="relative h-[800px] sm:h-[500px]  lg:h-[450px] mx-auto w-full lg:w-[815px]">
              <div className="absolute top-0 left-1/2 transform z-20 border-[#403307] border-[4px] -translate-x-1/2  mt-[-120px] w-[300px] h-[130px]">
                <p className="text-[#b3b1b1] font-bold text-center text-[80px]">
                  2022
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 transform z-20 border-[#403307] border-[4px] -translate-x-1/2  mb-[-120px] w-[300px] h-[130px]">
                <p className="text-[#b3b1b1] font-bold text-center text-[80px]">
                  2022
                </p>
              </div>
              <Image
                src={"/Screenshot_5.png"}
                alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                layout="fill"
                objectFit="fill"
                className=" "
              />
              <div className="absolute px-4 py-10  top-0 h-full w-full left-0">
                <p className="text-[#fff] text-[26px] font-semibold text-center">
                  Team Expansion and Fundraising
                </p>
                <div className="h-[4px] w-full bg-[#717070] my-2"></div>

                <p className="py-6 font-semibold text-[#fff] text-[18px] text-center">
                  During this phase, our team focuses on expanding the team with
                  highly competent individuals that are leading professionals in
                  the industry. Also the team is starting to raise funds to
                  secure it’s development:
                </p>
                <p className="text-[#fff] text-[16px] text-center">
                  {" "}
                  - Fundraising: Raising funds in this stage will make sure the
                  team will have enough resources to develop the best possible
                  product and ensure it has smooth launch process on the market.
                </p>
                <p className="py-6 text-[#fff] text-[16px] text-center">
                  - Team Expansion: Scaling our development team with skilled
                  professionals in game design, development, and blockchain
                  integration.
                </p>
                <p className="text-[#fff] text-[16px] text-center">
                  - Alpha trailer: we will release the first trailer of the
                  Elysian Odyssey game
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
