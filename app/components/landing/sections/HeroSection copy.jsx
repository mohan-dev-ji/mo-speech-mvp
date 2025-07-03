"use client";

import { useAuth, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "../../shared/ui/button";
import UserCheckIcon from "../svgs/UserCheckIcon";
import PointerIcon from "../svgs/PointerIcon";
import EarIcon from "../svgs/EarIcon";

const imgChromeImg = "/images/chrome-img.png";

export default function HeroSection() {
  const { isSignedIn } = useAuth();
  const { openSignIn } = useClerk();
  const router = useRouter();

  const handleAction = () => {
    if (isSignedIn) {
      router.push("/app");
    }
  };

  const handleSignIn = () => {
    openSignIn({ redirectUrl: "/app" });
  };

  return (
    <section className="w-full flex flex-col items-center px-4 md:px-8 py-section-y relative border-b-line-width border-brand-line">
      <div className="flex flex-col items-center gap-12 w-full max-w-[container-width] mx-auto">
        {/* Headline */}
        <div className="flex flex-col gap-between-heading items-center text-center">
          <h1 className="text-h1-mobile md:text-h1 font-manrope font-semibold text-brand-primary w-full max-w-[1324px]">
            <span className="text-brand-text">Helping Everyone</span>
            <br />
            <span className="bg-gradient-to-r from-[#e9e9e9] from-[9.2%] to-brand-primary to-[70.3%] bg-clip-text text-transparent block">Find Their Voice</span>
          </h1>
          <p className="text-p md:text-lead text-brand-text-secondary max-w-[748px]">
            A free tool to make AAC modelling faster and easier
          </p>
        </div>



        
        {/* Icons Row */}
        <div className="flex flex-col md:flex-row gap-between-icon items-center justify-center">
          {/* User Check Icon */}
          <div className="bg-brand-card flex items-center justify-center p-card-x rounded-2xl relative size-[161px]">
            <div className="absolute inset-0 border-2 border-brand-line rounded-2xl pointer-events-none" />
            <UserCheckIcon className="w-[100px] h-[100px]" />
          </div>
          {/* Pointer Icon */}
          <div className="bg-brand-card flex items-center justify-center p-card-x rounded-2xl relative size-[161px]">
            <div className="absolute inset-0 border-2 border-brand-line rounded-2xl pointer-events-none" />
            <PointerIcon className="w-[104px] h-[104px]" />
          </div>
          {/* Ear Icon */}
          <div className="bg-brand-card flex items-center justify-center p-card-x rounded-2xl relative size-[161px]">
            <div className="absolute inset-0 border-2 border-brand-line rounded-2xl pointer-events-none" />
            <EarIcon className="w-[100px] h-[100px]" />
          </div>
        </div>
        {/* Large Button */}
        <div className="flex flex-row gap-2.5 items-center justify-center px-5 py-2.5 relative">
          <div className="absolute inset-0 pointer-events-none" />
          {isSignedIn ? (
            <Button 
              size="nav" 
              variant="secondary"
              onClick={handleAction}
            >
              Go to Mo Speech
            </Button>
          ) : (
            <Button 
              size="nav" 
              variant="secondary"
              onClick={handleSignIn}
            >
              Start free account
            </Button>
          )}
        </div>
        {/* Free Section */}
        <div className="bg-brand-card flex flex-col gap-9 items-center justify-start p-card-x rounded-2xl relative w-full md:max-w-[361px] mx-auto">
          <div className="absolute inset-0 border-line-width border-brand-line rounded-2xl pointer-events-none" />
          <div className="bg-center bg-cover bg-no-repeat size-[50px]" style={{ backgroundImage: `url('${imgChromeImg}')` }} />
          <div className="flex flex-col gap-between-heading items-center text-center w-full">
            <h3 className="text-h4 text-brand-primary">Completely Free</h3>
            <p className="text-p text-brand-text-secondary w-full md:max-w-[504px]">
              No fees, just visit in your Chrome browser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 