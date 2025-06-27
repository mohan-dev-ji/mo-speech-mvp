import React from "react";

export default function AdviceSection() {
  return (
    <section className="w-full flex flex-col items-center px-4">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center max-w-[600px] mx-auto gap-12 py-16">
        <div className="flex flex-col items-center text-center w-full">
          <h2 className="text-h4-mobile md:text-h4 text-brand-text text-center w-full">
            Say the full sentence out loud while tapping or displaying one word using the app.
          </h2>
        </div>
      </div>
    </section>
  );
} 