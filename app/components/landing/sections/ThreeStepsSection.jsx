import React from "react";
import Image from "next/image";

export default function ThreeStepsSection() {
  return (
    <section id="about" className="relative w-full bg-brand-background px-section-x-mobile md:px-section-x py-section-y-mobile md:py-section-y">
      <div className="flex flex-col md:flex-row items-center w-full max-w-[1080px] mx-auto gap-between-heading">
        {/* Heading */}
        <div className="flex flex-col gap-between-heading items-start text-left">
          <h2 className="text-h2-mobile md:text-h2 bg-gradient-to-r from-[#e9e9e9] to-[#0068b8] bg-clip-text text-transparent">Easy to Use</h2>
          <ul className="flex flex-col gap-4 text-large text-brand-text-secondary list-disc pl-6">
            <li>Search for symbols by typing or using your voice</li>
            <li>Quickly find core words from the Symbol Stix library</li>
            <li>Tap a symbol to play audio and model communication</li>
            <li>Use fullscreen mode for distraction-free modelling</li>
            <li>Save your favorites for easy access</li>
            <li>Works instantly in Chrome—no install required</li>
          </ul>
        </div>
        {/* Right: App image */}
        <div className="flex-1 flex items-center justify-center w-full">
          <Image
            src="/images/mo-speech-desktop.png"
            alt="Mo Speech app close-up"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg w-full max-w-[500px] h-auto border-2 border-brand-line"
            priority
          />
        </div>
      </div>
    </section>
  );
} 