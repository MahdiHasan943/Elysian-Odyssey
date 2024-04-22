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
                  <Image
                    src="/images/whitelogo.png"
                    alt="logo"
                    width={300}
                    height={80}
                    className="hidden lar ml-[-40px] larger:block"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/images/whitelogo.png"
                    alt="logo"
                    width={200}
                    height={80}
                    className="block larger:hidden"
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
                  className={`${roboto_slab.className}`}
                  onClick={() => {
                    setColor("about");
                  }}
                >
                  <Link
                    href={"#our-mission"}
                    className={
                      color === "about"
                        ? "text-[16px text-[#9e8b46] uppercase"
                        : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                    }
                  >
                    Our Mission
                  </Link>
                </p>

                <p
                  className={`${roboto_slab.className}`}
                  onClick={() => {
                    setColor("Charecters");
                  }}
                >
                  <Link
                    href={"#charecter"}
                    className={
                      color === "Charecters"
                        ? "text-[16px text-[#9e8b46] uppercase"
                        : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                    }
                  >
                    Character{" "}
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
                        ? "text-[16px text-[#9e8b46] uppercase"
                        : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                    }
                  >
                    tokenomics
                  </Link>
                </p> */}
                <p
                  className={`${roboto_slab.className}`}
                  onClick={() => {
                    setColor("Team");
                  }}
                >
                  <Link
                    href={"#team"}
                    className={
                      color === "Team"
                        ? "text-[16px text-[#9e8b46] uppercase"
                        : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                    }
                  >
                    Team
                  </Link>
                </p>
                <p
                  className={`${roboto_slab.className}`}
                  onClick={() => {
                    setColor("roadmap");
                  }}
                >
                  <Link
                    href={"#road"}
                    className={
                      color === "roadmap"
                        ? "text-[16px text-[#9e8b46] uppercase"
                        : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                    }
                  >
                    roadmap
                  </Link>
                </p>
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
                        href={"#our-mission"}
                        className={
                          color === "about"
                            ? "text-[16px text-[#9e8b46] uppercase"
                            : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                        }
                      >
                        Our Mission{" "}
                      </Link>
                    </p>
                    <p
                      className={`${roboto_slab.className}`}
                      onClick={() => {
                        setColor("Charecters");
                      }}
                    >
                      <Link
                        href={"#charecter"}
                        className={
                          color === "Charecters"
                            ? "text-[16px text-[#9e8b46] uppercase"
                            : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                        }
                      >
                        Character
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
                            ? "text-[16px text-[#9e8b46] uppercase"
                            : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                        }
                      >
                        tokenomics
                      </Link>
                    </p> */}
                    <p
                      className={`${roboto_slab.className}`}
                      onClick={() => {
                        setColor("Team");
                      }}
                    >
                      <Link
                        href={"#team"}
                        className={
                          color === "Team"
                            ? "text-[16px text-[#9e8b46] uppercase"
                            : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                        }
                      >
                        Team
                      </Link>
                    </p>
                    <p
                      className={`${roboto_slab.className}`}
                      onClick={() => {
                        setColor("roadmap");
                      }}
                    >
                      <Link
                        href={"#road"}
                        className={
                          color === "roadmap"
                            ? "text-[16px text-[#9e8b46] uppercase"
                            : " text-[16px] sm:text-[18px]  text-[#fff] uppercase"
                        }
                      >
                        roadmap
                      </Link>
                    </p>
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
