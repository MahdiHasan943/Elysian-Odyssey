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

const Team = () => {
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
        <div className=" min-h-[4000px] md:min-h-[2050px] md:max-h-[2050px]   xl:min-h-[1650px] xl:max-h-[1650px]  relative overflow-hidden ">
          <div className="absolute  top-0 left-0 h-full w-full">
            <Image
              src={"/images/301824.jpg"}
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
                title="Tokenomics and Distribution   "
                textStyles={` text-center flex flex-wrap justify-center  text-[#f2d387] pt-10 pb-8 font-bold  text-[35px] sm:text-[40px] leading-[40px] uppercase `}
              />
            </motion.div>
            <Description
              text="The Elysian Odyssey game ecosystem will be powered by the ELY token, providing utility, access, and rewards for players, investors, and stakeholders. The total token supply is capped at 300,000,000 ELY tokens.

"
            />

            <div className="grid py-12  gap-8 grid-cols-1 px-4 sm:px-16 lg:grid-cols-2 ">
              <div className="">
                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Pre-Seed:
                  </span>{" "}
                  <span className="px-4">
                    {" "}
                    5% of the total token supply will be allocated for the
                    Pre-Seed phase, with a vesting schedule as follows:
                  </span>
                </p>
                <ul className="list-disc py-2 px-8 text-[#fff] text-[18px]">
                  <li>2% unlocked at Token Generation Event (TGE)</li>
                  <li className="py-2">
                    3 months cliff, then 5.16% unlocked monthly thereafter.
                  </li>
                </ul>

                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Seed:
                  </span>{" "}
                  <span className="px-4">
                    {" "}
                    11% of the total token supply will be allocated for the Seed
                    phase, with a vesting schedule as follows:
                  </span>
                </p>
                <ul className="list-disc py-2 px-8 text-[#fff] text-[18px]">
                  <li>5% unlocked at Token Generation Event (TGE)</li>
                  <li className="py-2">
                    3 months cliff, then 5% unlocked monthly thereafter.
                  </li>
                </ul>

                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Private Round:
                  </span>{" "}
                  <span className="px-4">
                    {" "}
                    8.5% of the total token supply will be allocated for the
                    Private Round phase, with a vesting schedule as follows:
                  </span>
                </p>
                <ul className="list-disc py-2 px-8 text-[#fff] text-[18px]">
                  <li>5% unlocked at Token Generation Event (TGE)</li>
                  <li className="py-2">
                    2 months cliff, then 5% unlocked monthly thereafter.
                  </li>
                </ul>

                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Public:
                  </span>{" "}
                  <span className="px-4">
                    {" "}
                    2% of the total token supply will be allocated for the
                    Public phase, with a vesting schedule as follows:
                  </span>
                </p>
                <ul className="list-disc py-2 px-8 text-[#fff] text-[18px]">
                  <li>10% unlocked monthly thereafter.</li>
                  <li className="py-2">10% unlocked monthly thereafter.</li>
                </ul>

                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Team
                  </span>{" "}
                  <span className="px-4">
                    {" "}
                    12% of the total token supply will be allocated for the
                    development team and core contributors, with a vesting
                    schedule as follows:
                  </span>
                </p>
                <ul className="list-disc py-2 px-8 text-[#fff] text-[18px]">
                  <li>0% unlocked at Token Generation Event (TGE)</li>
                  <li className="py-2">
                    12 months cliff, then 8.33% unlocked quarterly thereafter.
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Marketing & <br /> Advisory
                  </span>{" "}
                  <span className="px-4">
                    {" "}
                    6.5% of the total token supply will be allocated for
                    marketing efforts, strategic partnerships, and advisory{" "}
                    <br />
                    services, with a vesting schedule as follows:
                  </span>
                </p>
                <ul className="list-disc py-2 px-8 text-[#fff] text-[18px]">
                  <li>0% unlocked at Token Generation Event (TGE)</li>
                  <li className="py-2">
                    6 months cliff, then 5% unlocked on month 7 and month 10,
                    then 20% unlocked quarterly thereafter.
                  </li>
                </ul>

                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Liquidity:
                  </span>{" "}
                  <span className="px-4">
                    {" "}
                    5% of the total token supply will be allocated for liquidity
                    provision to ensure smooth and efficient trading on
                    supported exchanges.
                  </span>
                </p>

                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Play to Earn:
                  </span>{" "}
                  <span className="px-4">
                    28% of the total token supply will be allocated for Play to
                    Earn rewards, incentivizing players to actively participate
                    in the game and earn tokens as compensation for their time
                    and efforts.
                  </span>
                </p>

                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Staking Rewards:
                  </span>{" "}
                  <span className="px-4">
                    7% of the total token supply will be allocated for staking
                    rewards, allowing token holders to stake their ELY tokens
                    and earn additional rewards for securing the network.
                  </span>
                </p>

                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    E-sports:
                  </span>{" "}
                  <span className="px-4">
                    5% of the total token supply will be allocated for
                    organizing tournaments, competitions, and other e-sports
                    events within the Elysian Odyssey ecosystem, fostering a
                    competitive gaming environment.
                  </span>
                </p>

                <p className="text-[#fff] text-[18px]">
                  <span className="font-bold text-[25px] text-[#f2d387]">
                    Reserve Fund:
                  </span>{" "}
                  <span className="px-4">
                    10% of the total token supply will be allocated to the
                    Reserve Fund, providing a buffer for future development,
                    expansion, and community initiatives. The distribution of
                    ELY tokens across these categories ensures a balanced and
                    sustainable ecosystem that incentivizes participation,
                    rewards contribution, and supports the long-term growth and
                    success of the Elysian Odyssey game.{" "}
                  </span>
                </p>
              </div>
            </div>

            {/* <Texts /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
