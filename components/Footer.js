"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    className={`px-6 bg-[black] mt-[-90px] overflow-hidden w-full h-[250px] sm:px-16 py-8 `}
    style={{
      backgroundImage: `url(/footer.png)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div className="flex  w-full h-full justify-center items-end gap-16">
      <Link
        href={
          "https://twitter.com/elysianodysseyg?s=11&t=MYFM-d6udoMcfZAdkjsejw"
        }
        target="_blank"
      >
        <Image
          src={"/x-twitter1.png"}
          alt="x-twitter"
          height={35}
          width={35}
          className="hover:scale-[1.1] duration-200 delay-75 ease-linear"
        />
      </Link>
      <Link href={"https://t.me/ElysianOdyssey"} target="_blank">
        {" "}
        <Image
          src={"/telegram.png"}
          alt="telegram"
          height={35}
          width={35}
          className="hover:scale-[1.1] duration-200 delay-75 ease-linear"
        />{" "}
      </Link>
    </div>
  </motion.footer>
);

export default Footer;
