"use client";

import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { Grid2X2, Heart, Home, Keyboard, Maximize2, Menu, Mic, School, Users, X } from "lucide-react";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

export default function LandingPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen flex-col max-w-6xl mx-auto w-full">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 px-4 justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold text-primary">
            {/* <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="Mo Speech logo"
              className="rounded-md"
            /> */}
            <span>Mo Speech</span>
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
            <nav className="flex items-center space-x-4">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                How It Works
              </Link>
              <SignInButton mode="modal" afterSignInUrl="/">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
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
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
                  Sign In
                </button>
              </SignInButton>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Helping Every Child Find Their Voice
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A free tool to make AAC modelling faster, easier, and more effective for parents and caregivers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#cta">Start Modelling for Free</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/landing-page/aac-hero.png"
                  width={500}
                  height={500}
                  alt="A parent and child using AAC communication"
                  className="rounded-lg object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

         {/* About Mo Speech */}
         <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Mo Speech</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mo Speech is designed to bridge the gap between everyday life and AAC training. By enabling fast, easy
                  access to core PECs, it empowers parents and caregivers to model language at every opportunity —
                  without wasting precious moments searching for the right symbol.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Instant Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Search PECs instantly with voice or typing.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Full-Screen Display</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Show PECs full-screen for easier focus.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Prepare for Success</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Prepare children for successful AAC communication.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tools designed to make AAC modelling simple and effective
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Mic className="h-8 w-8 text-primary" />
                    <div className="grid gap-1">
                      <CardTitle>Voice Recognition</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Find PECs instantly by speaking into your device — single words or short phrases.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Keyboard className="h-8 w-8 text-primary" />
                    <div className="grid gap-1">
                      <CardTitle>Dynamic Typing</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Type a few letters and PECs appear dynamically in real time.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Maximize2 className="h-8 w-8 text-primary" />
                    <div className="grid gap-1">
                      <CardTitle>Full-Screen Display</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Press a PEC to enlarge it full-screen, minimizing distractions and improving visual focus.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Grid2X2 className="h-8 w-8 text-primary" />
                    <div className="grid gap-1">
                      <CardTitle>Core Word Set</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Start with 64 carefully selected PECs covering essential everyday communication.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Heart className="h-8 w-8 text-primary" />
                    <div className="grid gap-1">
                      <CardTitle>Completely Free</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      No fees, no sign-up required initially — just help us build something better through your
                      feedback.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

         {/* Who It's For */}
         <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who It's For</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mo Speech is designed for everyone involved in supporting non-speaking children
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
                <Card className="text-center">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center">
                      <Home className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="mt-4">Parents & Caregivers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Of non-speaking or minimally verbal children</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="mt-4">Therapists</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Working with AAC users in clinical settings</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center">
                      <School className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="mt-4">Educators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Teachers and assistants supporting communication in schools
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

         {/* How It Works */}
         <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Three simple steps to effective AAC modelling
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-xl font-bold">Open Mo Speech</h3>
                    <p className="text-sm text-muted-foreground">Access Mo Speech on any device with a web browser</p>
                  </div>
                  <div className="absolute right-0 top-6 hidden h-0.5 w-full bg-primary md:block md:right-[-50%] md:w-[100%]"></div>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-xl font-bold">Search for a PEC</h3>
                    <p className="text-sm text-muted-foreground">
                      Use voice or typing to quickly find the right symbol
                    </p>
                  </div>
                  <div className="absolute right-0 top-6 hidden h-0.5 w-full bg-primary md:block md:right-[-50%] md:w-[100%]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-xl font-bold">Model Communication</h3>
                    <p className="text-sm text-muted-foreground">Show the PEC while speaking to boost learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Future Vision */}
         <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Future Vision</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Mo Speech is just getting started. We're gathering feedback from real users to build the most
                    intuitive AAC modelling support tool ever made. Your input will shape future features, expanded
                    vocabularies, and exciting innovations to help every child connect with the world.
                  </p>
                </div>
                <div>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#feedback">Want to Help Shape Mo Speech?</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Future vision illustration"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

         {/* Call to Action */}
         <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start?</h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us in empowering non-speaking children with effective communication tools
                </p>
              </div>
              <div className="sm:flex space-y-4 gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#start">Start Modelling for Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#feedback">Give Feedback & Help Us Grow</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span>Mo Speech</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Empowering Communication, One Word at a Time.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 