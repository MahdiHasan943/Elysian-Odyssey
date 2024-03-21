"use client";

import { motion } from "framer-motion";

import { navVariants } from "../utils/motion";
import Image from "next/image";

const Header = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={` py-8 px-6 sm:px-16 z-50 relative`}
  >
    <div className={`w-full mx-auto flex justify-between items-center gap-8`}>
      <Image
        src="/images/new_h-logo.png"
        alt="logo"
        width={200}
        height={80}
        // className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <img
        src="/images/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Header;
