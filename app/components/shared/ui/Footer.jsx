import Logo from "../Logo";
import Link from "next/link";
import IconFacebook from "../../landing/svgs/IconFacebook";
import IconInstagram from "../../landing/svgs/IconInstagram";
import IconLinkedIn from "../../landing/svgs/IconLinkedIn";
import IconTikTok from "../../landing/svgs/IconTikTok";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/#features" },
  { name: "Guide", href: "/guide" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-brand-background border-t border-brand-line pt-10 pb-6 px-4 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* 3-column layout */}
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-0">
          {/* Logo - left, start */}
          <div className="flex-1 flex justify-center md:justify-start items-center mb-4 md:mb-0">
            <Logo className="h-8 w-auto" />
          </div>
          {/* Navigation links - center */}
          <nav className="flex-1 flex justify-center items-center">
            <div className="flex flex-row gap-8 text-small text-brand-text-secondary">
              {navLinks.map(link => (
                <Link key={link.name} href={link.href} className="hover:text-brand-text transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
          {/* Social icons - right, end */}
          <div className="flex-1 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <div className="flex flex-row gap-3 items-center">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brand-text transition-colors"><IconFacebook className="w-6 h-6" /></a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand-text transition-colors"><IconInstagram className="w-6 h-6" /></a>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-brand-text transition-colors"><IconTikTok className="w-6 h-6" /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-text transition-colors"><IconLinkedIn className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-px bg-brand-line" />
        {/* Copyright */}
        <div className="flex flex-row gap-6 items-center justify-center text-p-ui text-brand-text-secondary">
          <span>&copy; {new Date().getFullYear()} Mo Speech. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
