"use client";

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
    console.log("Opening sign in from CTA");
    openSignIn({
      redirectUrl: "/app"
    });
  };

  return (
    <section className="relative w-full flex flex-col items-center px-8 overflow-hidden">
      <div className="absolute border border-brand-line border-solid inset-0 pointer-events-none rounded-none" />
      <div className="flex flex-col items-center w-full max-w-[1080px] mx-auto py-16">
        <div className="flex flex-col items-center w-full mx-auto bg-brand-bg-alt-secondary border-2 border-brand-line rounded-2xl py-16 px-4 relative">
          <div className="text-h3 text-brand-text text-center mb-2">Ready to Try Mo Speech?</div>
          <div className="text-lead text-brand-tertiary text-center mb-9 w-full max-w-[504px]">Use the app in Chrome on any device</div>
          <div className="flex justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
} 