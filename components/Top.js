"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideIn, staggerContainer } from "@/utils/motion";
const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        //  top-[96%]
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex  justify-end overflow-hidden fixed  top-[90%] px-3   transition  delay-500  z-[99999!important]  right-0 "
          onClick={goToBtn}
        >
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="border border-[#25618B] rounded-full bg-[#25618B] ml-auto  top-btn  py-2 px-2 "
          >
            <Image
              src={"/images/topbtn.png"}
              alt="arrow"
              width={14}
              height={14}
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Top;
