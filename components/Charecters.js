"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TitleText, TypingText } from "./reusable/CustomText";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { exploreWorlds } from "@/constants";
import Player from "./reusable/Player";

const Charecters = () => {
  const [active, setActive] = useState("world-2");

  return (
    <div id="charecter">
      <div className="">
        <div className=" min-h-[1100px]   lg:min-h-[1100px] lg:max-h-[1100px]  relative overflow-hidden ">
          <div className=" absolute top-0 flex justify-center items-center w-full h-[400px] left-0 z-[50]">
            <h2 className=" text-center sectionTitle text-[47px] md:text-[160px] larger:text-[200px]">
              CHARECTERS
            </h2>
          </div>

          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/new_charecter.png"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className=""
            />
            <div className="w-full px-4  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
              {/* <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className=""
              >
                <TypingText
                  title="Characters"
                  textStyles={` text-center mt-20 text-[#f2d387] pt-5 pb-5 font-bold text-[40px] leading-[40px] uppercase `}
                />
              </motion.div> */}
              {/* <Image
                src={"/charecterTitle.png"}
                alt="title"
                width={800}
                height={200}
                className="mx-auto"
              /> */}
              {/* <h2 className="absolute top-0 left-0 z-[] sectionTitle text-[200px]">
                CHARECTERS
              </h2> */}
              <section
                className={`sm:p-16 w-full max-w-[1600px]  mx-auto xs:p-8 px-6 py-12`}
                id="explore"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className={`$2xl:max-w-[1280px] mt-[100px] w-full mx-auto flex flex-col`}
                >
                  <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
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
