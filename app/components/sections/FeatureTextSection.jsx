import KeyboardIcon from "../svgs/KeyboardIcon";
import Card3 from "./Card3";
import Lottie from "lottie-react";
import TextFeature from "../lottie/TextFeature_SM.json";
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
    <section className="relative w-full flex flex-col items-center px-8 overflow-hidden">
      <div className="w-full h-px bg-brand-line" />
      {/* Animated background ellipses */}
      <div className="absolute left-1/4 top-[-100px] w-[500px] h-[500px] z-0 animate-ellipse-x blur-3xl opacity-40 pointer-events-none" style={{background: "radial-gradient(circle at 50% 50%, #00b5cd33 100%, transparent 80%)"}} />
      <div className="absolute right-1/4 bottom-[-120px] w-[400px] h-[400px] z-0 animate-ellipse-y blur-3xl opacity-30 pointer-events-none" style={{background: "radial-gradient(circle at 50% 50%, #00b5cd33 100%, transparent 80%)"}} />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl py-16">
        {/* Card3 */}
        <Card3
          icon={<div className="bg-brand-icon-bg-green rounded-full flex items-center justify-center w-[80px] h-[80px]"><KeyboardIcon width={50} height={50}/></div>}
          title="Dynamic Typing"
          description="Find PECs instantly by speaking into your device."
        />
        {/* Lottie placeholder */}
        <div
          className="flex justify-center items-center"
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={TextFeature}
            style={{ width: "70%", height: "70%" }}
            autoPlay={false}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes ellipse-x {
          0%, 100% { transform: translateX(0) translateY(0); opacity: 0; }
          50% { transform: translateX(400px) translateY(40px); opacity: 0.8; }
        }
        @keyframes ellipse-y {
          0%, 100% { transform: translateX(0) translateY(0); opacity: 0; }
          50% { transform: translateX(-40px) translateY(-60px); opacity: 0.8;}
        }
        .animate-ellipse-x { animation: ellipse-x 12s ease-in-out infinite alternate; }
        .animate-ellipse-y { animation: ellipse-y 14s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
} 