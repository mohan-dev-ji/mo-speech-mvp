import KeyboardIcon from "../svgs/KeyboardIcon";
import Card3 from "../cards/Card3";
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

export default function FeatureTextSection() {
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
    <section className="relative w-full flex flex-col items-center px-4 md:px-8">
      <div className="w-full h-px bg-brand-line" />
      {/* Animated background ellipses */}
      <div className="absolute right-0 top-[-100px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] z-0 animate-ellipse-x blur-3xl opacity-40 pointer-events-none overflow-x-hidden" style={{background: "radial-gradient(circle at 50% 50%, #0074cd33 100%, transparent 80%)"}} />
      <div className="absolute right-[5%] md:right-[10%] bottom-[-120px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] z-0 animate-ellipse-y blur-3xl opacity-30 pointer-events-none overflow-x-hidden" style={{background: "radial-gradient(circle at 50% 50%, #0074cd33 100%, transparent 80%)"}} />
      <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-5xl py-16 gap-x-8">
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
        {/* Card3 */}
        <Card3
          icon={<div className="bg-brand-icon-bg-blue rounded-full flex items-center justify-center w-[80px] h-[80px]"><KeyboardIcon width={50} height={50} color="#0074cd" /></div>}
          title="Text Input"
          description="Type words to find PECs instantly without scrolling through pages."
        />
      </div>
      <style jsx>{`
        @keyframes ellipse-x {
          0%, 100% { transform: translateX(0) translateY(0); opacity: 0; }
          50% { transform: translateX(200px) translateY(40px); opacity: 0.8; }
        }
        @keyframes ellipse-y {
          0%, 100% { transform: translateX(-20px) translateY(0); opacity: 0; }
          50% { transform: translateX(-40px) translateY(-50px); opacity: 0.8; }
        }
        .animate-ellipse-x { animation: ellipse-x 12s ease-in-out infinite alternate; }
        .animate-ellipse-y { animation: ellipse-y 14s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
} 