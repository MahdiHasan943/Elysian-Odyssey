"use client";

import { motion } from "framer-motion";

import { navVariants, slideIn, staggerContainer } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Roboto_Slab } from "next/font/google";
const roboto_slab = Roboto_Slab({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const Header = () => {
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={` py-8 px-6 sm:px-16 z-50 relative`}
      >
        <div
          className={`w-full mx-auto flex justify-between items-center gap-8`}
        >
          <Image
            src="/images/new_h-logo.png"
            alt="logo"
            width={200}
            height={80}
            // className="w-[24px] h-[24px] object-contain"
          />
          <div className="  ">
            <div className="hidden lg:flex justify-center items-center gap-8">
              <p
                className={`${roboto_slab.className}`}
                onClick={() => {
                  setColor("hero");
                }}
              >
                <Link
                  href={""}
                  className={
                    color === "hero"
                      ? "text-[16px text-[#9e8b46] uppercase"
                      : "text-[16px] text-[#fff] uppercase"
                  }
                >
                  Introduction
                </Link>
              </p>

              <p
                className={`${roboto_slab.className}`}
                onClick={() => {
                  setColor("about");
                }}
              >
                <Link
                  href={""}
                  className={
                    color === "about"
                      ? "text-[16px text-[#9e8b46] uppercase"
                      : "text-[16px] text-[#fff] uppercase"
                  }
                >
                  about
                </Link>
              </p>

              <p
                className={`${roboto_slab.className}`}
                onClick={() => {
                  setColor("Charecters");
                }}
              >
                <Link
                  href={""}
                  className={
                    color === "Charecters"
                      ? "text-[16px text-[#9e8b46] uppercase"
                      : "text-[16px] text-[#fff] uppercase"
                  }
                >
                  Charecters
                </Link>
              </p>

              <p
                className={`${roboto_slab.className}`}
                onClick={() => {
                  setColor("GamePlay");
                }}
              >
                <Link
                  href={""}
                  className={
                    color === "GamePlay"
                      ? "text-[16px text-[#9e8b46] uppercase"
                      : "text-[16px] text-[#fff] uppercase"
                  }
                >
                  GamePlay
                </Link>
              </p>

              <p
                className={`${roboto_slab.className}`}
                onClick={() => {
                  setColor("tokenomics");
                }}
              >
                <Link
                  href={""}
                  className={
                    color === "tokenomics"
                      ? "text-[16px text-[#9e8b46] uppercase"
                      : "text-[16px] text-[#fff] uppercase"
                  }
                >
                  tokenomics
                </Link>
              </p>
              <p
                className={`${roboto_slab.className}`}
                onClick={() => {
                  setColor("Team");
                }}
              >
                <Link
                  href={""}
                  className={
                    color === "Team"
                      ? "text-[16px text-[#9e8b46] uppercase"
                      : "text-[16px] text-[#fff] uppercase"
                  }
                >
                  Team
                </Link>
              </p>
            </div>
            <img
              onClick={() => setOpen(!open)}
              src="/images/menu.svg"
              alt="menu"
              className="w-[24px] block lg:hidden h-[24px] object-contain"
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className=""
            >
              <motion.div
                variants={slideIn("down", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                className={`${
                  !open ? "hidden" : "block"
                } p-6 bg-[#1a3f57]  absolute top-20 right-0 mx-4 my-2 min-w-[200px] max-w-[200px] z-10 rounded-xl`}
              >
                <div className="">
                  {" "}
                  <p
                    className={`${roboto_slab.className}`}
                    onClick={() => {
                      setColor("hero");
                    }}
                  >
                    <Link
                      href={""}
                      className={
                        color === "hero"
                          ? "text-[16px text-[#9e8b46] uppercase"
                          : "text-[16px] text-[#fff] uppercase"
                      }
                    >
                      Introduction
                    </Link>
                  </p>
                  <p
                    className={`${roboto_slab.className}`}
                    onClick={() => {
                      setColor("about");
                    }}
                  >
                    <Link
                      href={""}
                      className={
                        color === "about"
                          ? "text-[16px text-[#9e8b46] uppercase"
                          : "text-[16px] text-[#fff] uppercase"
                      }
                    >
                      about
                    </Link>
                  </p>
                  <p
                    className={`${roboto_slab.className}`}
                    onClick={() => {
                      setColor("Charecters");
                    }}
                  >
                    <Link
                      href={""}
                      className={
                        color === "Charecters"
                          ? "text-[16px text-[#9e8b46] uppercase"
                          : "text-[16px] text-[#fff] uppercase"
                      }
                    >
                      Charecters
                    </Link>
                  </p>
                  <p
                    className={`${roboto_slab.className}`}
                    onClick={() => {
                      setColor("GamePlay");
                    }}
                  >
                    <Link
                      href={""}
                      className={
                        color === "GamePlay"
                          ? "text-[16px text-[#9e8b46] uppercase"
                          : "text-[16px] text-[#fff] uppercase"
                      }
                    >
                      GamePlay
                    </Link>
                  </p>
                  <p
                    className={`${roboto_slab.className}`}
                    onClick={() => {
                      setColor("tokenomics");
                    }}
                  >
                    <Link
                      href={""}
                      className={
                        color === "tokenomics"
                          ? "text-[16px text-[#9e8b46] uppercase"
                          : "text-[16px] text-[#fff] uppercase"
                      }
                    >
                      tokenomics
                    </Link>
                  </p>
                  <p
                    className={`${roboto_slab.className}`}
                    onClick={() => {
                      setColor("Team");
                    }}
                  >
                    <Link
                      href={""}
                      className={
                        color === "Team"
                          ? "text-[16px text-[#9e8b46] uppercase"
                          : "text-[16px] text-[#fff] uppercase"
                      }
                    >
                      Team
                    </Link>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
