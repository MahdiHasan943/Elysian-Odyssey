"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { textVariant2, textVariant3 } from "@/utils/motion";
import { Roboto_Slab } from "next/font/google";
import Button from "./reusable/Button";
import Description from "./reusable/Description";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const Hero = () => {
  const ref = useRef();
  const [stickyPosition, setStickyPosition] = useState({
    start: 0.9,
    end: 2.5,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setStickyPosition({ start: 0, end: 11 });
      } else {
        setStickyPosition({ start: 0.9, end: 2.5 });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run only once on component mount
  return (
    <div className="w-full mt-[-140px] overflow-hidden  parallax-container h-[100vh] sm:h-[140vh]">
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url("/images/heromain.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            backgroundImage: `url("/images/secondhero.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(1)}
          className="flex flex-col justify-start gap-4 items-center"
        >
          <motion.h1
            variants={textVariant3}
            initial="hidden"
            whileInView="show"
            className={`${roboto_slab.className} pb-8 sm:pb-20 mt-10 sm:mt-[100px] text-[#f9d286] font-bold text-[40px] leading-[40px] uppercase `}
          >
            Introduction
          </motion.h1>
          <Description
            text={
              "Enter the vast expanse of Elysian Odyssey, a revolutionary MMORPG  experience that immerses players in a realm of cosmic warfare,  mythical beings, and the eternal struggle between light and darkness. This whitepaper serves as a guide to the intricacies of the Elysian universe, providing insights into its lore, gameplay mechanics, and the innovative economic ecosystem at its core."
            }
          />
          <Description
            text={
              "lysian Odyssey isn't just another MMORPG; it's a dynamic adventure where players can shape their destinies, forge alliances, and challenge formidable foes in a world brimming with mystery and wonder. Inspired by ancient legends and infused with modern gaming technology, our game offers an unparalleled journey for players seeking excitement, camaraderie, and rewards beyond compare."
            }
          />
          <Description
            text={
              "In Elysian Odyssey, players will embark on epic quests, engage in thrilling battles, and unravel the secrets of the cosmos alongside thousands of fellow adventurers. As they explore the vast landscapes and delve into treacherous dungeons, they'll encounter legendary creatures, forge powerful alliances, and leave their mark on the fabric of the universe."
            }
          />
          <Description
            text={
              "But Elysian Odyssey isn't just about adventure; it's also about opportunity. Within our game's economy, players have the chance to earn tangible rewards for their time and effort. By participating in various activities, completing quests, and contributing to the game world, players can earn ELY tokens—a valuable cryptocurrency that serves as both a measure of in-game wealth and a means of real-world compensation."
            }
          />
          <Description
            text={
              "Join us on a journey unlike any other, where the thrill of adventure meets the excitement of economic opportunity. Welcome to Elysian Odyssey, where every quest is a story waiting to be told, and every victory brings you one step closer to greatness."
            }
          />

          <Button className="uppercase xl:my-20 text-[#fff] ">
            whitepaper
          </Button>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={stickyPosition}
          style={{ textAlign: "center" }}
          onClick={() => ref.current.scrollTo(0)}
          className="mt-[600px] sm:mb-0"
        >
          <img src={"/images/logo.png"} />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
};

export default Hero;

// "use client";
// import Image from "next/image";
// import React, { useRef } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// const Hero = () => {
//   const ref = useRef();

//   return (
//     <>
//       {/* <div className=" w-full mt-[-140px] h-[100vh] lg:h-[200vh]">
//       <div className="overflow-hidden relative w-full h-full">
//         <div className=" absolute top-0 left-0 h-full w-full">
//           <Image
//             src={"/images/heromain.png"}
//             width={2000}
//             height={1000}
//             className="w-[100%] h-[100%] "
//           />
//         </div>
//       </div>
//       </div> */}

//       <div className="w-full mt-[-140px] h-[200vh]">
//         <Parallax pages={4} ref={ref}>
//           {/* <ParallaxLayer speed={1}>
//             <h2>Welcome to my website</h2>
//         </ParallaxLayer>

//         <ParallaxLayer offset={1} speed={0.5}>
//             <h2>Web development is fun!</h2>
//         </ParallaxLayer> */}

//           <ParallaxLayer
//             offset={0}
//             speed={1}
//             factor={2}
//             style={{
//               backgroundImage: `url("/images/heromain.png")`,
//               backgroundSize: "cover",
//             }}
//           />

//           <ParallaxLayer
//             offset={2}
//             speed={1}
//             factor={4}
//             style={{
//               backgroundImage: `url("/images/heromain.png")`,
//               backgroundSize: "cover",
//             }}
//           ></ParallaxLayer>

//           <ParallaxLayer
//             sticky={{ start: 0.9, end: 2.5 }}
//             style={{ textAlign: "center" }}
//           >
//             <img src={"/images/logo.png"} />
//           </ParallaxLayer>

//           <ParallaxLayer
//             offset={0.2}
//             speed={0.05}
//             onClick={() => ref.current.scrollTo(3)}
//           >
//             <h2>Welcome to my website</h2>
//           </ParallaxLayer>

//           <ParallaxLayer
//             offset={3}
//             speed={2}
//             onClick={() => ref.current.scrollTo(0)}
//           >
//             <h2>Hi Mom!</h2>
//           </ParallaxLayer>
//         </Parallax>
//       </div>
//     </>
//   );
// };

// export default Hero;
