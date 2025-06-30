import React from "react";
import SingleWordCard from "../cards/SingleWordCard";

// Placeholder SVG/image URLs (replace with actual SVG components or URLs as needed)
const goSymbol = "/pecs/go.svg";
const moreSymbol = "/pecs/more.svg";
const downSymbol = "/pecs/down.svg";

export default function SingleWordSection() {
  return (
    <section className="relative w-full flex flex-col items-center px-8 overflow-hidden">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center w-full max-w-[1080px] mx-auto py-16">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <h2 className="text-h2-mobile md:text-h2 text-brand-text font-extrabold tracking-tight">Start with Single Word Modelling</h2>
          <p className="text-large text-brand-text-secondary max-w-2xl">Show how to use words in real life by speaking and pointing to them on the screen.</p>
        </div>
        {/* Cards Row */}
        <div className="flex flex-col gap-8 w-full max-w-[1080px] mx-auto items-center justify-center">
          <SingleWordCard leftText="let's" symbol={goSymbol} />
          <SingleWordCard leftText="You want" symbol={moreSymbol} />
          <SingleWordCard leftText="Put it" symbol={downSymbol} rightText="down" />
        </div>
      </div>
    </section>
  );
} 