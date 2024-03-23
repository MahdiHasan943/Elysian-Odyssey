import About from "@/components/About";
import Charecters from "@/components/Charecters";
import Gameplay from "@/components/Gameplay";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Test from "@/components/Test";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* <Hero /> */}
      <Test />

      <About />
      <Charecters />
      {/* <Gameplay /> */}

      <Tokenomics />
      <Team />
      <Roadmap />
    </main>
  );
}
