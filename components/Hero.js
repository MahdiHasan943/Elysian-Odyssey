import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" w-full mt-[-140px] h-[100vh] lg:h-[200vh]">
      <div className="overflow-hidden relative w-full h-full">
        <div className=" absolute top-0 left-0 h-full w-full">
          <Image
            src={"/images/heromain.png"}
            width={2000}
            height={1000}
            className="w-[100%] h-[100%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
