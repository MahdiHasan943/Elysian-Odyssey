"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    className={`px-6 bg-[#1a283a] overflow-hidden w-full sm:px-16 py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`w-full mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        {/* <div className="mb-[50px] h-[2px] bg-white opacity-5" /> */}

        <div className="flex items-center justify-between flex-wrap gap-4">
          <Image
            src="/images/whitelogo.png"
            alt="logo"
            width={300}
            height={80}
            // className="w-[24px] h-[24px] object-contain"
          />
          <p className="font-normal text-center text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 ELYSIAN ODYSSEY. All rights reserved.
          </p>

          <div className="flex justify-center  max-w-[200px] sm:max-w-auto mx-auto sm:mx-0 gap-4">
            {socials.map((social) => (
              <Link href={social.socialLink} target="_blank">
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] mx-auto  h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
