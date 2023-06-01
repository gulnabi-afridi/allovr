import React from "react";
import { useState } from "react";
import { HeroSection } from "../../components/HeroSection.component";
import { StakeAovrSection } from "../../components/StakeAovrSection.component";
import { WhatIsStakingSection } from "../../components/WhatIsStakingSection.component";
import { CTABannerSection } from "../../components/CTABannerSection.component";
import { HowItWorkSection } from "../../components/HowItWorkSection.component";
import { StakingPoolsSection } from "../../components/StakingPoolsSection.component";
import CartComponent from "../../components/cart.component";
import Footer from "../../components/Footer.component";

export const Home = () => {
  // states

  return (
    <main className="bg-full-dark text-white min-h-screen font-work-sans">
      <HeroSection />
      <StakeAovrSection />
      <WhatIsStakingSection />
      <CTABannerSection />
      <HowItWorkSection />
      <StakingPoolsSection />
      <Footer />
    </main>
  );
};
