"use client";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ChromeSection from "./components/sections/ChromeSection";
import WhosItForSection from "./components/sections/WhosItForSection";
import HowItWorks from "./components/sections/HowItWorks";
import WithoutExpectation from "./components/sections/WithoutExpectation";
import WhenAndWhereSection from "./components/sections/WhenAndWhereSection";
import FutureVisionSection from "./components/sections/FutureVisionSection";
import ContactSection from "./components/sections/ContactSection";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";

export default function LandingPage() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-1xl md:text-5xl font-bold text-gray-800 mb-4">
        Mo Speech is getting an important update
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl">
        We're making changes to bring you a better, more compliant experience. Thanks for your patience while we get things ready.
      </p>
    </div>
    // <div className="flex min-h-screen flex-col max-w-[1440px] mx-auto w-full">
    //   <Navbar />

    //   <main className="flex-1">
    //     {/* Hero Section */}
    //     <HeroSection />
    //     <ChromeSection />
    //     <AboutSection />
    //     <FeaturesSection />
    //     <WhosItForSection />
    //     <HowItWorks />
    //     <WithoutExpectation />
    //     <WhenAndWhereSection />
    //     <FutureVisionSection />
    //     <ContactSection />
    //     <FinalCta />
    //   </main>
    //   <Footer />
    // </div>
  );
} 