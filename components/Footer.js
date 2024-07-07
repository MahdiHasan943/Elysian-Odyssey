"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <motion.footer className="bg-[#191919] flex justify-between  items-center gap-4 min-h-[100px] py-6 px-4 sm:px-16">
    <img
      src="/Assets/bn.png"
      className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"
      alt=""
    />
    <img
      src="/Assets/tdefi_logo-transpare.png"
      className=" w-[180px] sm:w-auto h-[80px]"
      alt=""
    />
    <img
      src="/Assets/aethir.png"
      className="w-[50px] h-[40px] sm:w-[80px] sm:h-[60px]"
      alt=""
    />
  </motion.footer>
);

export default Footer;
