import React from "react";

export default function GuidePageContent() {
  return (
    <section className="w-full flex flex-col items-center px-4">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center max-w-[1080px] mx-auto gap-12 py-16">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <h1 className="text-h1-mobile md:text-h1 text-brand-text font-extrabold tracking-tight">User Guide</h1>
          <p className="text-lead text-brand-text-secondary max-w-2xl">Whether you're a parent, therapist, or educator, this guide will help you get started with using the app.</p>
        </div>
      </div>
    </section>
  );
} 