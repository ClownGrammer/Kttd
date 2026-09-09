"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PortalAccess from "../components/PortalAccess";
import DataPrivacyModal from "../components/DataPrivacyModal";

export default function HomePage() {
  const [hasAgreedPrivacy, setHasAgreedPrivacy] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(true);

  useEffect(() => {
    try {
      const agreed = sessionStorage.getItem("kttd_privacy_agreed");
      if (agreed === "true") {
        setHasAgreedPrivacy(true);
        setShowPrivacyModal(false);
      }
    } catch {
      // fallback
    }
  }, []);

  const handleAgreePrivacy = () => {
    setHasAgreedPrivacy(true);
    setShowPrivacyModal(false);
    try {
      sessionStorage.setItem("kttd_privacy_agreed", "true");
    } catch {
      // fallback
    }
  };

  const handleEnsurePrivacy = () => {
    if (!hasAgreedPrivacy) {
      setShowPrivacyModal(true);
      return false;
    }
    return true;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Top Navbar */}
      <Navbar onPrivacyOpen={() => setShowPrivacyModal(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Portal Access */}
        <PortalAccess onEnsurePrivacy={handleEnsurePrivacy} />

        {/* Bottom Metrics / Stats Bar */}
        <section className="bg-maroon-dark text-white py-12 border-t-2 border-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">250+</p>
                <p className="text-xs font-bold text-gold uppercase tracking-widest mt-1.5">
                  Disclosures Filed
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">45+</p>
                <p className="text-xs font-bold text-gold uppercase tracking-widest mt-1.5">
                  Active Patents
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">12</p>
                <p className="text-xs font-bold text-gold uppercase tracking-widest mt-1.5">
                  Licensed Techs
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <footer className="bg-maroon-deeper text-white text-xs py-6 px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center border-t border-white/10 gap-3">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="font-bold text-gold text-sm tracking-wide">einvfile</span>
          <span className="text-gray-400">| University of Southeastern Philippines &middot; KTTD</span>
        </div>
        <div className="flex items-center space-x-6 text-gray-300 text-[11px]">
          <button
            onClick={() => setShowPrivacyModal(true)}
            className="hover:text-gold transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <a href="#about" className="hover:text-gold transition-colors">
            Terms of Service
          </a>
          <a href="#help" className="hover:text-gold transition-colors">
            Help &amp; Support
          </a>
        </div>
      </footer>

      {/* Upfront Data Privacy Policy Modal Gate */}
      <DataPrivacyModal
        isOpen={showPrivacyModal}
        onClose={hasAgreedPrivacy ? () => setShowPrivacyModal(false) : null}
        onAgree={handleAgreePrivacy}
      />
    </div>
  );
}
