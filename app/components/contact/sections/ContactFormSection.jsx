import React from "react";
import { Input } from "../../shared/ui/shad-input";
import { Textarea } from "../../shared/ui/textarea";
import { Button } from "../../shared/ui/button";

export default function ContactFormSection() {
  return (
    <section className="w-full flex flex-col items-center py-[60px] border-b border-brand-line">
      <div className="w-full max-w-[530px] flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-2 text-center w-full">
          <h2 className="text-[48px] font-extrabold text-brand-text tracking-[-0.36px] leading-[50px]">
            We Value Your Feedback
          </h2>
          <p className="text-[18px] font-semibold text-brand-text-secondary leading-[28px] max-w-[596px]">
            Help us improve Mo Speech by sharing your experiences, suggestions, or by reporting any issues you&apos;ve encountered.
          </p>
        </div>
        <form className="w-full flex flex-col gap-6 items-center">
          <Input type="text" placeholder="Enter your name" className="bg-white text-black rounded-md border border-slate-300 px-3 py-2 w-full max-w-[1080px]" />
          <Input type="email" placeholder="Enter your email address" className="bg-white text-black rounded-md border border-slate-300 px-3 py-2 w-full max-w-[1080px]" />
          <Textarea placeholder="Type your message here" className="bg-white text-black rounded-md border border-slate-300 px-3 py-2 w-full max-w-[1080px] min-h-[120px]" />
          <Button type="submit" size="lg" variant="secondary-alt" className="w-full max-w-[530px] mt-4">
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
} 