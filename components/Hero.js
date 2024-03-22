"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { textVariant2, textVariant3 } from "@/utils/motion";
import { Roboto_Slab } from "next/font/google";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const Hero = () => {
  const ref = useRef();

  return (
    <div className="w-full mt-[-140px] overflow-hidden  parallax-container h-[100vh] sm:h-[120vh]">
      <Parallax pages={2} ref={ref} verticle>
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
          factor={4}
          style={{
            backgroundImage: `url("/images/secondhero.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={"/images/logo.png"} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <motion.h1
            variants={textVariant3}
            initial="hidden"
            whileInView="show"
            className={`${roboto_slab.className} mt-[100px] text-[#f9d286] text-[60px] leading-[40px] uppercase `}
          >
            Introduction
          </motion.h1>
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
