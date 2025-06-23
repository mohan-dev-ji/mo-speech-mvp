import React, { useState } from 'react';
import Logo from '../Logo';
import { Button } from '../ui/button';

const HamburgerIcon = (props) => (
  <svg width="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0.25 25.5V21.3333H37.75V25.5H0.25ZM0.25 15.0833V10.9167H37.75V15.0833H0.25ZM0.25 4.66667V0.5H37.75V4.66667H0.25Z" fill="white"/>
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative w-full shadow-lg z-50">
      <div className="mx-auto flex h-24 max-w-[1080px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Button variant="default" size="nav">Features</Button>
          <Button variant="default" size="nav">User guide</Button>
          <Button variant="default" size="nav">Contact</Button>
          <Button variant="secondary-alt" size="nav">Sign In</Button>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-background shadow-lg flex flex-col items-center gap-4 py-6 animate-fade-in z-50">
          <Button variant="default" size="nav" className="w-11/12">Features</Button>
          <Button variant="default" size="nav" className="w-11/12">User guide</Button>
          <Button variant="default" size="nav" className="w-11/12">Contact</Button>
          <Button variant="secondary-alt" size="nav" className="w-11/12">Sign In</Button>
        </div>
      )}
    </div>
  );
} 