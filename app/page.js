import About from "@/components/About";
import Charecters from "@/components/Charecters";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import Hero from "@/components/Hero";
import { Cinzel } from "next/font/google";
import Imagus from "@/components/Imagus";

const cinzel = Cinzel({
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      {/* <MultiLayerParallax /> */}
      <About />
      <Imagus></Imagus>
      <div className="w-full bg-[#191919] text-center border border-[#566000] py-8 px-4">
        <button
          className={`${cinzel.className} bg-[#D5D399] py-1  text-[44px] px-10  rounded-sm`}
        >
          NFT
        </button>
      </div>
      <Charecters />
      {/* <Tokenomics /> */}
      <Team />
      <Roadmap />
    </main>
  );
}
