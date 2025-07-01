import React from "react";
import Card2 from "../cards/Card2";
import ShieldAlertIcon from "../svgs/ShieldAlertIcon";
import ShieldCheckIcon from "../svgs/ShieldCheckIcon";

export default function ChallengesSection() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-8">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center w-full max-w-[1080px] mx-auto py-16">
        <div className="flex flex-col items-center gap-2 text-center w-full">
          <h2 className="text-h2-mobile md:text-h2 text-brand-text font-extrabold tracking-tight">Common Challenges</h2>
          <p className="text-large text-brand-text-secondary max-w-2xl">AAC modelling can be challenging. Here are some common issues and solutions.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
          <Card2
            title="The challenges with most AAC tools"
            description={
              <ul className="flex flex-col gap-4 text-left text-brand-text-secondary">
                <li className="flex gap-2 items-center"><ShieldAlertIcon style={{ width: 22, height: 22 }} color="#eba91c" /> Users spend too long searching for symbols</li>
                <li className="flex gap-2 items-center"><ShieldAlertIcon style={{ width: 22, height: 22 }} color="#eba91c" /> Nested categories and static layouts get in the way</li>
                <li className="flex gap-2 items-center"><ShieldAlertIcon style={{ width: 22, height: 22 }} color="#eba91c" /> Apps often only work on one tablet or OS</li>
                <li className="flex gap-2 items-center"><ShieldAlertIcon style={{ width: 22, height: 22 }} color="#eba91c" /> Cognitive overload with small imagery</li>
              </ul>
            }
            bgColor="bg-[rgba(0,181,205,0.16)]"
            textColor="text-[#e0e0e0]"
            hoverShadow="hover:shadow-[0_8px_32px_0_rgba(235,169,28,0.25)]"
            titleAlign="left"
          />
          <Card2
            title="How Mo Speech Helps"
            description={
              <ul className="flex flex-col gap-4 text-left text-brand-text-secondary">
                <li className="flex gap-2 items-center"><ShieldCheckIcon style={{ width: 22, height: 22 }} color="#00b5cd" /> Find symbols instantly with natural language input</li>
                <li className="flex gap-2 items-center"><ShieldCheckIcon style={{ width: 22, height: 22 }} color="#00b5cd" /> No deep menus or distractions, just speak and go</li>
                <li className="flex gap-2 items-center"><ShieldCheckIcon style={{ width: 22, height: 22 }} color="#00b5cd" /> Works in Chrome on any laptop, tablet, or phone</li>
                <li className="flex gap-2 items-center"><ShieldCheckIcon style={{ width: 22, height: 22 }} color="#00b5cd" /> Built to reduce overload</li>
              </ul>
            }
            bgColor="bg-[rgba(0,116,205,0.16)]"
            textColor="text-white"
            hoverShadow="hover:shadow-[0_8px_32px_0_rgba(0,181,205,0.25)]"
            titleAlign="left"
          />
        </div>
      </div>
    </section>
  );
} 