"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PortalAccess({ onEnsurePrivacy }) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("john.delacruz@usep.edu.ph");
  const [password, setPassword] = useState("password123");
  const [fullName, setFullName] = useState("Dr. Juan Dela Cruz");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getTargetDashboard = (emailInput) => {
    const clean = (emailInput || "").toLowerCase();
    if (clean.includes("tbiu.director") || clean.includes("tbiudirector")) {
      return "/dashboard/tbiudirector";
    }
    if (clean.includes("director")) {
      return "/dashboard/director";
    }
    if (clean.includes("tbiu")) {
      return "/dashboard/tbiustaff";
    }
    if (clean.includes("admin")) {
      return "/dashboard/adminstaff";
    }
    if (clean.includes("partner") || clean.includes("external")) {
      return "/dashboard/external";
    }
    return "/dashboard/internal";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (onEnsurePrivacy && !onEnsurePrivacy()) {
      return;
    }
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    setIsLoading(false);
    router.push(getTargetDashboard(email));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (onEnsurePrivacy && !onEnsurePrivacy()) {
      return;
    }
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    setIsLoading(false);
    router.push(getTargetDashboard(email));
  };

  return (
    <section id="portal" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Portal Access
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Select your portal gateway to manage disclosures, intellectual property filings, and innovation metrics.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-md mx-auto">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-100 rounded-full border border-gray-200">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`px-7 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "login"
                    ? "bg-maroon text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`px-7 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "register"
                    ? "bg-maroon text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Register
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-lg shadow-gray-100">
            {activeTab === "login" ? (
              /* Login Form */
              <form onSubmit={handleLogin} className="space-y-4 animate-fade-in-up">
                {/* Email / ID */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Email or Institutional ID
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john.delacruz@usep.edu.ph"
                    required
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-gold transition-colors shadow-xs"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-[11px] text-maroon hover:text-maroon-dark font-semibold transition-colors"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-gold transition-colors shadow-xs"
                  />
                </div>

                {/* Submit Button (Gold) */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 bg-gold hover:bg-gold-dark text-maroon-dark font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md hover:shadow-gold/20 transition-all cursor-pointer active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isLoading ? "Authenticating..." : "Login"}
                </button>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={handleRegister} className="space-y-4 animate-fade-in-up">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Juan Dela Cruz"
                    required
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-gold transition-colors shadow-xs"
                  />
                </div>

                {/* Email / ID */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Email or Institutional ID
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@usep.edu.ph"
                    required
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-gold transition-colors shadow-xs"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-gold transition-colors shadow-xs"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 bg-gold hover:bg-gold-dark text-maroon-dark font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md hover:shadow-gold/20 transition-all cursor-pointer active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isLoading ? "Processing..." : "Create Account"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
