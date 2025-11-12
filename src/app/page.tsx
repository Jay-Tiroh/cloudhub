import Archive from "@/components/Archive";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LastSection from "@/components/LastSection";
import LovedBy from "@/components/LovedBy";
import { ModeToggle } from "@/components/ModeToggle";
import RedSection1 from "@/components/RedSection1";
import RedSection2 from "@/components/RedSection2";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <ModeToggle />
      <div className="flex-col">
        <Hero />
        <Companies />
        <Features />
        <RedSection1 />
        <Archive />
        <Testimonials />
        <LovedBy />
        <RedSection2 />
        <LastSection />
      </div>
    </>
  );
}
