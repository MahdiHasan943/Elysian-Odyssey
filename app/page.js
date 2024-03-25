import About from "@/components/About";
import Charecters from "@/components/Charecters";
import Gameplay from "@/components/Gameplay";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import Button from "@/components/reusable/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <MultiLayerParallax />
      <About />
      <Charecters />
      <Tokenomics />
      <Team />
      <Roadmap />
    </main>
  );
}
