import SearchIcon from "../svgs/SearchIcon";
import ScanEyeIcon from "../svgs/ScanEyeIcon";
import UtensilsIcon from "../svgs/UtensilsIcon";

export default function WhatIsMoSpeechSection() {
  return (
    <section className="relative w-full bg-[rgba(0,181,205,0.04)] px-4">
      <div className="w-full h-px bg-brand-line" />
      <div className="absolute border border-[rgba(224,224,224,0.01)] border-solid inset-0 pointer-events-none rounded-none" />
      <div className="flex flex-col items-center max-w-[1044px] mx-auto gap-12 py-16">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <h2 className="text-h2 text-brand-text">What is Mo Speech?</h2>
          <p className="text-large text-brand-text-secondary max-w-2xl">Mo Speech is a free online resource that bridge's the gap between everyday life and AAC training.</p>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-center">
          {/* Card 1 */}
          <div className="flex-1 bg-brand-background rounded-2xl relative min-w-[260px] max-w-sm flex flex-col items-center border border-brand-line transition-transform duration-200 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(0,181,205,0.25)]">
            <div className="absolute border border-[rgba(224,224,224,0.01)] inset-0 pointer-events-none rounded-2xl" />
            <div className="flex flex-col items-center gap-8 px-6 py-12 w-full">
              <div className="bg-[rgba(0,116,205,0.16)] rounded-full flex items-center justify-center w-[55px] h-[55px]">
                <SearchIcon className="w-[22px] h-[22px]" />
              </div>
              <div className="flex flex-col gap-4 items-center text-center w-full">
                <h4 className="text-h4 text-white font-bold">Search for Symbols</h4>
                <p className="text-p-ui text-brand-text-secondary">Instant access to the SymbolStix collection</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-1 bg-brand-background rounded-2xl relative min-w-[260px] max-w-sm flex flex-col items-center border border-brand-line transition-transform duration-200 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(0,181,205,0.25)]">
            <div className="absolute border border-[rgba(224,224,224,0.01)] inset-0 pointer-events-none rounded-2xl" />
            <div className="flex flex-col items-center gap-8 px-6 py-12 w-full">
              <div className="bg-[rgba(0,181,205,0.16)] rounded-full flex items-center justify-center w-[55px] h-[55px]">
                <ScanEyeIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-4 items-center text-center w-full">
                <h4 className="text-h4 text-white font-bold">Language in Action</h4>
                <p className="text-p-ui text-brand-text-secondary">AAC users need to see language to learn it</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex-1 bg-brand-background rounded-2xl relative min-w-[260px] max-w-sm flex flex-col items-center border border-brand-line transition-transform duration-200 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(235,169,28,0.25)]">
            <div className="absolute border border-[rgba(224,224,224,0.01)] inset-0 pointer-events-none rounded-2xl" />
            <div className="flex flex-col items-center gap-8 px-6 py-12 w-full">
              <div className="bg-[rgba(235,169,28,0.2)] rounded-full flex items-center justify-center w-[55px] h-[55px]">
                <UtensilsIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-4 items-center text-center w-full">
                <h4 className="text-h4 text-white font-bold">Modelling</h4>
                <p className="text-p-ui text-brand-text-secondary">Model language at every opportunity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 