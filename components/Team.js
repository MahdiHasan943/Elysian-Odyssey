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
    1280: {
      slidesPerView: 4,
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
        <div className=" min-h-[1100px]   lg:min-h-[1250px] lg:max-h-[1250px] 2xl:min-h-[1350px]  2xl:max-h-[1250px] relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/teambg.png"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className="bg-center hidden sm:block"
            />
            <Image
              src={"/teambg.png"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              width={986}
              height={665}
              className=" w-full h-full block sm:hidden"
            />
          </div>

          <div className="w-full  px-4  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
            {/* <motion.div
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
            </motion.div> */}

            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView="auto"
              spaceBetween={50}
              className="mySwiper max-w-[1800px!important] mt-[200px] 2xl:mt-[400px] overflow-hidden mx-auto smallest:px-[12px!important] md:px-[40px!important]  my-8 "
              breakpoints={breakpoints}
              loop={true}
            >
              <div className="absolute z-50 h-full   top-1/2 left-0 w-full">
                <SwipperNewBtn />
              </div>
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <div className="border-[#36371c]  z-20 border-[2px] min-h-[700px]">
                    <Image
                      src={"/images/MileNikolikj.jpg"}
                      alt="team-member"
                      width={300}
                      height={300}
                      className=" border-[3px] mt-[-130px] mx-auto my-4 w-[220px] h-[220px] border-[#36371c] rounded-full"
                    />
                    <p
                      className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                    >
                      Mile Nikolikj
                    </p>
                    <p
                      className={`${roboto_slab.className} font-bold text-[#fff] text-center text-[24px]`}
                    >
                      Founder and CEO
                    </p>
                    <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                    <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                      <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                        Web 2 entrepreneur
                      </p>
                      <p className="text-[18px] py-5  leading-[25px]  text-[#fff] ">
                        In crypto since 2017
                      </p>

                      <p className="text-[18px]  leading-[25px]  text-[#fff]">
                        Investor in 60+ gaming <br />
                        Projects makes him <br />
                        understand the market <br /> very well
                      </p>
                      <p className="text-[18px] py-5  leading-[25px]  text-[#fff] ">
                        Successfully sold 2 NFT <br />
                        projects
                      </p>
                      <p className="text-[18px] py-5  leading-[25px]  text-[#fff] ">
                        Avtively visiting various IRL <br />
                        crypto events
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <div className="border-[#36371c] min-h-[700px] z-20 border-[2px]">
                    <Image
                      src={"/images/MilosTosic.jfif"}
                      alt="team-member"
                      width={300}
                      height={300}
                      className=" border-[3px] mt-[-130px] mx-auto my-4 w-[220px] h-[220px] border-[#36371c] rounded-full"
                    />
                    <p
                      className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                    >
                      MILOS TOSIC
                    </p>
                    <p
                      className={`${roboto_slab.className} font-bold text-[#fff] text-center text-[24px]`}
                    >
                      CTO
                    </p>
                    <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                    <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                      <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                        25 years of professional programming experience in video
                        games with focus on game engine architecture, tools and
                        pipelines
                      </p>

                      <p className="text-[18px] py-5 leading-[25px]  text-[#fff]">
                        Former expert programmer in Ubisoft and Tencent and
                        Senior programmer in Blue Side and Guerrilla
                      </p>
                      <p className="text-[18px] py-5  leading-[25px]  text-[#fff] ">
                        Previous works: Assassin’s Creed Odyssey, League of
                        Legends Wild Rift, PUBG Mobile, Mortal Kombat One, DDay,
                        Killzone 3, Trials franchise (multiple titles), and
                        more.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <div className="border-[#36371c] min-h-[700px]  z-20 border-[2px]">
                    <Image
                      src={"/images/AlfioTrabuio.jfif"}
                      alt="team-member"
                      width={300}
                      height={300}
                      className=" border-[3px] mt-[-130px] mx-auto my-4 w-[220px] h-[220px] border-[#36371c] rounded-full"
                    />
                    <p
                      className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                    >
                      ALFIO TRABUIO
                    </p>
                    <p
                      className={`${roboto_slab.className} font-bold text-[#fff] text-center text-[24px]`}
                    >
                      TECHNICAL ART DIRECTION
                    </p>
                    <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                    <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                      <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                        A veteran game developer started in early 90s, focusing
                        on technical art solutions, plugin and pipeline
                        development providing teams with productivity solutions
                      </p>

                      <p className="text-[18px] py-5 leading-[25px]  text-[#fff]">
                        Technical lead in Ubisoft
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <div className="border-[#36371c] min-h-[700px]  z-20 border-[2px]">
                    <Image
                      src={"/images/TomislavTesla.jfif"}
                      alt="team-member"
                      width={300}
                      height={300}
                      className=" border-[3px] mt-[-130px] mx-auto my-4 w-[220px] h-[220px] border-[#36371c] rounded-full"
                    />
                    <p
                      className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                    >
                      TOMISLAV TESLA
                    </p>
                    <p
                      className={`${roboto_slab.className} font-bold text-[#fff] text-center text-[24px]`}
                    >
                      VFX / CREATURE ANIMATION
                    </p>
                    <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                    <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                      <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                        A seasoned senior character and creature 3D animator
                        with a rich background in diverse animation styles,
                        covering games, AR/VR/MR, Feature, and VFX films.
                      </p>

                      <p className="text-[18px] py-5 leading-[25px]  text-[#fff]">
                        Previously worked on famous blockbuster movies like:
                        Aquaman, Disney’s Noelle, the immersive Underwater, the
                        captivating Dungeons & Dragons: Honor Among Thieves, and
                        the highly anticipated Mufasa: Lion King among others.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <div className="border-[#36371c] min-h-[700px] z-20 border-[2px]">
                    <Image
                      src={"/images/VladimirFilipovic.jfif"}
                      alt="team-member"
                      width={300}
                      height={300}
                      className=" border-[3px] mt-[-130px] mx-auto my-4 w-[220px] h-[220px] border-[#36371c] rounded-full"
                    />
                    <p
                      className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                    >
                      VLADIMIR FILIPOVIC
                    </p>
                    <p
                      className={`${roboto_slab.className} font-bold text-[#fff] text-center text-[24px]`}
                    >
                      PROGRAMMING
                    </p>
                    <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                    <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                      <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                        Vladimir is software engineer with 20 years of
                        experience, mainly in largescale backend systems, but
                        also in video games, data science and finance.
                      </p>

                      <p className="text-[18px] py-5 leading-[25px]  text-[#fff]">
                        Previously worked in Meta and Google
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <div className="border-[#36371c] min-h-[700px]  z-20 border-[2px]">
                    <Image
                      src={"/images/DavidFried.jfif"}
                      alt="team-member"
                      width={300}
                      height={300}
                      className=" border-[3px] mt-[-130px] mx-auto my-4 w-[220px] h-[220px] border-[#36371c] rounded-full"
                    />
                    <p
                      className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                    >
                      DAVID FRIED
                    </p>
                    <p
                      className={`${roboto_slab.className} font-bold text-[#fff] text-center text-[24px]`}
                    >
                      GAME DESIGN
                    </p>
                    <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                    <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                      <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                        David has over 25 years of game and narrative design
                        experience.r
                      </p>

                      <p className="text-[18px] py-5 leading-[25px]  text-[#fff]">
                        Some of his work includes Warcraft III, World of
                        Warcraft, Oddworld Stranger’s Wrath, Wasteland 3 and
                        many more
                      </p>
                      <p className="text-[18px] py-5 leading-[25px]  text-[#fff]">
                        Previously worked for Blizzard Entertainment and Ubisoft
                      </p>
                    </div>
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
