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
    // If not signed in, the handleSignIn will handle the sign in flow
  };

  const handleSignIn = () => {
    console.log("Opening sign in from hero");
    openSignIn({
      redirectUrl: "/app"
    });
  };

  return (
    <section className="w-full flex flex-col items-center px-4 md:px-8 overflow-hidden">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center gap-12 w-full max-w-[1080px] py-16">
        {/* Headline */}
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-h1-mobile md:text-h1">
            <span className="text-brand-text"> Helping Everyone</span>
            <br />
            <span className="bg-gradient-to-r from-[#e9e9e9] to-[#0068b8] bg-clip-text text-transparent">Find Their Voice</span>
          </h1>
          <p className="text-lead text-brand-text-secondary max-w-[748px]">
            A free tool to make AAC modelling faster and easier
          </p>
        </div>
        {/* Icons Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start justify-center">
          {/* User Check Icon */}
          <div className="bg-[rgba(0,181,205,0.04)] rounded-2xl flex items-center justify-center size-[161px] relative">
            <div className="absolute inset-0 border-[12px] border-[rgba(0,116,205,0.04)] rounded-2xl pointer-events-none" />
            <UserCheckIcon className="w-[100px] h-[100px]" />
          </div>
          {/* Pointer Icon */}
          <div className="bg-[rgba(0,181,205,0.04)] rounded-2xl flex items-center justify-center size-[161px] relative">
            <div className="absolute inset-0 border-[12px] border-[rgba(0,116,205,0.04)] rounded-2xl pointer-events-none" />
            <PointerIcon className="w-[104px] h-[104px]" />
          </div>
          {/* Ear Icon */}
          <div className="bg-[rgba(0,181,205,0.04)] rounded-2xl flex items-center justify-center size-[161px] relative">
            <div className="absolute inset-0 border-[12px] border-[rgba(0,116,205,0.04)] rounded-2xl pointer-events-none" />
            <EarIcon className="w-[100px] h-[100px]" />
          </div>
        </div>
        {/* Large Button */}
        {isSignedIn ? (
          <Button 
            size="xl" 
            className="bg-[rgba(0,181,205,0.04)] border-2 border-[#0074cd] text-brand-text hover:text-white"
            onClick={handleAction}
          >
            Use Mo Speech
          </Button>
        ) : (
          <Button 
            size="xl" 
            className="bg-[rgba(0,181,205,0.04)] border-2 border-[#0074cd] text-brand-text hover:text-white"
            onClick={handleSignIn}
          >
            Get Started
          </Button>
        )}
        {/* Free Section */}
        <div className="flex flex-col gap-2 items-center w-full">
          <div className="bg-center bg-cover bg-no-repeat size-[50px]" style={{ backgroundImage: `url('${imgChromeImg}')` }} />
          <h3 className="text-h3 font-bold text-brand-secondary">Completely Free</h3>
          <p className="text-large font-semibold text-[rgba(224,224,224,0.8)] max-w-[504px]">No fees, just visit in your Chrome browser.</p>
        </div>
      </div>
    </section>
  );
} 