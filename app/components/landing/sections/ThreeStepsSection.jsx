import React from "react";
import Card5 from "../cards/Card5";
import SpeakIcon from "../svgs/SpeakIcon";
import SearchIcon from "../svgs/SearchIcon";
import FullscreenIcon from "../svgs/FullscreenIcon";

export default function ThreeStepsSection() {
  return (
    <section className="relative w-full flex flex-col items-center px-4 md:px-8">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center w-full max-w-[1080px] mx-auto py-16">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <h2 className="text-h2-mobile md:text-h2 text-brand-text font-extrabold tracking-tight">Three Simple Steps</h2>
          <p className="text-large text-brand-text-secondary max-w-2xl">Get started with Mo Speech in just three easy steps.</p>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1080px] mx-auto items-center justify-center mt-12">
          <Card5
            icon={<SpeakIcon className="w-[50px] h-[50px]" />}
            title="1. Speak or Type"
            description="Use voice recognition or type to find the symbols you need instantly."
            step="1"
          />
          <Card5
            icon={<SearchIcon className="w-[50px] h-[50px]" />}
            title="2. Find Symbols"
            description="Browse through relevant PECS symbols without endless scrolling."
            step="2"
          />
          <Card5
            icon={<FullscreenIcon className="w-[50px] h-[50px]" />}
            title="3. Model Communication"
            description="Use fullscreen mode for distraction-free AAC modelling sessions."
            step="3"
          />
        </div>
      </div>
    </section>
  );
} 