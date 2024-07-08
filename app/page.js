import About from "@/components/About";
import Charecters from "@/components/Charecters";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import Hero from "@/components/Hero";
import { Cinzel, Roboto_Slab } from "next/font/google";
import Imagus from "@/components/Imagus";
import Genesis from "@/components/Genesis";
const roboto_slab = Roboto_Slab({
  weight: ["400", "300", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
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
      <Genesis />
      <div
        id="NFT"
        className="w-full bg-[#191919] text-center border border-[#566000] py-8 px-4"
      >
        <button
          className={`${cinzel.className} bg-[#D5D399] py-1  text-[44px] px-10  rounded-sm`}
        >
          NFT
        </button>
      </div>
      <Charecters />
      <div
        id="NFT"
        className="w-full bg-[#191919] text-center border border-[#566000] py-8 px-4"
      >
        <img src="/Assets/buybtn1.png" className="mx-auto" alt="" />
        <p
          className={`${roboto_slab.className} px-2 mt-[-10px] capitalize text-[#fff] text-center  text-[20px] `}
        >
          You can buy, sell, and trade NFTs securely. Discover rare items and
          expand your collection.
        </p>
        <img
          src="/Assets/buybtn2.png"
          className="w-[80px]  lg:w-auto mx-auto mt-6"
          alt=""
        />
      </div>
      {/* <Tokenomics /> */}
      <Team />
      <Roadmap />
    </main>
  );
}
