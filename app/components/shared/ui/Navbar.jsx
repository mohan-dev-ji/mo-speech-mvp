"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth, useClerk, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Logo from '../Logo';
import { Button } from './button';

const HamburgerIcon = (props) => (
  <svg width="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0.25 25.5V21.3333H37.75V25.5H0.25ZM0.25 15.0833V10.9167H37.75V15.0833H0.25ZM0.25 4.66667V0.5H37.75V4.66667H0.25Z" fill="white"/>
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { openSignIn } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Wait a moment for Clerk to process the sign out
      await new Promise(resolve => setTimeout(resolve, 100));
      // Redirect to landing page
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
      router.push("/");
    }
  };

  const handleSignIn = () => {
    console.log("Opening sign in");
    openSignIn({
      redirectUrl: "/app"
    });
  };

  return (
    <div className="sticky top-0 relative w-full shadow-lg z-50 bg-brand-background/80 backdrop-blur-md border-b border-brand-line/20">
      <div className="mx-auto flex h-24 max-w-[1080px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#about">
            <Button variant="default" size="nav">About</Button>
          </Link>
          <Link href="/#features">
            <Button variant="default" size="nav">Features</Button>
          </Link>
          <Link href="/guide">
            <Button variant="default" size="nav">User Guide</Button>
          </Link>
          <Link href="/contact">
            <Button variant="default" size="nav">Contact</Button>
          </Link>
          {isSignedIn ? (
            <SignOutButton signOutCallback={handleSignOut}>
              <Button variant="secondary-alt" size="nav">
                Sign Out
              </Button>
            </SignOutButton>
          ) : (
            <Button variant="secondary-alt" size="nav" onClick={handleSignIn}>
              Sign In
            </Button>
          )}
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center px-4 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <HamburgerIcon className="w-8 h-8" />
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-background/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-4 py-6 animate-fade-in z-50 border-b border-brand-line/20">
          <Link href="/#about" className="w-11/12">
            <Button variant="default" size="nav" className="w-full">About</Button>
          </Link>
          <Link href="/#features" className="w-11/12">
            <Button variant="default" size="nav" className="w-full">Features</Button>
          </Link>
          <Link href="/guide" className="w-11/12">
            <Button variant="default" size="nav" className="w-full">User Guide</Button>
          </Link>
          <Link href="/contact" className="w-11/12">
            <Button variant="default" size="nav" className="w-full">Contact</Button>
          </Link>
          {isSignedIn ? (
            <SignOutButton signOutCallback={handleSignOut}>
              <Button variant="secondary-alt" size="nav" className="w-full">
                Sign Out
              </Button>
            </SignOutButton>
          ) : (
            <Button variant="secondary-alt" size="nav" className="w-full" onClick={handleSignIn}>
              Sign In
            </Button>
          )}
        </div>
      )}
    </div>
  );
} 