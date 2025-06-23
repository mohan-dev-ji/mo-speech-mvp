"use client";

import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import WhatIsMoSpeechSection from "./components/sections/WhatIsMoSpeechSection";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-brand-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhatIsMoSpeechSection />
        {/* Sections will go here */}
      </main>
    </div>
  );
} 