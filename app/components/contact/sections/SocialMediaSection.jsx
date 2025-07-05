import React from "react";
import MetaIcon from "../svgs/MetaIcon";
import LinkedInIcon from "../svgs/LinkedInIcon";
import TikTokIcon from "../svgs/TikTokIcon";
import InstagramIcon from "../svgs/InstagramIcon";

const socialCards = [
  {
    name: "Meta",
    icon: <MetaIcon className="size-[50px]" />, // blue bg
    color: "text-brand-secondary",
    bg: "bg-brand-bg-alt-secondary",
    link: "https://facebook.com/",
  },
  {
    name: "linkedIn",
    icon: <LinkedInIcon className="size-[50px]" />, // yellow bg
    color: "text-brand-tertiary",
    bg: "bg-brand-icon-bg-yellow",
    link: "https://linkedin.com/",
  },
  {
    name: "Tik Tok",
    icon: <TikTokIcon className="size-[50px]" />, // blue bg
    color: "text-brand-primary",
    bg: "bg-brand-icon-bg-blue",
    link: "https://tiktok.com/",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon className="size-[50px]" />, // gray bg
    color: "text-brand-text-secondary",
    bg: "bg-gray-200/20",
    link: "https://instagram.com/",
  },
];

export default function SocialMediaSection() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-8 py-16 border-b border-brand-line/5">
      <div className="w-full max-w-[1080px] flex flex-col items-center gap-4">
        <h3 className="text-h3-mobile md:text-h3 font-bold text-brand-text text-center 
        mb-4">
          Connect with us on social media
        </h3>
        <div className="flex flex-row flex-wrap gap-12 justify-center w-full">
          {socialCards.map((card) => (
            <a
              key={card.name}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`grow min-w-[220px] max-w-[260px] bg-brand-bg-alt-secondary rounded-2xl border border-brand-line/5 flex flex-col items-center px-10 py-[60px] gap-1 hover:scale-105 transition-transform`}
            >
              <div className={`rounded-full ${card.bg} flex items-center justify-center size-[82px] mb-4`}>{card.icon}</div>
              <div className={`font-bold text-large ${card.color} text-center tracking-[-0.216px] leading-[49px]`}>{card.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 