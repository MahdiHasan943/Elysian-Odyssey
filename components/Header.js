"use client";
import { motion } from "framer-motion";
import { navVariants, slideIn, staggerContainer } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cinzel } from "next/font/google";
import useStickyNav from "@/utils/useStickyNav";
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const to = element.offsetTop;
    const duration = 800; // Adjust the duration as needed
    const start = window.pageYOffset;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const scroll = (timestamp) => {
      const time =
        "now" in window.performance ? performance.now() : new Date().getTime();
      let progress = Math.min((time - startTime) / duration, 1);
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
      progress = easeInOutQuad(progress);

      const newPosition = start + (to - start) * progress;
      window.scrollTo(0, newPosition);

      if (progress < 1) {
        window.requestAnimationFrame(scroll);
      }
    };

    window.requestAnimationFrame(scroll);
  }
};

const roboto_slab = Cinzel({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const Header = () => {
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);
  const stickyClass = useStickyNav();

  return (
    <>
      {/* {stickyClass ? ( */}

      {/* ) : ( */}
      <div className={``}>
        <motion.nav
          className={` py-8    px-6 sm:px-16 z-[99999999999999999] relative`}
        >
          <div
            className={`w-full mx-auto flex justify-between items-center gap-8`}
          >
            <motion.div
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              className=""
            >
              <p
                onClick={() => {
                  setColor("logo");
                }}
              >
                <Link href={"/"}>
                  {/* <Image
                    src="/Assets/logo.png"
                    alt="logo"
                    width={100}
                    height={80}
                    className="hidden hover:scale-110 duration-300 delay-100 ease-linear  larger:block"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/Assets/logo.png"
                    alt="logo"
                    width={200}
                    height={80}
                    className="block hover:scale-110 duration-300 delay-100 ease-linear ml-[-26px] larger:hidden"
                  /> */}
                  <img
                    src="/Assets/logo.png"
                    className="hover:scale-125 duration-300 delay-100 ease-linear"
                    alt=""
                  />
                </Link>{" "}
              </p>
            </motion.div>

            <div className="  ">
              <motion.div
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                className="hidden lg:flex justify-center items-center gap-8"
              >
                <p
                  className={`${roboto_slab.className} hover:scale-110 duration-300 delay-100 ease-linear`}
                  onClick={() => {
                    setColor("about");
                  }}
                >
                  <Link
                    href={"#About-Us"}
                    className={
                      color === "about"
                        ? "text-[16px text-[#D4D297] uppercase "
                        : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase "
                    }
                  >
                    About Us
                  </Link>
                </p>

                <p
                  className={`${roboto_slab.className} hover:scale-110 duration-300 delay-100 ease-linear`}
                  onClick={() => {
                    setColor("iMagus");
                  }}
                >
                  <Link
                    href={"#iMagus"}
                    className={
                      color === "iMagus"
                        ? "text-[16px text-[#D4D297] uppercase"
                        : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                    }
                  >
                    iMagus
                  </Link>
                </p>

                {/* <p
                  className={`${roboto_slab.className}`}
                  onClick={() => {
                    setColor("tokenomics");
                  }}
                >
                  <Link
                    href={"#tokenomics"}
                    className={
                      color === "tokenomics"
                        ? "text-[16px text-[#fff] uppercase"
                        : " text-[16px] sm:text-[18px]  text-[#D4D297]  hover:text-[#fff] uppercase"
                    }
                  >
                    tokenomics
                  </Link>
                </p> */}
                <p
                  className={`${roboto_slab.className} hover:scale-110 duration-300 delay-100 ease-linear`}
                  onClick={() => {
                    setColor("TheGenesis");
                  }}
                >
                  <Link
                    href={"#The-Genesis"}
                    className={
                      color === "TheGenesis"
                        ? "text-[16px text-[#D4D297] uppercase"
                        : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                    }
                  >
                    The Genesis
                  </Link>
                </p>
                <p
                  className={`${roboto_slab.className} hover:scale-110 duration-300 delay-100 ease-linear`}
                  onClick={() => {
                    setColor("NFT");
                  }}
                >
                  <Link
                    href={"#NFT"}
                    className={
                      color === "NFT"
                        ? "text-[16px text-[#D4D297] uppercase"
                        : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                    }
                  >
                    NFT
                  </Link>
                </p>

                {/*  */}
                <p
                  className={`${roboto_slab.className} hover:scale-110 duration-300 delay-100 ease-linear`}
                  onClick={() => {
                    setColor("Characters");
                  }}
                >
                  <Link
                    href={"#Characters"}
                    className={
                      color === "Characters"
                        ? "text-[16px text-[#D4D297] uppercase"
                        : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                    }
                  >
                    Characters
                  </Link>
                </p>
                {/*  */}
                <p
                  className={`${roboto_slab.className} hover:scale-110 duration-300 delay-100 ease-linear`}
                  onClick={() => {
                    setColor("Buy-Sell-Trade");
                  }}
                >
                  <Link
                    href={"#Buy-Sell-Trade"}
                    className={
                      color === "Buy-Sell-Trade"
                        ? "text-[16px text-[#D4D297] uppercase"
                        : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                    }
                  >
                    Buy-Sell-Trade
                  </Link>
                </p>
                {/*  */}
                <p
                  className={`${roboto_slab.className} hover:scale-110 duration-300 delay-100 ease-linear`}
                  onClick={() => {
                    setColor("Roadmap");
                  }}
                >
                  <Link
                    href={"#Roadmap"}
                    className={
                      color === "Roadmap"
                        ? "text-[16px text-[#D4D297] uppercase"
                        : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                    }
                  >
                    Roadmap
                  </Link>
                </p>
                {/*  */}
              </motion.div>
              <motion.div
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                className=""
              >
                <Image
                  onClick={() => setOpen(!open)}
                  src="/images/menu.svg"
                  alt="menu"
                  width={24}
                  height={24}
                  className="w-[24px] block lg:hidden h-[24px] object-contain"
                />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className=""
              >
                <motion.div
                  variants={slideIn("right", "tween", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  className={`${
                    !open ? "hidden" : "block fixed"
                  } p-6 bg-[#161113] block lg:hidden  absolute top-20 right-0 mx-4 my-2 min-w-[200px] max-w-[200px] z-10 rounded-xl`}
                >
                  <div className="flex flex-col gap-4">
                    <p
                      className={`${roboto_slab.className}`}
                      onClick={() => {
                        setColor("about");
                      }}
                    >
                      <Link
                        href={"#About-Us"}
                        className={
                          color === "about"
                            ? "text-[16px text-[#D4D297] uppercase"
                            : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                        }
                      >
                        About Us
                      </Link>
                    </p>

                    <p
                      className={`${roboto_slab.className} hover:scale-110 duration-300 delay-100 ease-linear`}
                      onClick={() => {
                        setColor("iMagus");
                      }}
                    >
                      <Link
                        href={"#iMagus"}
                        className={
                          color === "iMagus"
                            ? "text-[16px text-[#D4D297] uppercase"
                            : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                        }
                      >
                        iMagus
                      </Link>
                    </p>

                    {/* <p
                  className={`${roboto_slab.className}`}
                  onClick={() => {
                    setColor("tokenomics");
                  }}
                >
                  <Link
                    href={"#tokenomics"}
                    className={
                      color === "tokenomics"
                        ? "text-[16px text-[#fff] uppercase"
                        : " text-[16px] sm:text-[18px]  text-[#D4D297]  hover:text-[#fff] uppercase"
                    }
                  >
                    tokenomics
                  </Link>
                </p> */}
                    <p
                      className={`${roboto_slab.className}`}
                      onClick={() => {
                        setColor("TheGenesis");
                      }}
                    >
                      <Link
                        href={"#The-Genesis"}
                        className={
                          color === "TheGenesis"
                            ? "text-[16px text-[#D4D297] uppercase"
                            : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                        }
                      >
                        The Genesis
                      </Link>
                    </p>
                    <p
                      className={`${roboto_slab.className}`}
                      onClick={() => {
                        setColor("NFT");
                      }}
                    >
                      <Link
                        href={"#NFT"}
                        className={
                          color === "NFT"
                            ? "text-[16px text-[#D4D297] uppercase"
                            : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                        }
                      >
                        NFT
                      </Link>
                    </p>

                    {/*  */}
                    <p
                      className={`${roboto_slab.className}`}
                      onClick={() => {
                        setColor("Characters");
                      }}
                    >
                      <Link
                        href={"#Characters"}
                        className={
                          color === "Characters"
                            ? "text-[16px text-[#D4D297] uppercase"
                            : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                        }
                      >
                        Characters
                      </Link>
                    </p>
                    {/*  */}
                    <p
                      className={`${roboto_slab.className}`}
                      onClick={() => {
                        setColor("Buy-Sell-Trade");
                      }}
                    >
                      <Link
                        href={"#Buy-Sell-Trade"}
                        className={
                          color === "Buy-Sell-Trade"
                            ? "text-[16px text-[#D4D297] uppercase"
                            : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                        }
                      >
                        Buy-Sell-Trade
                      </Link>
                    </p>
                    {/*  */}
                    <p
                      className={`${roboto_slab.className}`}
                      onClick={() => {
                        setColor("Roadmap");
                      }}
                    >
                      <Link
                        href={"#Roadmap"}
                        className={
                          color === "Roadmap"
                            ? "text-[16px text-[#D4D297] uppercase"
                            : " text-[16px] sm:text-[18px]  hover:text-[#D4D297]  text-[#fff] uppercase"
                        }
                      >
                        Roadmap
                      </Link>
                    </p>
                    {/*  */}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default Header;
