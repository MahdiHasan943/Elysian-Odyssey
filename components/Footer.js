"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    className={`px-6 bg-[black] relative mt-[-90px] overflow-hidden w-full h-[260px] sm:h-[330px] sm:px-16 py-8 `}
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
      src={"/Screenshot_1.png"}
      alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
      width={600}
      height={200}
      className="absolute h-[260px] w-[100%] block sm:hidden top-0 left-0 "
    />
    <div className="flex absolute z-50 top-0 left-0 bg-transparent  w-full pb-8 h-full justify-center items-end gap-18">
      <div className="">
        <div className="flex  justify-center gap-16 pb-3 sm:pb-8 pt-4">
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
        <p className="text-white font-thin text-[14px]">
          Elysian Capital LTD 2024
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
