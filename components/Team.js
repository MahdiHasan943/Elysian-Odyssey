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
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { SwipperNewBtn } from "./SwipperNewBtn";

const Team = () => {
  const swiperRef = useRef(null);
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
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
        <div className=" min-h-[1200px]   lg:min-h-[1250px] lg:max-h-[1250px] 2xl:min-h-[1150px]  2xl:max-h-[1150px] relative overflow-hidden ">
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
              modules={[Navigation, Pagination]}
              slidesPerView="auto"
              spaceBetween={50}
              className="mySwiper max-w-[1800px!important] overflow-hidden mx-auto smallest:px-[12px!important] md:px-[40px!important]  my-8 "
              breakpoints={breakpoints}
              loop={true}
            >
              <div className="absolute z-50 h-full   top-1/2 left-0 w-full">
                <SwipperNewBtn />
              </div>
              <SwiperSlide className="">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <Image
                    src={"/images/MileNikolikj.jpg"}
                    alt="team-member"
                    width={300}
                    height={300}
                    className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                  />
                  <div className="text-center mb-10">
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
                </motion.div>
              </SwiperSlide>

              <SwiperSlide className="">
                <motion.div
                  variants={fadeIn("down", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
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
                        Former expert programmer in Ubisoft and Tencent and
                        Senior programmer in Blue Side and Guerrilla
                      </li>
                      <li>
                        Previous works: Assassin’s Creed Odyssey, League of
                        Legends Wild Rift, PUBG Mobile, Mortal Kombat One, DDay,
                        Killzone 3, Trials franchise (multiple titles), and
                        more.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide className="">
                <motion.div
                  variants={fadeIn("left", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <Image
                    src={"/images/AlfioTrabuio.jfif"}
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
                        A veteran game developer started in early 90s, focusing
                        on technical art solutions, plugin and pipeline
                        development providing teams with productivity solutions
                      </li>
                      <li>Technical lead in Ubisoft</li>
                    </ul>
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide className="">
                <motion.div
                  variants={fadeIn("down", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <Image
                    src={"/images/TomislavTesla.jfif"}
                    alt="team-member"
                    width={300}
                    height={300}
                    className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                  />
                  <div className="text-center  mb-10">
                    <h3
                      className={`${roboto_slab.className} font-bold text-[#fff] text-[30px]`}
                    >
                      TOMISLAV TESLA
                    </h3>
                    <h4
                      className={`${roboto_slab.className} font-bold text-[#f9d286] text-[24px]`}
                    >
                      VFX / CREATURE ANIMATION
                    </h4>
                  </div>
                  <div className="py-4">
                    <ul className="list-disc w-[350px] px-8  mx-auto sm:w-full border-[5px] border-[#f9d286] sm:px-12 text-[#fff] text-[20px] leading-[32px] py-4">
                      <li>
                        A seasoned senior character and creature 3D animator
                        with a rich background in diverse animation styles,
                        covering games, AR/VR/MR, Feature, and VFX films.
                      </li>
                      <li>
                        Previously worked on famous blockbuster movies like:
                        Aquaman, Disney’s Noelle, the immersive Underwater, the
                        captivating Dungeons & Dragons: Honor Among Thieves, and
                        the highly anticipated Mufasa: Lion King among others.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide className="">
                <motion.div
                  variants={fadeIn("down", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  className=""
                >
                  <Image
                    src={"/images/VladimirFilipovic.jfif"}
                    alt="team-member"
                    width={300}
                    height={300}
                    className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                  />
                  <div className="text-center  mb-10">
                    <h3
                      className={`${roboto_slab.className} font-bold text-[#fff] text-[30px]`}
                    >
                      VLADIMIR FILIPOVIC
                    </h3>
                    <h4
                      className={`${roboto_slab.className} font-bold text-[#f9d286] text-[24px]`}
                    >
                      PROGRAMMING
                    </h4>
                  </div>
                  <div className="py-4">
                    <ul className="list-disc w-[350px] px-8  mx-auto sm:w-full border-[5px] border-[#f9d286] sm:px-12 text-[#fff] text-[20px] leading-[32px] py-4">
                      <li>
                        Vladimir is software engineer with 20 years of
                        experience, mainly in largescale backend systems, but
                        also in video games, data science and finance.
                      </li>
                      <li>Previously worked in Meta and Google</li>
                    </ul>
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide className="">
                <motion.div
                  variants={fadeIn("left", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  className=""
                >
                  <Image
                    src={"/images/DavidFried.jfif"}
                    alt="team-member"
                    width={300}
                    height={300}
                    className=" border-[5px]  mx-auto my-4 w-[250px] h-[250px] border-[#f9d286] rounded-full"
                  />
                  <div className="text-center  mb-10">
                    <h3
                      className={`${roboto_slab.className} font-bold text-[#fff] text-[30px]`}
                    >
                      DAVID FRIED
                    </h3>
                    <h4
                      className={`${roboto_slab.className} font-bold text-[#f9d286] text-[24px]`}
                    >
                      GAME DESIGN
                    </h4>
                  </div>
                  <div className="py-4">
                    <ul className="list-disc w-[350px] px-8  mx-auto sm:w-full border-[5px] border-[#f9d286] sm:px-12 text-[#fff] text-[20px] leading-[32px] py-4">
                      <li>
                        David has over 25 years of game and narrative design
                        experience.r
                      </li>
                      <li>
                        Some of his work includes Warcraft III, World of
                        Warcraft, Oddworld Stranger’s Wrath, Wasteland 3 and
                        many more
                      </li>
                      <li>
                        Previously worked for Blizzard Entertainment and Ubisoft
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </SwiperSlide>

              {/* <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div> */}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
