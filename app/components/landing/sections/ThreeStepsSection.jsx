import Card5 from "../cards/Card5";
import ObserveIcon from "../svgs/ObserveIcon";
import SpeakIcon from "../svgs/SpeakIcon";
import ModelIcon from "../svgs/ModelIcon";

export default function ThreeStepsSection() {
  return (
    <section className="relative w-full flex flex-col items-center px-8 overflow-hidden">
      <div className="w-full h-px bg-brand-line" />
      <div className="flex flex-col items-center w-full max-w-[1080px] mx-auto py-16">
        <div className="text-h3 text-brand-text text-center mb-8">
          3 Simple Steps to Effective AAC Modelling
        </div>
        <div className="flex flex-col gap-8 w-full items-center justify-center flex-wrap">
          <Card5
            icon={<ObserveIcon style={{ width: 50, height: 50 }} />}
            iconBg="bg-brand-icon-bg-green"
            title="Observe"
            description="What your child is doing or interested in"
          />
          <Card5
            icon={<SpeakIcon style={{ width: 50, height: 50 }} />}
            iconBg="bg-brand-icon-bg-yellow"
            title="Speak"
            description="Speak naturally and show matching symbol"
          />
          <Card5
            icon={<ModelIcon style={{ width: 50, height: 50 }} />}
            iconBg="bg-brand-icon-bg-blue"
            title="Model"
            description="Focus on key words and not full sentences"
          />
        </div>
      </div>

    </section>
  );
} 