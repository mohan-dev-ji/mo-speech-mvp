import MicrophoneIcon from "../svgs/MicrophoneIcon";
import Card3 from "../cards/Card3";
import Lottie from "lottie-react";
import VoiceFeature from "../lottie/VoiceFeature_SM.json";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";


// const lottieGif = "/path/to/your/voice-lottie.gif"; // Replace with actual gif path

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export default function FeatureVoiceSection() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);
  const lottieRef = useRef();
  const shouldPlay = isMobile ? inView : hovered;

  useEffect(() => {
    if (lottieRef.current) {
      if (shouldPlay) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [shouldPlay]);

  return (
    <section id="features" className="relative w-full flex flex-col items-center px-8 scroll-mt-24">
        <div className="w-full h-px bg-brand-line" />
      {/* Animated background ellipses */}
      <div className="absolute left-0 top-[-100px] w-[500px] h-[500px] z-0 animate-ellipse-x blur-3xl opacity-40 pointer-events-none" style={{background: "radial-gradient(circle at 50% 50%, #eba91c33 100%, transparent 80%)"}} />
      <div className="absolute left-[10%] bottom-[-120px] w-[400px] h-[400px] z-0 animate-ellipse-y blur-3xl opacity-30 pointer-events-none" style={{background: "radial-gradient(circle at 50% 50%, #eba91c33 100%, transparent 80%)"}} />
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-5xl py-16 gap-x-8">
        {/* Lottie placeholder */}
        <div
          className="flex justify-center items-center"
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={VoiceFeature}
            style={{ width: "70%", height: "70%" }}
            autoPlay={false}
          />
        </div>
        {/* Card3 */}
        <Card3
          icon={<div className="bg-brand-icon-bg-yellow rounded-full flex items-center justify-center w-[80px] h-[80px]"><MicrophoneIcon width={50} height={50} color="#eba91c" /></div>}
          title="Voice Recognition"
          description="Find PECs instantly by speaking into your device."
        />
      </div>
      <style jsx>{`
        @keyframes ellipse-x {
          0%, 100% { transform: translateX(0) translateY(0); opacity: 0; }
          50% { transform: translateX(-400px) translateY(40px); opacity: 0.8; }
        }
        @keyframes ellipse-y {
          0%, 100% { transform: translateX(20) translateY(0); opacity: 0; }
          50% { transform: translateX(60px) translateY(-70px); opacity: 0.8; }
        }
        .animate-ellipse-x { animation: ellipse-x 12s ease-in-out infinite alternate; }
        .animate-ellipse-y { animation: ellipse-y 14s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
} 