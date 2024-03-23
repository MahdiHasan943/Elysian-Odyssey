"use client";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./TextBlock";
import Button from "./reusable/Button";
import About from "./About";

const Test = () => {
  return (
    <div className="h-[1000px]   bg-[#210002]  overflow-hidden">
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer className="relative" offset={1} speed={0.25}>
          <TextBlock />
          {/* <div class="animation_layer parallax" id="artback1"></div> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Test;
