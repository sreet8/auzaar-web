import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProblemSection from "../components/home/ProblemSection";
import WhyNowSection from "../components/home/WhyNowSection";
import SolutionSection from "../components/home/SolutionSection";
import ProductPreview from "../components/home/ProductPreview";
import DifferentiationSection from "../components/home/DifferentiationSection";
import MarketSection from "../components/home/MarketSection";
import MoatSection from "../components/home/MoatSection";
import PricingSection from "../components/home/PricingSection";
import TeamSection from "../components/home/TeamSection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhyNowSection />
      <SolutionSection />
      <ProductPreview />
      <DifferentiationSection />
      <MarketSection />
      <MoatSection />
      <PricingSection />
      <TeamSection />
      <FinalCTA />
    </>
  );
}