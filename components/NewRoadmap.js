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
const NewRoadmap = () => {
  return (
    <div id="Roadmap" className="bg-[#241D1C] px-4  sm:px-16">
      <h2
        className={`${cinzel.className} text-center sectionTitle text-[45px] md:text-[110px] larger:text-[200px]`}
      >
        <span
          className={`${cinzel.className} capitalize text-center  sectionTitle text-[90px]  md:text-[140px] 2xl:text-[250px]`}
        >
          R
        </span>
        OADMAP
      </h2>
      <div className="max-w-[1100px] mx-auto">
        <p
          className={`${roboto_slab.className} font-bold text-[#fff] text-[60px] sm:text-[100px] text-center`}
        >
          2022
        </p>
        <div class="group nft-container">
          <h2 class={`${cinzel.className} nft-title`}>
            Team Expension and fundraising
          </h2>
          <div class="nft-content">
            <p class="nft-description">
              During this phase, our team focuses on expanding the team with
              highly competent individuals that are leading professionals in the
              industry. Also the team is starting to raise funds to secure it’s
              development:
            </p>
            <p class="nft-details">
              Fundraising: Raising funds in this stage will make sure the team
              will have enough resources to develop the best possible product
              and ensure it has smooth launch process on the market. Team
              Expansion: Scaling our development team with skilled professionals
              in game design, development, and blockchain integration. Alpha
              trailer: we will release the first trailer of the Elysian Odyssey
              game
            </p>
          </div>
        </div>

        <p
          className={`${roboto_slab.className} font-bold text-[#fff] text-[60px] sm:text-[100px] text-center`}
        >
          2023
        </p>
        <div className="grid relative grid-cols-1 py-4 lg:grid-cols-2 gap-5 lg:gap-1">
          <div className="group roadMap1">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q1
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q2
                </p>
              </div>
              <h2
                className={`${cinzel.className}  font-bold px-2 text-[24px] sm:text-[30px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                NFT Community Building and NFT Sale
              </h2>
            </div>
            <div className="w-full border  roadMap1_content duration-300 delay-75 ease-linear border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                During this phase our team has worked on creating the storyline,
                designing the characters, building community and selling the
                characters in form of NFT. <br /> Lore creation: The story about
                the four beings of genesis has been born. Each character got in
                depth explanation about their abilities and disadvantages
                Character design: Each character was carefully designed to
                contain the characteristics described in the Lore. NFT mint:
                5556 Elysians were born to live on the blockchain Community
                building: a community of 1000+ holders was created.
              </p>
            </div>
          </div>
          <Image
            src={"/whiteline.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            width={5}
            height={600}
            className="absolute top-0 hidden lg:block left-[50%] translate-x-[-50%] h-full  w-[5px]  "
          />
          {/* 2 */}
          <div className=" lg:mt-20 group roadMap1">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q3
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q4
                </p>
              </div>
              <h2
                className={`${cinzel.className}  font-bold px-2 text-[24px] sm:text-[30px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                Conceptualization and Development
              </h2>
            </div>
            <div className="w-full roadMap1_content duration-300 delay-75 ease-linear border border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                During this phase, our team focuses on conceptualising the game
                mechanics, storyline, and world-building elements of Elysian
                Odyssey. Key activities include:
              </p>
              <p className="py-6 text-[#fff] text-[16px] px-4">
                - Conceptualization: Refining the game concept, defining core
                gameplay mechanics, and establishing the narrative framework. -
                Prototype Development: Building early-stage prototypes to test
                fundamental game mechanics and gather user feedback.
              </p>
            </div>
          </div>
        </div>

        <p
          className={`${roboto_slab.className} font-bold text-[#fff] text-[60px] sm:text-[100px] text-center`}
        >
          2024
        </p>
        {/* 2 grid */}
        <div className="grid relative grid-cols-1 py-4 lg:grid-cols-2 gap-5 lg:gap-1">
          <div className="group roadMap1">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q1
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q2
                </p>
              </div>
              <h2
                className={`${cinzel.className}  font-bold px-2 text-[24px] sm:text-[30px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                Full development mode and launch preparations{" "}
              </h2>
            </div>
            <div className="w-full roadMap1_content duration-300 delay-75 ease-linear border border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                In this phase, we conduct alpha testing to gather insights from
                early adopters and refine the game based on their feedback. Key
                activities include:
              </p>
              <p className="py-6 text-[#fff] text-[16px] px-4">
                Alpha Testing: Inviting a select group of players to participate
                in closed alpha testing to evaluate gameplay mechanics, identify
                bugs, and provide suggestions for improvement. Iterative
                Development: Implementing iterative updates and enhancements
                based on alpha testing feedback to optimize gameplay, user
                experience, and performance. Community Engagement: Engaging with
                the community through regular updates, feedback sessions, and
                community-driven initiatives to foster a sense of ownership and
                collaboration.
              </p>
            </div>
          </div>
          <Image
            src={"/whiteline.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            width={5}
            height={600}
            className="absolute top-0 hidden lg:block left-[50%] translate-x-[-50%] h-full  w-[5px]  "
          />
          {/* 2 */}
          <div className="group roadMap1 lg:mt-20">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q3
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q4
                </p>
              </div>
              <h2
                className={`${cinzel.className}  font-bold px-2 text-[24px] sm:text-[30px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                Token Launch and Community Expansion
              </h2>
            </div>
            <div className="w-full border roadMap1_content duration-300 delay-75 ease-linear border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                During this phase, we prepare for the public launch of ELY and
                focus on expanding our community outreach efforts. Key
                activities include:
              </p>
              <p className="py-6 text-[#fff] text-[16px] px-4">
                Community Building: Scaling our community outreach efforts
                through social media campaigns, influencer partnerships, and
                community events to attract new players and build a vibrant
                gaming and crypto community. Marketing Campaigns: Launching
                targeted marketing campaigns to raise awareness about Elysian
                Odyssey and drive user acquisition. Token Launch: Opening our
                community to a wider audience through a public release, allowing
                players and investors to join our community
              </p>
            </div>
          </div>
        </div>
        <p
          className={`${roboto_slab.className} font-bold text-[#fff] text-[60px] sm:text-[100px] text-center`}
        >
          2025
        </p>
        <div className="flex justify-center items-center  py-4 lg:grid-cols-2 gap-5 ">
          <div className="max-w-[540px] group roadMap1">
            <div className="max-w-[90%] border border-[#8F8D68] mx-auto">
              <div className="grid grid-cols-2  gap-4">
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 border-r-[#717070] border-r-2 font-semibold text-center `}
                >
                  Q1
                </p>
                <p
                  className={`${cinzel.className} text-[#fff] text-[46px] py-2 font-semibold text-center `}
                >
                  Q2
                </p>
              </div>
              <h2
                className={`${cinzel.className}  font-bold px-2 text-[24px] sm:text-[30px] border  border-b-1 border-l-0 border-r-0 border-[#8F8D68] text-[#D2D096]`}
              >
                {" "}
                Elysian Odyssey beta release
              </h2>
            </div>
            <div className="w-full roadMap1_content duration-300 delay-75 ease-linear border border-[#8F8D68]">
              <p className="text-[#fff] text-[16px] px-4 py-2">
                In the final phase, we officially launch Elysian Odyssey and
                continue to support the game with regular updates, content
                expansions, and community engagement initiatives. Key activities
                include:
              </p>
              <p className="py-6 text-[#fff] text-[16px] px-4">
                Official Launch: Celebrating the official launch of Elysian
                Odyssey across multiple platforms, including PC, console, and
                mobile devices. Post-Launch Support: Providing ongoing support
                and maintenance to ensure the stability, security, and
                performance of the game. Content Expansions: Introducing new
                content updates, expansions, and DLCs to keep the game fresh and
                engaging for players. Community Events: Hosting regular
                community events, tournaments, and competitions to foster player
                engagement and retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoadmap;
