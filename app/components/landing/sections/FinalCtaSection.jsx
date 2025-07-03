"use client";

import React from "react";
import { useAuth, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "../../shared/ui/button";

export default function FinalCtaSection() {
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
    console.log("Opening sign in from final CTA");
    openSignIn({
      redirectUrl: "/app"
    });
  };

  return (
    <section className="relative w-full flex flex-col items-center px-4 md:px-8">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center w-full max-w-[1080px] mx-auto py-16">
        <div className="w-full max-w-[1080px] bg-brand-bg-alt-secondary border-2 border-brand-line rounded-2xl py-16 px-4 relative">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-h2-mobile md:text-h2 text-brand-text font-extrabold tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-large text-brand-text-secondary max-w-2xl">
                Join thousands of families and professionals using Mo Speech to improve AAC communication.
              </p>
            </div>
            
            {isSignedIn ? (
              <Button 
                size="xl" 
                className="bg-brand-primary text-white hover:bg-brand-primary/90"
                onClick={handleAction}
              >
                Use Mo Speech Now
              </Button>
            ) : (
              <Button 
                size="xl" 
                className="bg-brand-primary text-white hover:bg-brand-primary/90"
                onClick={handleSignIn}
              >
                Get Started Free
              </Button>
            )}
            
            <p className="text-p text-brand-text-secondary">
              No credit card required • Completely free to use
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 