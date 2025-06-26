import Card4 from "./Card4";
import HomeIcon from "../svgs/HomeIcon";
import UsersIcon from "../svgs/UsersIcon";
import EducatorsIcon from "../svgs/EducatorsIcon";

export default function WhoIsItForSection() {
  return (
    <section className="relative w-full flex flex-col items-center px-8 overflow-hidden bg-brand-bg-alt-secondary">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center w-full max-w-[1080px] mx-auto py-16">
        <div className="text-h3 text-brand-tertiary text-center mb-2">
          Who is it for?
        </div>
        <div className="text-large text-brand-text-secondary text-center mb-9">
          Mo Speech is designed for anyone supporting a non speaking person
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          <Card4
            icon={<div className="bg-brand-icon-bg-blue rounded-full flex items-center justify-center w-[55px] h-[55px]"><HomeIcon width={32} height={32} /></div>}
            title="Parents & Caregivers"
            description="Bringing up non-speaking people"
          />
          <Card4
            icon={<div className="bg-brand-icon-bg-green rounded-full flex items-center justify-center w-[55px] h-[55px]"><UsersIcon width={32} height={32} /></div>}
            title="Therapists"
            description="Working with AAC users in clinical settings"
          />
          <Card4
            icon={<div className="bg-brand-icon-bg-yellow rounded-full flex items-center justify-center w-[55px] h-[55px]"><EducatorsIcon width={32} height={32} /></div>}
            title="Educators"
            description="Teachers and assistants in schools"
          />
        </div>
      </div>
    </section>
  );
} 