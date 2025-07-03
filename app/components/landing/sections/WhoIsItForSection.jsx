import React from "react";
import Card4 from "../cards/Card4";
import UsersIcon from "../svgs/UsersIcon";
import EducatorsIcon from "../svgs/EducatorsIcon";
import UserCheckIcon from "../svgs/UserCheckIcon";

export default function WhoIsItForSection() {
  return (
    <section className="relative w-full flex flex-col items-center px-4 md:px-8 bg-brand-bg-alt-secondary">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center w-full max-w-[1080px] mx-auto py-16">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <h2 className="text-h2-mobile md:text-h2 text-brand-text font-extrabold tracking-tight">Who is it for?</h2>
          <p className="text-large text-brand-text-secondary max-w-2xl">Mo Speech is designed for anyone involved in AAC communication.</p>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1080px] mx-auto items-center justify-center mt-12">
          <Card4
            icon={<UsersIcon className="w-[50px] h-[50px]" />}
            title="Parents & Families"
            description="Support your child's communication development at home with easy-to-use tools."
          />
          <Card4
            icon={<EducatorsIcon className="w-[50px] h-[50px]" />}
            title="Educators & Therapists"
            description="Enhance your AAC sessions with quick access to symbols and consistent modelling."
          />
          <Card4
            icon={<UserCheckIcon className="w-[50px] h-[50px]" />}
            title="AAC Users"
            description="Practice and improve your communication skills with accessible, user-friendly tools."
          />
        </div>
      </div>
    </section>
  );
} 