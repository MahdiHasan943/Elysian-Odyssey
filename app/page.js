import About from "@/components/About";
import Charecters from "@/components/Charecters";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      {/* <MultiLayerParallax /> */}
      <About />
      <Charecters />
      {/* <Tokenomics /> */}
      <Team />
      <Roadmap />
    </main>
  );
}
