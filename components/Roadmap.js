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
        <div className="min-h-[5100px] mb-[-5px] smallest:min-h-[4700px]   lg:min-h-[3500px] lg:max-h-[3400px]  relative overflow-hidden ">
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
                textStyles={` text-center text-[#f2d387]  pt-12 sm:p-5 pb-20 font-bold text-[40px] leading-[40px] uppercase `}
              />
              <Description text="The development journey of Elysian Odyssey is divided into strategic phases aimed at achieving key milestones and delivering a captivating gaming experience for our community. Here is an overview of our roadmap:" />
            </motion.div>

            <TimelineRoadmap />

            {/* <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 12000,
                speed: 3000,

                disableOnInteraction: false,
              }}
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
                <Description
                  className={"max-w-[1320px]"}
                  text="The development journey of Elysian Odyssey is divided into strategic phases aimed at achieving key milestones and delivering a captivating gaming experience for our community. Here is an overview of our roadmap:"
                />
                <h2
                  className={`${roboto_slab.className} max-w-[1320px]   mx-auto text-[#f2d387] pt-5 pb-4 px-6 text-[26px] mt-6 leading-[30px] uppercase `}
                >
                  Phase 1: NFT Community building and NFT sale (Q1 2023 - Q2
                  2023)
                </h2>
                <Description
                  className={"max-w-[1320px]"}
                  text="During this phase our team has worked on creating the storyline, designing the characters, building community and selling the characters
"
                />
                <div className="sm:flex px-6 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] uppercase min-w-[132px] xl:min-w-[190px]  xl:text-[22px]  text-[#fff]  font-bold">
                    Lore creation:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin  text-[#fff] ">
                    During this phase our team has worked on creating the
                    storyline, designing the characters, building community and
                    selling the characters{" "}
                  </p>
                </div>

                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px]  uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Character design:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Each character was carefully designed to contain the
                    characteristics described in the Lore.
                  </p>
                </div>

                <div className="sm:flex px-6 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] uppercase  xl:text-[22px]  text-[#fff]  font-bold">
                    NFT mint:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    5556 Elysians were born to live on the blockchain
                  </p>
                </div>
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Community building:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    a community of 1000+ holders was created.
                  </p>
                </div>

                <h2
                  className={`${roboto_slab.className} max-w-[1320px]   mx-auto text-[#f2d387] pt-20 pb-4 px-6 text-[26px] mt-6 leading-[30px] uppercase `}
                >
                  Phase 2: Conceptualization and Development (Q3 2023 - Q4 2023)
                </h2>
                <Description
                  className={"max-w-[1320px]"}
                  text="During this phase, our team focuses on conceptualising the game mechanics, storyline, and world-building elements of Elysian Odyssey. Key activities include:"
                />
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Conceptualization:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Refining the game concept, defining core gameplay mechanics,
                    and establishing the narrative framework.{" "}
                  </p>
                </div>
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] min-w-[237px] xl:min-w-[320px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Prototype Development:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Building early-stage prototypes to test fundamental game
                    mechanics and gather user feedback.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2
                  className={`${roboto_slab.className}  max-w-[1320px]    mx-auto text-[#f2d387] pt-5 pb-4 px-6 text-[26px] mt-6 leading-[30px] uppercase `}
                >
                  Phase 3: Team Expansion and fundraising (Q1 2024 - Q2 2024)
                </h2>
                <Description
                  className={"max-w-[1320px]   "}
                  text="During this phase, our team focuses on expanding the team with highly competent individuals that are leading professionals in the industry.
                  Also the team is starting to raise funds to secure it’s development:
                  
"
                />
                <div className="sm:flex px-6 gap-4 items-center  max-w-[1320px]    mx-auto">
                  <p className="text-[16px] uppercase   xl:text-[22px]  text-[#fff]  font-bold">
                    Fundraising:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin  text-[#fff] ">
                    Raising funds in this stage will make sure the team will
                    have enough resources to develop the best possible product
                    and ensure it has smooth launch process on the market.
                  </p>
                </div>

                <div className="sm:flex px-6 py-3 gap-4 items-center max-w-[1320px]    mx-auto">
                  <p className="text-[16px] xl:min-w-[220px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Team Expansion:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Scaling our development team with skilled professionals in
                    game design, development, and blockchain integration.
                  </p>
                </div>

                <div className="sm:flex px-6 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] uppercase  xl:text-[22px]  text-[#fff]  font-bold">
                    Alpha trailer:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    we will release the first trailer of the Elysian Odyssey
                    game
                  </p>
                </div>

                <h2
                  className={`${roboto_slab.className} max-w-[1320px]   mx-auto text-[#f2d387] pt-20 pb-4 px-6 text-[26px] mt-6 leading-[30px] uppercase `}
                >
                  Phase 4: Team expansion and fundraising (Q3 2024 - Q4 2024)
                </h2>
                <Description
                  className={"max-w-[1320px]"}
                  text="In this phase, we conduct alpha testing to gather insights from early adopters and refine the game based on their feedback. Key activities include:

"
                />
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Alpha Testing:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Inviting a select group of players to participate in closed
                    alpha testing to evaluate gameplay mechanics, identify bugs,
                    and provide suggestions for improvement.
                  </p>
                </div>
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] min-w-[237px] xl:min-w-[320px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Iterative Development:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Implementing iterative updates and enhancements based on
                    alpha testing feedback to optimize gameplay, user
                    experience, and performance.
                  </p>
                </div>

                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] min-w-[237px] xl:min-w-[320px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Community Engagement:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Engaging with the community through regular updates,
                    feedback sessions, and community-driven initiatives to
                    foster a sense of ownership and collaboration.{" "}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2
                  className={`${roboto_slab.className} max-w-[1320px]   mx-auto text-[#f2d387] pt-5 pb-4 px-6 text-[26px] mt-6 leading-[30px] uppercase `}
                >
                  Phase 5: Token Launch and Community Expansion (Q3 2024 - Q4
                  2024)
                </h2>
                <Description
                  className={"max-w-[1320px]"}
                  text="During this phase, we prepare for the public launch of ELY and focus on expanding our community outreach efforts. Key activities include:


"
                />
                <div className="sm:flex px-6 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] uppercase min-w-[132px] xl:min-w-[190px]  xl:text-[22px]  text-[#fff]  font-bold">
                    Community Building:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin  text-[#fff] ">
                    Scaling our community outreach efforts through social media
                    campaigns, influencer partnerships, and community events to
                    attract new players and build a vibrant gaming and crypto
                    community.
                  </p>
                </div>

                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px]  uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Marketing Campaigns:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Launching targeted marketing campaigns to raise awareness
                    about Elysian Odyssey and drive user acquisition.
                  </p>
                </div>

                <div className="sm:flex px-6 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] uppercase  xl:text-[22px]  text-[#fff]  font-bold">
                    Token Launch:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Opening our community to a wider audience through a public
                    release, allowing players and investors to join our
                    community
                  </p>
                </div>

                <h2
                  className={`${roboto_slab.className} max-w-[1320px]   mx-auto text-[#f2d387] pt-20 pb-4 px-6 text-[26px] mt-6 leading-[30px] uppercase `}
                >
                  Phase 6: Elysian Odyssey beta release (Q1 2025 - Q2 2025)
                </h2>
                <Description
                  className={"max-w-[1320px]"}
                  text="In the final phase, we officially launch Elysian Odyssey and continue to support the game with regular updates, content expansions, and community engagement initiatives. Key activities include:

"
                />
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px]  uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Official Launch:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Celebrating the official launch of Elysian Odyssey across
                    multiple platforms, including PC, console, and mobile
                    devices.
                  </p>
                </div>
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] min-w-[237px] xl:min-w-[320px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Post-Launch Support:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Providing ongoing support and maintenance to ensure the
                    stability, security, and performance of the game.
                  </p>
                </div>
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] min-w-[237px] xl:min-w-[320px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Content Expansions{" "}
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Introducing new content updates, expansions, and DLCs to
                    keep the game fresh and engaging for players.{" "}
                  </p>
                </div>
                <div className="sm:flex px-6 py-3 gap-4 items-center  max-w-[1320px]   mx-auto">
                  <p className="text-[16px] min-w-[237px] xl:min-w-[320px] uppercase xl:text-[22px]  text-[#fff]  font-bold">
                    Community Events:
                  </p>
                  <p className="text-[16px]  xl:text-[21px] font-thin text-[#fff] ">
                    Hosting regular community events, tournaments, and
                    competitions to foster player engagement and retention.{" "}
                  </p>
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
