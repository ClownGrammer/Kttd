"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ onPrivacyOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Guidelines", href: "#guidelines" },
    { name: "Help", href: "#help" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-maroon-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-maroon-dark"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-gold font-bold text-xl tracking-wider group-hover:text-gold-light transition-colors">
              KTTD
            </span>
          </Link>

          {/* Center: Centralized Navigation Links */}
          <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/85 hover:text-gold text-xs font-semibold tracking-wide transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Data Privacy Policy Trigger */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onPrivacyOpen}
              className="text-xs font-semibold text-gold/90 hover:text-gold transition-colors flex items-center gap-1.5 border border-gold/40 hover:border-gold px-3.5 py-1.5 rounded-full bg-white/5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Privacy Policy</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/10 animate-slide-down space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/85 hover:text-gold px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                if (onPrivacyOpen) onPrivacyOpen();
              }}
              className="w-full text-left text-xs font-semibold text-gold px-3 py-2 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              View Data Privacy Policy
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
