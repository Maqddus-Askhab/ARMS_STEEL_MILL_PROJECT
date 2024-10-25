import HeroSlider from "@/components/HeroSection";
import IndustrySection from "@/components/IntroSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSlider/>
      <IndustrySection/>
      <TeamSection/>
      <Testimonials/>
    </main>
  );
}
