import React from "react";
import Card1 from "../cards/Card1";
import ObserveIcon from "../svgs/ObserveIcon";
import SpeakIcon from "../svgs/SpeakIcon";
import PointerIcon from "../svgs/PointerIcon";

export default function ThreeStepsSection() {
  return (
    <section className="relative w-full bg-brand-background px-section-x-mobile md:px-section-x py-section-y-mobile md:py-section-y border-b-line-width border-brand-line">
      <div className="flex flex-col items-center w-full max-w-[container-width] mx-auto">
        {/* Heading */}
        <div className="flex flex-col gap-between-heading items-start md:items-center text-left md:text-center w-full">
          <h2 className="text-h2-mobile md:text-h2 bg-gradient-to-r from-[#e9e9e9] to-[#0068b8] bg-clip-text text-transparent tracking-[-0.216px] leading-[49px]" style={{fontFamily: 'Manrope, sans-serif'}}>3 Simple Steps</h2>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-between-cards w-full max-w-[1044px] mx-auto items-stretch justify-center mt-12">
          <div className="w-full md:flex-1">
            <Card1
              icon={<div className="bg-[rgba(0,181,205,0.24)] rounded-full p-[10px] w-[55px] h-[55px] flex items-center justify-center"><ObserveIcon className="w-6 h-6" /></div>}
              title="Observe"
              description="What is your child interested in"
              hoverShadow="hover:shadow-[0_8px_32px_0_rgba(0,181,205,0.24)]"
            />
          </div>
          <div className="w-full md:flex-1">
            <Card1
              icon={<div className="bg-[rgba(235,169,28,0.2)] rounded-full p-[10px] w-[55px] h-[55px] flex items-center justify-center"><SpeakIcon className="w-6 h-6" /></div>}
              title="Speak"
              description="Speak naturally to them"
              hoverShadow="hover:shadow-[0_8px_32px_0_rgba(235,169,28,0.20)]"
            />
          </div>
          <div className="w-full md:flex-1">
            <Card1
              icon={<div className="bg-[rgba(0,116,205,0.16)] rounded-full p-[10px] w-[55px] h-[55px] flex items-center justify-center"><PointerIcon className="w-6 h-6" /></div>}
              title="Model"
              description="Find the symbols to your words"
              hoverShadow="hover:shadow-[0_8px_32px_0_rgba(0,116,205,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 