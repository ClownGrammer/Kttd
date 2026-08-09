"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function PortalAccess() {
  const [activeTab, setActiveTab] = useState("login");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/dashboard/internal");
  };

  return (
    <section id="portal" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-dark">
            Portal Access
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Enter your portal gateway to manage documents, intellectual property filings, and
            access resources within the system.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-md mx-auto">
          {/* Tabs */}
          <div className="flex border-b-2 border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 pb-3 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${activeTab === "login"
                ? "text-maroon-dark tab-active"
                : "text-gray-400 hover:text-gray-600"
                }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 pb-3 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${activeTab === "register"
                ? "text-maroon-dark tab-active"
                : "text-gray-400 hover:text-gray-600"
                }`}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <form
              className="space-y-5 animate-fade-in-up"
              onSubmit={handleLogin}
            >
              {/* Email / Institutional ID */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Email or Institutional ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. john@usep.edu.ph"
                  className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:border-gold transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:border-gold transition-colors"
                />
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-xs text-maroon hover:text-maroon-dark font-medium transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-maroon hover:bg-maroon-dark text-white font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-maroon/20 cursor-pointer active:scale-[0.98]"
              >
                Login
              </button>
            </form>
          )}

          {/* Register Form */}
          {activeTab === "register" && (
            <form
              className="space-y-5 animate-fade-in-up"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Juan Dela Cruz"
                  className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:border-gold transition-colors"
                />
              </div>

              {/* Email / Institutional ID */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Email or Institutional ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. john@usep.edu.ph"
                  className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:border-gold transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-maroon-dark font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 cursor-pointer active:scale-[0.98]"
              >
                Create Account
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
