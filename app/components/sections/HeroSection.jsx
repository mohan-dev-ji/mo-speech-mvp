import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { H1 } from "../ui/typography";
import { SignInButton } from "@clerk/nextjs";

function HeroSection() {
  return (
    <section className="w-full mt-12 md:mt-24 lg:mt-32 xl:mt-48">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4 w-full">
              <H1 className="mx-auto max-w-[800px]">
                Helping Every Child Find Their Voice
              </H1>
              <p className="text-muted-foreground md:text-xl mx-auto max-w-[600px]">
                A free tool to make AAC modelling faster, easier, and more effective for parents and caregivers.
              </p>
            </div>
            <div className="flex gap-2 min-[400px]:flex-row">
            <SignInButton mode="modal" afterSignInUrl="/">
                <button className="bg-slate-900 hover:bg-slate-500 text-slate-50 py-2 px-4 rounded">
                  Start Modelling for Free
                </button>
              </SignInButton>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto mt-12">
        <Image
          src="/landing-page/aac-hero.png"
          width={1440}
          height={500}
          alt="A parent and child using AAC communication"
          className="rounded-lg object-cover w-full"
          priority
        />
      </div>
    </section>
  );
}

export default HeroSection;