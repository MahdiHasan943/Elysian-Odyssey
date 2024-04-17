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
  textVariant2,
  textVariant3,
} from "@/utils/motion";
import { Cinzel, Roboto_Slab, Work_Sans } from "next/font/google";
import Description from "./reusable/Description";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const cinzel = Cinzel({
  weight: "700",
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
        className={`${roboto_slab.className}`}
        id="road"
      >
        <div className="min-h-[7600px] bg-[black]  mb-[-5px] smallest:min-h-[7600px] moreSmall:min-h-[7600px]   lg:min-h-[4500px] lg:max-h-[4500px]  relative overflow-hidden ">
          <div className=" absolute top-0 flex justify-center items-center w-full h-[400px] left-0 z-[50]">
            <h2
              className={`${cinzel.className} text-center sectionTitle text-[60px] md:text-[300px]`}
            >
              ROADMAP
            </h2>
          </div>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/panel/roadmap.jpg"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          <div className="w-full px-4 pt-[400px] sm:pt-[400px]  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
            {/* <TimelineRoadmap /> */}
            {/* 2022 */}
            <motion.div
              variants={fadeIn("right", "bounce", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="relative h-[800px] sm:h-[500px]  lg:h-[450px] mx-auto w-full lg:w-[815px]"
            >
              <div className="absolute top-0 left-1/2 transform z-20 border-[#403307] bg-[#050303] border-[4px] -translate-x-1/2  mt-[-115px] w-[300px] h-[130px]">
                <p
                  className={`${cinzel.className} text-[#b3b1b1] font-bold text-center text-[80px]`}
                >
                  2022
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 transform z-20 bg-[#050303] border-[#403307] border-[4px] -translate-x-1/2  mb-[-113px] w-[300px] h-[130px]">
                <p
                  className={`${cinzel.className} text-[#b3b1b1] font-bold text-center text-[80px]`}
                >
                  2023
                </p>
              </div>
              <Image
                src={"/Screenshot_5.png"}
                alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                layout="fill"
                objectFit="fill"
                className=" hidden sm:block"
              />
              <Image
                src={"/panel/phone.roeadmap.png"}
                alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                layout="fill"
                objectFit="fill"
                className=" block sm:hidden"
              />

              <div className="absolute px-4 py-10  top-0 h-full w-full left-0">
                <p
                  className={`${cinzel.className} text-[#fff] text-[26px] font-semibold text-center`}
                >
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
            </motion.div>
            {/* 2023 */}
            <div className="grid pl-[30px] sm:pl-0 grid-cols-1 sm:h-[1050px] md:grid-cols-2 mt-[150px] justify-center max-w-[1300px] mx-auto gap-20 relative ">
              {/* whiteline */}
              <motion.div
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="absolute h-full sm:h-[1050px] w-[15px] top-0 left-0 sm:left-1/2 -translate-x-1/2"
              >
                <Image
                  src={"/whiteline.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  width={5}
                  height={600}
                  className=" h-full w-[5px]  "
                />
              </motion.div>
              {/* main content */}
              {/* 1 */}
              <motion.div
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="relative h-[1100px] mt-[50px] sm:h-[800px]   mx-auto w-full "
              >
                <Image
                  src={"/Screenshot_6.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="hidden sm:block "
                />
                <Image
                  src={"/panel/phone.roeadmap.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="block sm:hidden"
                />

                <div className="absolute px-2 top-0 h-full w-full left-0">
                  <div className="grid grid-cols-2  gap-4">
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 border-r-[#717070] border-r-2 font-semibold text-center `}
                    >
                      Q1
                    </p>
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 font-semibold text-center `}
                    >
                      Q2
                    </p>
                  </div>
                  <div className="h-[4px] w-full bg-[#717070] mb-2"></div>

                  <p
                    className={`${cinzel.className} py-6 font-bold text-[#fff] text-[35px] text-center `}
                  >
                    NFT Community Building and NFT Sale
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-2"></div>

                  <p className="text-[#fff] text-[16px] px-4 py-2">
                    During this phase our team has worked on creating the
                    storyline, designing the characters, building community and
                    selling the characters in form of NFT.
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-5"></div>

                  <p className="py-6 text-[#fff] text-[16px] px-4">
                    - Lore creation: The story about the four beings of genesis
                    has been born.Each character got in depth explanation about
                    their abilities and disadvantages. <br /> - Character
                    design: Each character was carefully designed to contain the
                    characteristics described in the Lore. <br /> - NFT mint:
                    5556 Elysians were born to live on the blockchain -
                    <br /> Community building: a community of 1000+ holders was
                    created.
                  </p>
                </div>
              </motion.div>
              {/* 2 */}
              <motion.div
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="relative h-[880px] mb-[50px] sm:h-[700px] mt-auto   mx-auto w-full "
              >
                <Image
                  src={"/Screenshot_6.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="hidden sm:block "
                />
                <Image
                  src={"/panel/phone.roeadmap.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="block sm:hidden"
                />
                <div className="absolute px-2 top-0 h-full w-full left-0">
                  <div className="grid grid-cols-2  gap-4">
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 border-r-[#717070] border-r-2 font-semibold text-center `}
                    >
                      Q3
                    </p>
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 font-semibold text-center `}
                    >
                      Q4
                    </p>
                  </div>
                  <div className="h-[4px] w-full bg-[#717070] mb-2"></div>

                  <p
                    className={`${cinzel.className} py-6 font-bold text-[#fff] text-[28px]  sm:text-[35px] text-center `}
                  >
                    Conceptualization and <br /> Development
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-2"></div>

                  <p className="text-[#fff] text-[16px] px-4 py-2">
                    During this phase, our team focuses on conceptualising the
                    game mechanics, storyline, and world-building elements of
                    Elysian Odyssey. Key activities include:
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-5"></div>

                  <p className="py-6 text-[#fff] text-[16px] px-4">
                    - Conceptualization: Refining the game concept, defining
                    core gameplay mechanics, and establishing the narrative
                    framework. - Prototype Development: Building early-stage
                    prototypes to test fundamental game mechanics and gather
                    user feedback.
                  </p>
                </div>
              </motion.div>
            </div>
            {/* 2024 */}
            <div className="grid pl-[30px] sm:pl-0 grid-cols-1 sm:h-[1050px] md:grid-cols-2 mt-[150px] justify-center max-w-[1200px] mx-auto gap-20 relative ">
              {/* whiteline */}

              <div className="absolute top-0 left-1/2 transform z-20 border-[#403307] border-[4px] -translate-x-1/2  mt-[-140px] w-[300px] h-[130px]">
                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className={`${cinzel.className} text-[#b3b1b1] font-bold text-center text-[80px] `}
                >
                  2024
                </motion.p>
              </div>
              <motion.div
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="absolute h-full sm:h-[1050px] w-[15px] top-0 left-0 sm:left-1/2 -translate-x-1/2"
              >
                <Image
                  src={"/whiteline.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  width={5}
                  height={600}
                  className=" h-full w-[5px]  "
                />
              </motion.div>
              {/* main content */}
              {/* 1 */}
              <motion.div
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="relative h-[1250px] moreSmall:h-[1150px] mt-[50px] sm:h-[800px]   mx-auto w-full "
              >
                <Image
                  src={"/Screenshot_6.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="hidden sm:block "
                />
                <Image
                  src={"/panel/phone.roeadmap.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="block sm:hidden"
                />
                <div className="absolute px-2 top-0 h-full w-full left-0">
                  <div className="grid grid-cols-2  gap-4">
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 border-r-[#717070] border-r-2 font-semibold text-center `}
                    >
                      Q1
                    </p>
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 font-semibold text-center `}
                    >
                      Q2
                    </p>
                  </div>
                  <div className="h-[4px] w-full bg-[#717070] mb-2"></div>

                  <p
                    className={`${cinzel.className} py-6 font-bold text-[#fff] text-[35px] text-center `}
                  >
                    Team Expansion and Fundraising
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-2"></div>

                  <p className="text-[#fff] text-[16px] px-4 py-2">
                    In this phase, we conduct alpha testing to gather insights
                    from early adopters and refine the game based on their
                    feedback. Key activities include:
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-5"></div>

                  <p className="py-6 text-[#fff] text-[16px] px-4">
                    -Alpha Testing: Inviting a select group of players to
                    participate in closed alpha testing to evaluate gameplay
                    mechanics, identify bugs, and provide suggestions for
                    improvement. <br /> -Iterative Development: Implementing
                    iterative updates and enhancements based on alpha testing
                    feedback to optimize gameplay, user experience, and
                    performance. <br />
                    -Community Engagement: Engaging with the community through
                    regular updates, feedback sessions, and community-driven
                    initiatives to foster a sense of ownership and
                    collaboration.
                  </p>
                </div>
              </motion.div>
              {/* 2 */}
              <motion.div
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="relative h-[1150px] mb-[50px] sm:h-[750px] mt-auto   mx-auto w-full "
              >
                <Image
                  src={"/Screenshot_6.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="hidden sm:block "
                />
                <Image
                  src={"/panel/phone.roeadmap.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="block sm:hidden"
                />
                <div className="absolute px-2 top-0 h-full w-full left-0">
                  <div className="grid grid-cols-2  gap-4">
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 border-r-[#717070] border-r-2 font-semibold text-center `}
                    >
                      Q3
                    </p>
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 font-semibold text-center `}
                    >
                      Q4
                    </p>
                  </div>
                  <div className="h-[4px] w-full bg-[#717070] mb-2"></div>

                  <p
                    className={`${cinzel.className} py-6 font-bold text-[#fff] text-[28px]  sm:text-[35px] text-center `}
                  >
                    Token Launch and Community Expansion{" "}
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-2"></div>

                  <p className="text-[#fff] text-[16px] px-4 py-2">
                    During this phase, we prepare for the public launch of ELY
                    and focus on expanding our community outreach efforts. Key
                    activities include:
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-5"></div>

                  <p className="py-6 text-[#fff] text-[16px] px-4">
                    - Community Building: Scaling our community outreach effort
                    through social media campaigns, influencer partnerships, and
                    community events to attract new players and build a vibrant
                    gaming and crypto community - Marketing Campaigns: Launching
                    targeted marketing campaigns to raise awareness about
                    Elysian Odyssey and drive user acquisition. - Token Launch:
                    Opening our community to a wider audience through a public
                    release, allowing players and investors to join our
                    community.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* 2025 */}
            <div className="grid pl-[30px] sm:pl-0 grid-cols-1 sm:h-[1050px] md:grid-cols-2 mt-[150px] justify-center max-w-[1200px] mx-auto gap-20 relative ">
              {/* whiteline */}
              <div className="absolute top-0 left-1/2 transform z-20 border-[#403307] border-[4px] -translate-x-1/2  mt-[-140px] w-[300px] h-[130px]">
                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className={`${cinzel.className} text-[#b3b1b1] font-bold text-center text-[80px] `}
                >
                  2025
                </motion.p>
              </div>
              <motion.div
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="absolute h-full sm:h-[1050px] w-[15px] top-0 left-0 sm:left-1/2 -translate-x-1/2"
              >
                <Image
                  src={"/whiteline.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  width={5}
                  height={600}
                  className=" h-full w-[5px]  "
                />
              </motion.div>
              {/* main content */}
              {/* 1 */}
              <motion.div
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="relative h-[1100px] mt-[50px] sm:h-[800px]   mx-auto w-full "
              >
                <Image
                  src={"/Screenshot_6.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="hidden sm:block "
                />
                <Image
                  src={"/panel/phone.roeadmap.png"}
                  alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
                  layout="fill"
                  objectFit="fill"
                  className="block sm:hidden"
                />
                <div className="absolute px-2 top-0 h-full w-full left-0">
                  <div className="grid grid-cols-2  gap-4">
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 border-r-[#717070] border-r-2 font-semibold text-center `}
                    >
                      Q1
                    </p>
                    <p
                      className={`${cinzel.className} text-[#fff] text-[46px] py-7 font-semibold text-center `}
                    >
                      Q2
                    </p>
                  </div>
                  <div className="h-[4px] w-full bg-[#717070] mb-2"></div>

                  <p
                    className={`${cinzel.className} py-6 font-bold text-[#fff] text-[35px] text-center `}
                  >
                    Elysian Odyssey Beta Release
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-2"></div>

                  <p className="text-[#fff] text-[16px] px-4 py-2">
                    During this phase our team has worked on creating the
                    storyline, designing the characters, building community and
                    selling the characters in form of NFT.
                  </p>
                  <div className="h-[4px] w-full bg-[#717070] my-5"></div>

                  <p className="py-6 text-[#fff] text-[16px] px-4">
                    - Lore creation: The story about the four beings of genesis
                    has been born.Each character got in depth explanation about
                    their abilities and disadvantages. <br /> - Character
                    design: Each character was carefully designed to contain the
                    characteristics described in the Lore. <br /> - NFT mint:
                    5556 Elysians were born to live on the blockchain -
                    Community building: a community of 1000+ holders was
                    created.
                  </p>
                </div>
              </motion.div>
              {/* 2 */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
