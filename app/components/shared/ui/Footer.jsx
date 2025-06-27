import Logo from "../Logo";
import Link from "next/link";
import IconFacebook from "../../landing/svgs/IconFacebook";
import IconInstagram from "../../landing/svgs/IconInstagram";
import IconLinkedIn from "../../landing/svgs/IconLinkedIn";
import IconTikTok from "../../landing/svgs/IconTikTok";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/#features" },
  { name: "User Guide", href: "/guide" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-brand-background border-t border-brand-line pt-10 pb-6 px-4 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Logo */}
          <div className="flex flex-row items-center gap-2 max-w-full">
            <Logo className="h-8 w-auto" />
          </div>
          {/* Navigation links - centered */}
          <nav className="flex flex-row gap-8 text-small text-brand-text-secondary justify-center">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="hover:text-brand-text transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Social icons - centered */}
          <div className="flex flex-row gap-3 items-center justify-center">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brand-text transition-colors"><IconFacebook className="w-6 h-6" /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand-text transition-colors"><IconInstagram className="w-6 h-6" /></a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-brand-text transition-colors"><IconTikTok className="w-6 h-6" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-text transition-colors"><IconLinkedIn className="w-6 h-6" /></a>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-px bg-brand-line" />
        {/* Copyright */}
        <div className="flex flex-row gap-6 items-center justify-center text-small text-brand-text-secondary">
          <span>&copy; {new Date().getFullYear()} Mo Speech. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
