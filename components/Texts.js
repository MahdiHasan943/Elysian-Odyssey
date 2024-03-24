"use client";
import React from "react";
import Description from "./reusable/Description";

const Texts = () => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2  ">
      <Description
        className="max-w-[600px] py-20 md:py-0"
        text="The distribution of ELY tokens across these categories ensures a
balanced and sustainable ecosystem that incentivizes
participation, rewards contribution, and supports the long-term
growth and success of the Elysian Odyssey game."
      />
      <div className="h-[300px]   md:h-[400px]  max-w-[500px]"> </div>
    </div>
  );
};

export default Texts;
