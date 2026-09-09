"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function VerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      // Handle paste
      const digits = value.replace(/\D/g, "").slice(0, 6).split("");
      const newCode = [...code];
      digits.forEach((digit, i) => {
        if (index + i < 6) newCode[index + i] = digit;
      });
      setCode(newCode);
      const nextIndex = Math.min(index + digits.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code.some((c) => !c)) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsVerified(true);
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  };

  const handleResend = () => {
    setResendTimer(60);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maroon via-gold to-maroon" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block">
            <span className="text-maroon-dark font-bold text-2xl tracking-wider">KTTD</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10">
          {!isVerified ? (
            <>
              {/* Icon */}
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Verify your email
              </h2>
              <p className="text-sm text-gray-500 text-center mb-8 leading-relaxed">
                We&apos;ve sent a 6-digit verification code to your email address. Enter the code below to verify your account.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* OTP Input */}
                <div className="flex justify-center gap-3">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { inputRefs.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl text-gray-800 focus:border-gold focus:ring-0 transition-all duration-200 hover:border-gray-300"
                      id={`verify-code-${index}`}
                    />
                  ))}
                </div>

                <button
                  id="verify-submit"
                  type="submit"
                  disabled={isLoading || code.some((c) => !c)}
                  className="w-full bg-gold hover:bg-gold-dark text-maroon-dark font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    "Verify Email"
                  )}
                </button>
              </form>

              {/* Resend */}
              <div className="mt-6 text-center">
                {resendTimer > 0 ? (
                  <p className="text-sm text-gray-400">
                    Resend code in{" "}
                    <span className="font-semibold text-gray-600">{resendTimer}s</span>
                  </p>
                ) : (
                  <button
                    onClick={handleResend}
                    className="text-sm text-maroon hover:text-maroon-dark font-medium transition-colors cursor-pointer"
                  >
                    Resend verification code
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-fade-in-up">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Email verified!
              </h2>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Your email has been successfully verified. You can now sign in to your account.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Continue to Sign In
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          © 2024 University of Southeastern Philippines. All rights reserved.
        </p>
      </div>
    </div>
  );
}
