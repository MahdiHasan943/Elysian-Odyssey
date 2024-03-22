"use client";
import Image from "next/image";
import React from "react";
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
const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
      id="about"
    >
      <div className=" min-h-[1500px]   lg:min-h-[1200px] lg:max-h-[1200px]  relative overflow-hidden ">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/images/charecter2.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="w-full px-4  py-10 absolute top-0 left-0 h-full z-[100000] max-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className=""
            >
              <TypingText
                title="Our mission"
                textStyles={` text-center text-[#f2d387] pt-5 pb-20 font-bold text-[40px] leading-[40px] uppercase `}
              />
            </motion.div>

            <motion.div className="relative">
              <motion.div variants={planetVariants("left")} className="">
                <Image
                  src={"/Screenshot_4-Photoroom-Photoroom-removebg-preview.png"}
                  alt={"planet"}
                  width={2000}
                  height={2000}
                  className="absolute top-0 left-0"
                />
              </motion.div>

              <div className="absolute w-full  flex justify-end h-full top-0 right-0 ">
                <div className="max-w-[1000px]">
                  <Description
                    text={
                      "At Elysian Odyssey, our vision is to pioneer a new era of immersive gaming experiences that transcend conventional boundaries and elevate player engagement to unprecedented levels. We envision a dynamic virtual universe where players can explore, create, and connect in ways never before imagined, fostering a sense of wonder, discovery, and community that transcends the confines of traditional gaming."
                    }
                  />
                  <Description
                    text={
                      "Our mission is to empower players to embark on epic journeys, forge meaningful connections, and shape the destiny of a vast and vibrant virtual world. We strive to create an environment where creativity, innovation, and collaboration thrive, enabling players to express themselves, unleash their imagination, and leave a lasting impact on the evolving narrative of Elysian Odyssey."
                    }
                    className={"py-6"}
                  />
                  <Description
                    text={
                      "Driven by a commitment to excellence, integrity, and inclusivity, we aim to set new standards for immersive gaming experiences, leveraging cutting-edge technologies and innovative gameplay mechanics to deliver unparalleled entertainment value to our players. We are dedicated to cultivating a vibrant and supportive community where players of all backgrounds can come together, share their experiences, and collectively shape the future of Elysian Odyssey."
                    }
                  />
                  <Description
                    text={
                      "Furthermore, we are committed to creating a sustainable economy within Elysian Odyssey, where players will seek to build careers, hone their skills, and pursue their passions. By fostering a robust ecosystem of opportunities, rewards, and incentives, we aim to provide players with the means to not only enjoy the game but also thrive within it, contributing to the overall richness and diversity of the Elysian Odyssey universe. Join us on this epic journey as we redefine the very essence of gaming and embark on an odyssey unlike any other."
                    }
                    className={"py-6"}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>{" "}
      </div>
    </motion.div>
  );
};

export default About;
