import About from "@/components/About";
import Charecters from "@/components/Charecters";
import Gameplay from "@/components/Gameplay";
import Hero from "@/components/Hero";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Test from "@/components/Test";
import Tokenomics from "@/components/Tokenomics";
import Button from "@/components/reusable/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* <Hero /> */}
      {/* <Test /> */}
      <MultiLayerParallax />
      {/* <div className="h-[400px] flex justify-center items-center py-20">
        <Button className="mt-[-140px] uppercase mx-auto text-center  text-[#fff] ">
          whitepaper
        </Button>
      </div> */}
      <About />
      <Charecters />
      {/* <Gameplay /> */}

      <Tokenomics />
      <Team />
      <Roadmap />
    </main>
  );
}
