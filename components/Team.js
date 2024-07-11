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
import { Cinzel, Roboto_Slab, Work_Sans } from "next/font/google";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { SwipperNewBtn } from "./SwipperNewBtn";
import Link from "next/link";
const cinzel = Cinzel({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
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
    1281: {
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
        className={`${roboto_slab.className}`}
        id="team"
      >
        <div className=" min-h-[1200px] mt-[-150px] lg:min-h-[1350px] lg:max-h-[1350px] 2xl:min-h-[1250px]  2xl:max-h-[1250px] relative overflow-hidden ">
          <div className=" absolute top-0 flex justify-center items-center w-full h-[400px] left-0 z-[50]">
            <h2
              className={`${cinzel.className} text-center sectionTitle flex justify-center text-[85px] md:text-[180px] `}
            >
              T{" "}
              <a href="" className="   block">
                EAM
              </a>{" "}
            </h2>
          </div>
          <div className="absolute top-0 bg-[#191919] left-0 h-full w-full">
            {/* <Image
              src={"/panel/team.jpg"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className="bg-center hidden sm:block"
            />
            <Image
              src={"/panel/team.jpg"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              width={986}
              height={665}
              className=" w-full h-full block sm:hidden"
            /> */}
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
              className="mySwiper max-w-[1800px!important] pt-5 mt-[200px] 2xl:mt-[150px] overflow-hidden mx-auto smallest:px-[12px!important] md:px-[40px!important]  my-8 "
              breakpoints={breakpoints}
              loop={true}
            >
              <div className="absolute z-50 h-[100px]   top-1/2 left-0 w-full">
                <SwipperNewBtn />
              </div>
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/mile-nikolikj-2664681a1/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl  z-20 border-[2px] min-h-[700px]">
                      <Image
                        src={"/images/MileNikolikj.jpg"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${cinzel.className} uppercase text-center font-bold text-[#fff] text-[30px]`}
                      >
                        Mile Nikolikj
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
                      >
                        Founder and CEO
                      </p>
                      <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                      <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                        <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                          Web 2 entrepreneur
                        </p>
                        <p
                          className={`${roboto_slab.className}text-[18px] py-5  leading-[25px]  text-[#fff] `}
                        >
                          In crypto since 2017
                        </p>

                        <p className="text-[18px]  leading-[25px]  text-[#fff]">
                          Investor in{" "}
                          <span className="text-[#ff7f98] font-bold  text-[20px] ">
                            {" "}
                            60+
                          </span>{" "}
                          gaming <br />
                          Projects makes him <br />
                          understand the market <br /> very well
                        </p>
                        <p className="text-[18px] py-5  leading-[25px]  text-[#fff] ">
                          Successfully launched{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            2 NFT{" "}
                          </span>
                          <br />
                          projects
                        </p>
                        <p className="text-[18px] py-5  leading-[25px]  text-[#fff] ">
                          Actively visiting various IRL events
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/milostosic77/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px] z-20 border-[2px]">
                      <Image
                        src={"/images/MilosTosic.jfif"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                      >
                        MILOS TOSIC
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
                      >
                        CTO
                      </p>
                      <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                      <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                        <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                          25 years of professional programming experience in
                          video games with focus on game engine architecture,
                          tools and pipelines
                        </p>

                        <p className="text-[18px] py-5 leading-[25px]  text-[#fff]">
                          Former expert programmer in{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            {" "}
                            Ubisoft{" "}
                          </span>{" "}
                          and Tencent and Senior programmer in Blue Side and
                          Guerrilla
                        </p>
                        <p className="text-[18px] py-5  leading-[25px]  text-[#fff] ">
                          Previous works:{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            {" "}
                            Assassin’s Creed{" "}
                          </span>{" "}
                          Odyssey,{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            {" "}
                            League of Legends{" "}
                          </span>{" "}
                          Wild Rift,
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            {" "}
                            PUBG{" "}
                          </span>
                          Mobile, Mortal Kombat One, DDay, Killzone 3, Trials
                          franchise (multiple titles), and more.
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/alfio-trabuio-5915511/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px]  z-20 border-[2px]">
                      <Image
                        src={"/images/AlfioTrabuio.jfif"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                      >
                        ALFIO TRABUIO
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
                      >
                        TECHNICAL ART DIRECTION
                      </p>
                      <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                      <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                        <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                          A veteran game developer started in early 90s,
                          focusing on technical art solutions, plugin and
                          pipeline development providing teams with productivity
                          solutions
                        </p>

                        <p className="text-[18px] py-5 leading-[25px]  text-[#fff]">
                          Technical lead in{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            {" "}
                            Ubisoft
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/vladimir-filipovi%C4%87-744b516/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px]  z-20 border-[2px]">
                      <Image
                        src={"/images/TomislavTesla.jfif"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                      >
                        TOMISLAV TESLA
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
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
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            {" "}
                            Aquaman,
                          </span>{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            Disney’s
                          </span>{" "}
                          Noelle, the immersive Underwater, the captivating
                          Dungeons & Dragons: Honor Among Thieves, and the
                          highly anticipated Mufasa:{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            Lion King{" "}
                          </span>
                          among others.
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/gamedesignerdave/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px] z-20 border-[2px]">
                      <Image
                        src={"/images/VladimirFilipovic.jfif"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                      >
                        VLADIMIR FILIPOVIC
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
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
                          Previously worked in{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            Meta
                          </span>{" "}
                          and{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            Google
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>
              {/* <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/urospavlovic/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px]  z-20 border-[2px]">
                      <Image
                        src={"/images/DavidFried.jfif"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${roboto_slab.className} text-center font-bold text-[#fff] text-[30px]`}
                      >
                        DAVID FRIED
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
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
                          Some of his work includes{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            Warcraft III
                          </span>
                          ,{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            World of Warcraft,
                          </span>{" "}
                          Oddworld Stranger’s Wrath, Wasteland 3 and many more
                        </p>
                        <p className="text-[18px] py-5 leading-[25px]  text-[#fff]">
                          Previously worked for{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            Blizzard Entertainmen
                          </span>
                          t and{" "}
                          <span className="text-[#ff7f98] font-bold  text-[19px] ">
                            Ubisoft
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide> */}

              {/* 7 */}
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/urospavlovic/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px]  z-20 border-[2px]">
                      <Image
                        src={"/uros.png"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${cinzel.className} uppercase text-center font-bold text-[#fff] text-[30px]`}
                      >
                        Uros Pavlovic
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
                      >
                        Level design
                      </p>
                      <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                      <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                        <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                          Uros has been working in the field of level design and
                          level art for more than 20 years. <br /> <br />
                          He has 14 titles shipped on variety of platforms, from
                          PC via console to mobile. He holds an active lecturing
                          role on 3D modelling and game design at University of
                          Belgrade.
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>

              {/* 8 */}
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/nenad-krstic-6b23b259/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px]  z-20 border-[2px]">
                      <Image
                        src={"/nenand.png"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${cinzel.className} uppercase text-center font-bold text-[#fff] text-[30px]`}
                      >
                        Nenad Krstic
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
                      >
                        Concept Art & Illustration
                      </p>
                      <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                      <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                        <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                          Nenad is a concept designer with a background in
                          architecture who has over 10 years of game development
                          experience in in a wide range of genres ranging from
                          real-time strategies to first person shooters. <br />{" "}
                          <br />
                          He held a variety of in-house studio roles: game
                          designer, modelling supervisor, concept artist, UI/UX
                          designer and research & development lead.
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>

              {/* 9 */}

              {/* 10 */}
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/andrew-hakim-lie-b52b8557/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px]  z-20 border-[2px]">
                      <Image
                        src={"/Andrew.png"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${cinzel.className} uppercase text-center font-bold text-[#fff] text-[30px]`}
                      >
                        Andrew Hakim Lie
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
                      >
                        3D modelling & art
                      </p>
                      <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                      <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                        <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                          Award winning computer graphics artist with over 18
                          years of experience specialising in both photoreal and
                          stylized imagery. <br />
                          <br />
                          Previously worked on PUBG Mobile, WeShoot, Shadow
                          Tracker (Vive VR)
                          <br /> <br />
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>
              {/* 11 */}

              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href="https://www.linkedin.com/in/nikolija-stojmenovic-a931a8b6/">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px]  z-20 border-[2px]">
                      <Image
                        src={"/Nikolija.png"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${cinzel.className} uppercase text-center font-bold text-[#fff] text-[30px]`}
                      >
                        Nikolija Stojmenovic
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
                      >
                        HR
                      </p>
                      <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                      <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                        <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                          Successfully recruited 5000+ highly competent
                          professionals Large network of developers
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>
              {/* 12 */}

              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px]  z-20 border-[2px]">
                    <Image
                      src={"/minoru.png"}
                      alt="team-member"
                      width={300}
                      height={300}
                      className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                    />
                    <p
                      className={`${roboto_slab.className} uppercase text-center font-bold text-[#fff] text-[30px]`}
                    >
                      Minoru Pathirana
                    </p>
                    <p
                      className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
                    >
                      Character designer
                    </p>
                    <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                    <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                      <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                        -Certified Adobe artist -50+ 1/1 NFT designs sold
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>

              {/* 12 */}
              <SwiperSlide className=" py-[130px]">
                <motion.div
                  variants={fadeIn("right", "bounce", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <a href=" https://www.linkedin.com/in/zchuchanov/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <div className="border-[#D4D297] group bg-[#161616] shadow-2xl min-h-[700px]  z-20 border-[2px]">
                      <Image
                        src={"/zafir.png"}
                        alt="team-member"
                        width={300}
                        height={300}
                        className=" border-[3px] group-hover:scale-105 duration-300 delay-75 ease-linear group-hover:mt-[-120px]  mt-[-130px] mx-auto my-4 w-[200px] h-[200px] border-[#D4D297] rounded-full"
                      />
                      <p
                        className={`${cinzel.className} uppercase text-center font-bold text-[#fff] text-[30px]`}
                      >
                        Zafir Chuchanov
                      </p>
                      <p
                        className={`${roboto_slab.className} py-4 group-hover:bg-[#D4D297] group-hover:text-[#111] border border-[#D4D297] border-l-0 border-r-0 uppercase font-normal text-[#fff] text-center text-[22px]`}
                      >
                        Business development
                      </p>
                      <div className="h-[2px] w-full bg-[#36371c] my-4"></div>

                      <div className=" pl-[10px]  2xl:pl-[60px] pr-[10px]">
                        <p className="text-[18px]  leading-[25px]  text-[#fff] ">
                          -iGaming Business development expert -13 years of
                          experience in the field -Deep understanding of the
                          market and customer behaviour
                        </p>
                      </div>
                    </div>
                  </a>
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
