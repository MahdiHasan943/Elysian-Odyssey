"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TitleText, TypingText } from "./reusable/CustomText";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { exploreWorlds } from "@/constants";
import Player from "./reusable/Player";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});
const Charecters = () => {
  const [active, setActive] = useState("world-2");

  return (
    <div id="Characters">
      <div className="">
        <div className=" min-h-[900px] md:min-h-[1200px]   lg:min-h-[1100px] lg:max-h-[1100px]  relative  ">
          <div className=" absolute top-0 flex justify-center items-center w-full h-[200px] sm:h-[400px] left-0 z-[50]">
            <h2
              className={`${cinzel.className} text-center sectionTitle text-[47px] md:text-[80px] lg:text-[120px] larger:text-[180px]`}
            >
              <span
                className={`${cinzel.className} capitalize text-center  sectionTitle text-[70px] md:text-[120px]  lg:text-[160px] larger:text-[230px]`}
              >
                {" "}
                C
              </span>
              HARECTERS
            </h2>
          </div>

          <div className="absolute bg-[#241F1E] top-0 left-0 h-full w-full">
            {/* <Image
              src={"/images/new_charecter.png"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className=""
            /> */}
            <div className="w-full px-4  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
              <section
                className={`sm:p-16 w-full max-w-[1600px]  mt-[-70px] sm:mt-0 mx-auto xs:p-8 px-6 py-12`}
                id="explore"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className={`$2xl:max-w-[1280px] mt-[120px] w-full mx-auto flex flex-col`}
                >
                  <div className="mt-[50px] overflow-hidden flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {exploreWorlds.map((world, index) => (
                      <Player
                        key={world.id}
                        {...world}
                        index={index}
                        active={active}
                        handleClick={setActive}
                      />
                    ))}
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charecters;
