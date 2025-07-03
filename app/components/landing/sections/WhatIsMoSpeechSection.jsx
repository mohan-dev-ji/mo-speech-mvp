import React from "react";
import SearchIcon from "../svgs/SearchIcon";
import ScanEyeIcon from "../svgs/ScanEyeIcon";
import UtensilsIcon from "../svgs/UtensilsIcon";
import Card1 from "../cards/Card1";

export default function WhatIsMoSpeechSection() {
  return (
    <section id="about" className="relative w-full bg-brand-background px-4 md:px-8">
      <div className="w-full h-px bg-brand-line" />
      <div className="absolute border border-[rgba(224,224,224,0.01)] border-solid inset-0 pointer-events-none rounded-none" />
      <div className="flex flex-col items-center w-full max-w-[1080px] mx-auto py-16">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <h2 className="title-h2 text-brand-text font-extrabold tracking-tight">What is Mo Speech?</h2>
          <p className="text-large text-brand-text-secondary max-w-2xl">A free, web-based tool designed to make AAC modelling faster and easier for everyone.</p>
        </div>
        {/* Cards */}
        <div className="flex flex-col gap-8 w-full max-w-[1080px] mx-auto items-center justify-center mt-12">
          <Card1
            icon={<div className="bg-brand-icon-bg-blue rounded-full flex items-center justify-center w-[55px] h-[55px]"><SearchIcon className="w-[22px] h-[22px]" /></div>}
            title="Search for Symbols"
            description="Instant access to the SymbolStix collection"
            hoverShadow="hover:shadow-[0_8px_32px_0_rgba(0,181,205,0.25)]"
          />
          <Card1
            icon={<div className="bg-brand-icon-bg-green rounded-full flex items-center justify-center w-[55px] h-[55px]"><ScanEyeIcon className="w-6 h-6" /></div>}
            title="Language in Action"
            description="AAC users need to see language to learn it"
            hoverShadow="hover:shadow-[0_8px_32px_0_rgba(0,181,205,0.25)]"
          />
          <Card1
            icon={<div className="bg-brand-icon-bg-yellow rounded-full flex items-center justify-center w-[55px] h-[55px]"><UtensilsIcon className="w-6 h-6" /></div>}
            title="Modelling"
            description="Model language at every opportunity"
            hoverShadow="hover:shadow-[0_8px_32px_0_rgba(235,169,28,0.25)]"
          />
        </div>
      </div>
    </section>
  );
} 