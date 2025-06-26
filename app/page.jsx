"use client";

import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import WhatIsMoSpeechSection from "./components/sections/WhatIsMoSpeechSection";
import ChallengesSection from "./components/sections/ChallengesSection";
import FeatureVoiceSection from "./components/sections/FeatureVoiceSection";
import FeatureTextSection from "./components/sections/FeatureTextSection";
import FeatureFullscreenSection from "./components/sections/FeatureFullscreenSection";
import WhoIsItForSection from "./components/sections/WhoIsItForSection";
import ThreeStepsSection from "./components/sections/ThreeStepsSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import Footer from "./components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-brand-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhatIsMoSpeechSection />
        <ChallengesSection />
        <FeatureVoiceSection />
        <FeatureTextSection />
        <FeatureFullscreenSection />
        <WhoIsItForSection />
        <ThreeStepsSection />
        <FinalCtaSection />
        <Footer />
        {/* Sections will go here */}
      </main>
    </div>
  );
} 