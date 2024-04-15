"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    className={`px-6 bg-[black] relative mt-[-90px] overflow-hidden w-full h-[150px] sm:h-[250px] sm:px-16 py-8 `}
    // style={{
    //   backgroundImage: `url(/footer.png)`,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    // }}
  >
    <Image
      src={"/footer.png"}
      alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
      layout="fill"
      objectFit="cover"
      className="absolute hidden sm:block top-0 left-0 "
    />
    <Image
      src={"/footer.png"}
      alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
      width={600}
      height={200}
      className="absolute block sm:hidden top-0 left-0 "
    />
    <div className="flex absolute z-50 top-0 left-0  w-full pb-8 h-full justify-center items-end gap-16">
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
