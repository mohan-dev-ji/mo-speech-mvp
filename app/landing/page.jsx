"use client";

import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { Grid2X2, Heart, Home, Keyboard, Maximize2, Menu, Mic, School, Users, X } from "lucide-react";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import Logo from "../components/Logo";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import ChromeSection from "../components/sections/ChromeSection";
import WhosItForSection from "../components/sections/WhosItForSection";
import HowItWorks from "../components/sections/HowItWorks";
import WithoutExpectation from "../components/sections/WithoutExpectation";
import WhenAndWhereSection from "../components/sections/WhenAndWhereSection";
import FutureVisionSection from "../components/sections/FutureVisionSection";
import ContactSection from "../components/sections/ContactSection";
import FinalCta from "../components/sections/FinalCta";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col max-w-[1440px] mx-auto w-full">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        <ChromeSection />
        <AboutSection />
        <FeaturesSection />
        <WhosItForSection />
        <HowItWorks />
        <WithoutExpectation />
        <WhenAndWhereSection />
        <FutureVisionSection />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
} 