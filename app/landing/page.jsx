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
export default function LandingPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen flex-col max-w-[1440px] mx-auto w-full">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-slate-50">
        <div className="max-w-[1440px] mx-auto flex h-16 items-center space-x-4 px-4 md:px-[112px] py-4 justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold text-primary">
            <Logo />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-6">
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                How It Works
              </Link>
              <Button variant="secondary" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
              <SignInButton mode="modal" afterSignInUrl="/">
                <button className="bg-slate-900 hover:bg-slate-500 text-slate-50 py-2 px-4 rounded">
                  Sign In
                </button>
              </SignInButton>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="flex flex-col space-y-4 p-4 bg-white">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <SignInButton mode="modal" afterSignInUrl="/">
                <button className="bg-slate-900 hover:bg-slate-500 text-slate-50 py-2 px-4 rounded w-full">
                  Sign In
                </button>
              </SignInButton>
            </nav>
          </div>
        )}
      </header>

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