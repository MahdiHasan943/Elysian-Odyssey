"use client";

import { motion } from "framer-motion";

import { navVariants } from "../utils/motion";
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
                  about
                </Link>
              </p>

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
                  Charecters
                </Link>
              </p>

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
                  GamePlay
                </Link>
              </p>

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
                  tokenomics
                </Link>
              </p>
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
                  Team
                </Link>
              </p>
            </div>
            <img
              src="/images/menu.svg"
              alt="menu"
              className="w-[24px] block lg:hidden h-[24px] object-contain"
            />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
