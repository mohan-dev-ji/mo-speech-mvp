import { Keyboard, Maximize2, Mic, Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { H2 } from "../ui/typography";
import Image from "next/image";
import FeatureCard from "../FeatureCard";

function FeaturesSection() {
  const features = [
    {
      videoSrc: "/video/voice rec.mp4",
      title: "Voice Recognition",
      description: "Find PECs instantly by speaking into your device."
    },
    {
      videoSrc: "/video/type.mp4",
      title: "Dynamic Typing",
      description: "Type a few letters and PECs appear dynamically in real time."
    },
    {
      videoSrc: "/video/full screen.mp4",
      title: "Full-Screen Display",
      description: "Press a PEC to enlarge it full-screen, minimizing distractions and improving visual focus."
    },
    {
      videoSrc: "/video/Corewords.mp4",
      title: "Core Word Set",
      description: "Start with 64 carefully selected PECs that cover essential everyday communication."
    }
  ];

  return (
    <section id="features" className="w-full py-[64px] bg-slate-100">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
        <div className="mb-12 text-center">
          <H2 className="text-3xl font-bold mb-2">Key Features</H2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tools designed to make AAC modelling simple and effective
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              videoSrc={feature.videoSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;