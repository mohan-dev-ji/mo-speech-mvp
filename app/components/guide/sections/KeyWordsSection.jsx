import React from "react";
import SingleWordCard from "../cards/SingleWordCard";
import DoubleSymbolCard from "../cards/DoubleSymbolCard";

// Placeholder SVG/image URLs (replace with actual SVG components or URLs as needed)
const weSymbol = "/pecs/we.svg";
const playSymbol = "/pecs/play.svg";
const footballSymbol = null; // No SVG, just text
const thatSymbol = "/pecs/that.svg";
const goodSymbol = "/pecs/good.svg";
const doSymbol = "/pecs/do.svg";
const youSymbol = "/pecs/you.svg";
const needSymbol = "/pecs/need.svg";
const helpSymbol = "/pecs/help.svg";
const putSymbol = "/pecs/put.svg";
const itSymbol = "/pecs/it.svg";
const goSymbol = "/pecs/go.svg";
const moreSymbol = "/pecs/more.svg";
const downSymbol = "/pecs/down.svg";


export default function KeyWordsSection() {
  return (
    <section className="w-full bg-brand-bg-alt-secondary flex flex-col items-center px-4">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center max-w-[1080px] mx-auto gap-12 py-16">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <h2 className="text-h3-mobile md:text-h3 text-brand-text">Model Two Words in a Sentence</h2>
          <p className="text-large text-brand-text-secondary max-w-2xl">You don’t need to model every word. Focus on the important ones:</p>
        </div>
        {/* Cards Row */}
        <div className="flex flex-col gap-8 w-full max-w-[1080px] mx-auto items-center justify-center">
          <DoubleSymbolCard leftText="can" symbols={[weSymbol, playSymbol]} rightText="football" />
         <DoubleSymbolCard leftText="is" symbols={[thatSymbol, goodSymbol]} />
         <DoubleSymbolCard leftText="do you" symbols={[needSymbol, helpSymbol]} />
         <DoubleSymbolCard leftText="put" symbols={[putSymbol, itSymbol]} rightText="here" />
        </div>
      </div>
    </section>
  );
} 