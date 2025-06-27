import React from "react";
import DoubleSymbolCard from "../cards/DoubleSymbolCard";

// Placeholder SVG/image URLs (replace with actual SVG components or URLs as needed)
const iSymbol = "/pecs/i.svg";
const wantSymbol = "/pecs/want.svg";
const toSymbol = "/pecs/to.svg";
const playSymbol = "/pecs/play.svg";
const youSymbol = "/pecs/you.svg";
const doSymbol = "/pecs/do.svg";
const moreSymbol = "/pecs/more.svg";
const thinkSymbol = "/pecs/think.svg";
const whatSymbol = "/pecs/what.svg";
const needSymbol = "/pecs/need.svg";
const helpSymbol = "/pecs/help.svg";

export default function FullSentencesSection() {
  return (
    <section className="w-full bg-brand-bg-alt-secondary flex flex-col items-center px-4">
    <div className="w-full h-px bg-brand-line" />
    <div className="flex flex-col items-center max-w-[1080px] mx-auto gap-12 py-16">
      {/* Heading */}
      <div className="flex flex-col gap-2 items-center text-center w-full">
        <h2 className="text-h3-mobile md:text-h3 text-brand-tertiary">Modelling Full Sentences</h2>
        <p className="text-large text-brand-text-secondary max-w-2xl">Increase modelling key words to whole sentences.</p>
      </div>
      {/* Cards Row */}
      <div className="flex flex-col gap-8 w-full max-w-[1080px] mx-auto items-center justify-center">
      <DoubleSymbolCard symbols={[iSymbol, wantSymbol, toSymbol, playSymbol]} />
      <DoubleSymbolCard symbols={[doSymbol, youSymbol, needSymbol, helpSymbol]} />
      <DoubleSymbolCard symbols={[whatSymbol, doSymbol, youSymbol, thinkSymbol]} />
      </div>
    </div>
  </section>

  );
} 