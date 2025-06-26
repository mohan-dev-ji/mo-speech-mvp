import SearchIcon from "../svgs/SearchIcon";
import ScanEyeIcon from "../svgs/ScanEyeIcon";
import UtensilsIcon from "../svgs/UtensilsIcon";
import Card1 from "./Card1";

export default function WhatIsMoSpeechSection() {
  return (
    <section className="relative w-full bg-[rgba(0,181,205,0.04)] px-4">
      <div className="w-full h-px bg-brand-line" />
      <div className="absolute border border-[rgba(224,224,224,0.01)] border-solid inset-0 pointer-events-none rounded-none" />
      <div className="flex flex-col items-center max-w-[1044px] mx-auto gap-12 py-16">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <h2 className="text-h2-mobile md:text-h2 text-brand-text">What is Mo Speech?</h2>
          <p className="text-large text-brand-text-secondary max-w-2xl">Mo Speech is a free online resource that bridge's the gap between everyday life and AAC training.</p>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-center justify-center">
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