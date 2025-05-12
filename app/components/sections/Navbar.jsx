"use client";

import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../Logo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-slate-50">
      <div className="max-w-[1440px] mx-auto flex h-16 items-center space-x-4 px-8 py-4 justify-between sm:space-x-0">
        <div className="flex gap-2 items-center text-xl font-bold text-primary">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
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
            <Button variant="outline" asChild>
              <Link 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </Button>
            <SignInButton mode="modal" afterSignInUrl="/">
              <Button variant="default">
                Sign In
              </Button>
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
            <Button variant="outline" asChild>
              <Link 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </Button>
            <SignInButton mode="modal" afterSignInUrl="/">
              <Button variant="default" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Sign In
              </Button>
            </SignInButton>
          </nav>
        </div>
      )}
    </header>
  );
} 