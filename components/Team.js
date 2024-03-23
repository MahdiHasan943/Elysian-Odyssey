"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { TypingText } from "./reusable/CustomText";
import { motion } from "framer-motion";
import { planetVariants, slideIn, staggerContainer } from "@/utils/motion";
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

  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
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
        id="team"
      >
        <div className=" min-h-[1200px]   lg:min-h-[1100px] lg:max-h-[1100px]  relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/teambg.png"}
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
                title="Team"
                textStyles={` text-center text-[#f2d387] pt-5 pb-20 font-bold text-[40px] leading-[40px] uppercase `}
              />
            </motion.div>

            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 12000,
                speed: 3000,

                disableOnInteraction: false,
              }}
              spaceBetween={40}
              className="mySwiper  max-w-[1540px] my-8 "
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <Image
                  src={"/images/MileNikolikj.jpg"}
                  alt="team-member"
                  width={300}
                  height={300}
                  className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                />
                <div className="text-center">
                  <h3
                    className={`${roboto_slab.className} font-bold text-[#fff] text-[30px]`}
                  >
                    MILE NIKOLIC
                  </h3>
                  <h4
                    className={`${roboto_slab.className} font-bold text-[#f9d286] text-[24px]`}
                  >
                    FOUNDER & CEO{" "}
                  </h4>
                </div>
                <div className=" py-4">
                  <ul className="list-disc w-[350px] px-8  mx-auto sm:w-full border-[5px] border-[#f9d286] sm:px-12 text-[#fff] text-[20px] leading-[32px] py-4">
                    <li>Web 2 entrepreneur</li>
                    <li>In crypto since 2017</li>
                    <li>
                      Investor in 60+ gaming projects makes him understand the
                      market very well
                    </li>
                    <li>Successfully sold 2 NFT projects</li>
                    <li>Actively visiting various IRL crypto events</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/MilosTosic.jfif"}
                  alt="team-member"
                  width={300}
                  height={300}
                  className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                />
                <div className="text-center">
                  <h3
                    className={`${roboto_slab.className} font-bold text-[#fff] text-[30px]`}
                  >
                    MILOS TOSIC
                  </h3>
                  <h4
                    className={`${roboto_slab.className} font-bold text-[#f9d286] text-[24px]`}
                  >
                    CTO
                  </h4>
                </div>
                <div className="py-4">
                  <ul className="list-disc w-[350px] px-8  mx-auto sm:w-full border-[5px] border-[#f9d286] sm:px-12 text-[#fff] text-[20px] leading-[32px] py-4">
                    <li>
                      25 years of professional programming experience in video
                      games with focus on game engine architecture, tools and
                      pipelines
                    </li>
                    <li>
                      Former expert programmer in Ubisoft and Tencent and Senior
                      programmer in Blue Side and Guerrilla
                    </li>
                    <li>
                      Previous works: Assassin’s Creed Odyssey, League of
                      Legends Wild Rift, PUBG Mobile, Mortal Kombat One, DDay,
                      Killzone 3, Trials franchise (multiple titles), and more.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Image
                  src={"/images/MileNikolikj.jpg"}
                  alt="team-member"
                  width={300}
                  height={300}
                  className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                />
                <div className="text-center">
                  <h3
                    className={`${roboto_slab.className} font-bold text-[#fff] text-[30px]`}
                  >
                    ALFIO TRABUIO
                  </h3>
                  <h4
                    className={`${roboto_slab.className} font-bold text-[#f9d286] text-[24px]`}
                  >
                    TECHNICAL ART DIRECTION
                  </h4>
                </div>
                <div className=" py-4">
                  <ul className="list-disc w-[350px] px-8  mx-auto sm:w-full border-[5px] border-[#f9d286] sm:px-12 text-[#fff] text-[20px] leading-[32px] py-4">
                    <li>
                      A veteran game developer started in early 90s, focusing on
                      technical art solutions, plugin and pipeline development
                      providing teams with productivity solutions
                    </li>
                    <li>Technical lead in Ubisoft</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/MileNikolikj.jpg"}
                  alt="team-member"
                  width={300}
                  height={300}
                  className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                />
                <div className="text-center">
                  <h3
                    className={`${roboto_slab.className} font-bold text-[#fff] text-[30px]`}
                  >
                    MILE NIKOLIC
                  </h3>
                  <h4
                    className={`${roboto_slab.className} font-bold text-[#f9d286] text-[24px]`}
                  >
                    FOUNDER & CEO{" "}
                  </h4>
                </div>
                <div className="py-4">
                  <ul className="list-disc w-[350px] px-8  mx-auto sm:w-full border-[5px] border-[#f9d286] sm:px-12 text-[#fff] text-[20px] leading-[32px] py-4">
                    <li>Web 2 entrepreneur</li>
                    <li>In crypto since 2017</li>
                    <li>
                      Investor in 60+ gaming projects makes him understand the
                      market very well
                    </li>
                    <li>Successfully sold 2 NFT projects</li>
                    <li>Actively visiting various IRL crypto events</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/MileNikolikj.jpg"}
                  alt="team-member"
                  width={300}
                  height={300}
                  className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                />
                <div className="text-center">
                  <h3
                    className={`${roboto_slab.className} font-bold text-[#fff] text-[30px]`}
                  >
                    MILE NIKOLIC
                  </h3>
                  <h4
                    className={`${roboto_slab.className} font-bold text-[#f9d286] text-[24px]`}
                  >
                    FOUNDER & CEO{" "}
                  </h4>
                </div>
                <div className="py-4">
                  <ul className="list-disc w-[350px] px-8  mx-auto sm:w-full border-[5px] border-[#f9d286] sm:px-12 text-[#fff] text-[20px] leading-[32px] py-4">
                    <li>Web 2 entrepreneur</li>
                    <li>In crypto since 2017</li>
                    <li>
                      Investor in 60+ gaming projects makes him understand the
                      market very well
                    </li>
                    <li>Successfully sold 2 NFT projects</li>
                    <li>Actively visiting various IRL crypto events</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/MileNikolikj.jpg"}
                  alt="team-member"
                  width={300}
                  height={300}
                  className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                />
                <div className="text-center">
                  <h3
                    className={`${roboto_slab.className} font-bold text-[#fff] text-[30px]`}
                  >
                    MILE NIKOLIC
                  </h3>
                  <h4
                    className={`${roboto_slab.className} font-bold text-[#f9d286] text-[24px]`}
                  >
                    FOUNDER & CEO{" "}
                  </h4>
                </div>
                <div className="py-4">
                  <ul className="list-disc w-[350px] px-8  mx-auto sm:w-full border-[5px] border-[#f9d286] sm:px-12 text-[#fff] text-[20px] leading-[32px] py-4">
                    <li>Web 2 entrepreneur</li>
                    <li>In crypto since 2017</li>
                    <li>
                      Investor in 60+ gaming projects makes him understand the
                      market very well
                    </li>
                    <li>Successfully sold 2 NFT projects</li>
                    <li>Actively visiting various IRL crypto events</li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
