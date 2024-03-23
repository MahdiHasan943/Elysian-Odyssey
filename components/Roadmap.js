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
        <div className=" min-h-[1200px]   lg:min-h-[1100px] lg:max-h-[1100px]  relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/heromain.png"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          <div className="w-full px-4  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className=""
            >
              <TypingText
                title="roadmap"
                textStyles={` text-center text-[#f2d387] pt-5 pb-20 font-bold text-[40px] leading-[40px] uppercase `}
              />
            </motion.div>

            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              slidesPerView="auto"
              // loop={true}
              // autoplay={{
              //   delay: 12000,
              //   speed: 3000,

              //   disableOnInteraction: false,
              // }}
              className="mySwiper  max-w-[1540px] my-8 "
              breakpoints={breakpoints}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
              {" "}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
              <SwiperSlide>
                <Description text="The development journey of Elysian Odyssey is divided into strategic phases aimed at achieving key milestones and delivering a captivating gaming experience for our community. Here is an overview of our roadmap:" />
                <h2
                  className={`${roboto_slab.className} max-w-[1220px] mx-auto text-[#f2d387] pt-5 pb-4 px-6 text-[26px] mt-6 leading-[30px] uppercase `}
                >
                  Phase 1: NFT Community building and NFT sale (Q1 2023 - Q2
                  2023)
                </h2>
                <Description
                  text="During this phase our team has worked on creating the storyline, designing the characters, building community and selling the characters
"
                />
                <div className="sm:flex px-6 gap-4 items-center  max-w-[1220px] mx-auto">
                  <p className="text-[16px] uppercase min-w-[190px]  xl:text-[22px]  text-[#fff]  font-bold">
                    Lore creation:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin  text-[#fff] ">
                    During this phase our team has worked on creating the
                    storyline, designing the characters, building community and
                    selling the characters{" "}
                  </p>
                </div>

                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1220px] mx-auto">
                  <p className="text-[16px]  uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Character design:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Each character was carefully designed to contain the
                    characteristics described in the Lore.
                  </p>
                </div>

                <div className="sm:flex px-6 gap-4 items-center  max-w-[1220px] mx-auto">
                  <p className="text-[16px] uppercase  xl:text-[22px]  text-[#fff]  font-bold">
                    NFT mint:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    5556 Elysians were born to live on the blockchain
                  </p>
                </div>
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1220px] mx-auto">
                  <p className="text-[16px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Community building:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    a community of 1000+ holders was created.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>sdsdsd</SwiperSlide>
              <SwiperSlide>sdfsdf</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
