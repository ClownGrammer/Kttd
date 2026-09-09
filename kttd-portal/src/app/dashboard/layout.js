"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NewServiceRequestModal from "../../components/NewServiceRequestModal";

export default function DashboardLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  // Determine current portal context
  const isDirector = pathname.startsWith("/dashboard/director");
  const isTbiuDirector = pathname.startsWith("/dashboard/tbiudirector");
  const isTbiuStaff = pathname.startsWith("/dashboard/tbiustaff");
  const isAdminStaff = pathname.startsWith("/dashboard/adminstaff");
  const isExternal = pathname.startsWith("/dashboard/external");
  const isInternal = !isDirector && !isTbiuDirector && !isTbiuStaff && !isAdminStaff && !isExternal;

  // Portal config
  const currentRole = isDirector
    ? { name: "Director Portal", role: "Executive Endorsements", badge: "Director", avatar: "ED", color: "bg-gold text-maroon-dark" }
    : isTbiuDirector
    ? { name: "TBIU Director Portal", role: "Incubator Governance", badge: "TBIU Dir", avatar: "TD", color: "bg-purple-600 text-white" }
    : isTbiuStaff
    ? { name: "TBIU Staff Portal", role: "Incubation Operations", badge: "TBIU Staff", avatar: "TS", color: "bg-amber-600 text-white" }
    : isAdminStaff
    ? { name: "Admin Staff Portal", role: "IP Review & Routing", badge: "Admin Staff", avatar: "AS", color: "bg-maroon text-white" }
    : isExternal
    ? { name: "External Partner", role: "Commercial Partner", badge: "External", avatar: "EP", color: "bg-emerald-600 text-white" }
    : { name: "Researcher Portal", role: "Faculty / Inventor", badge: "Researcher", avatar: "JD", color: "bg-blue-600 text-white" };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-maroon-dark text-white flex items-center justify-between px-6 py-3.5 shadow-md z-30 relative border-b border-white/10">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gold text-maroon-dark font-black text-base flex items-center justify-center shadow-sm">
              K
            </div>
            <div className="flex flex-col">
              <span className="text-gold font-bold text-lg tracking-wider leading-tight">
                KTTD
              </span>
              <span className="text-[9px] text-gray-300 uppercase tracking-widest hidden sm:inline">
                Innovation Portal
              </span>
            </div>
          </Link>

          <span className="hidden md:inline-block w-px h-6 bg-white/20"></span>

          {/* Current Section Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/15">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs font-semibold text-white">
              {currentRole.name}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* User Avatar */}
          <div
            className={`w-8 h-8 rounded-full ${currentRole.color} font-bold flex items-center justify-center text-xs shadow-sm border border-white/40 cursor-pointer`}
            title={currentRole.name}
          >
            {currentRole.avatar}
          </div>

          {/* Direct Logout to Home */}
          <Link
            href="/"
            className="text-xs font-semibold text-white/90 hover:text-white transition-colors flex items-center bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-lg cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Adaptive Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col justify-between hidden md:flex">
          <div>
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-sm font-bold text-gray-800">{currentRole.name}</h2>
              <p className="text-xs text-gray-400 mt-0.5">{currentRole.role}</p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-4 bg-maroon hover:bg-maroon-dark text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              >
                <span className="text-base leading-none">+</span> New Service Request
              </button>
            </div>

            {/* Sidebar Navigation Links by Role */}
            <nav className="p-3 space-y-1">
              {/* Admin Staff Navigation */}
              {isAdminStaff && (
                <>
                  <Link
                    href="/dashboard/adminstaff"
                    className={`flex items-center px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                      pathname === "/dashboard/adminstaff"
                        ? "bg-red-50 text-maroon border-l-4 border-maroon font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2.5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Admin Staff Hub
                  </Link>
                  <Link
                    href="/dashboard/adminstaff/commercialization"
                    className={`flex items-center px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                      pathname === "/dashboard/adminstaff/commercialization"
                        ? "bg-red-50 text-maroon border-l-4 border-maroon font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2.5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Commercialization
                  </Link>
                  <Link
                    href="/dashboard/tbiustaff"
                    className="flex items-center px-3.5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    TBIU Incubation
                  </Link>
                </>
              )}

              {/* TBIU Staff Navigation */}
              {isTbiuStaff && (
                <>
                  <Link
                    href="/dashboard/tbiustaff"
                    className={`flex items-center px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                      pathname === "/dashboard/tbiustaff"
                        ? "bg-amber-50 text-amber-900 border-l-4 border-amber-600 font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    TBIU Incubation Mgmt
                  </Link>
                  <Link
                    href="/dashboard/adminstaff"
                    className="flex items-center px-3.5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2.5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Admin Staff Hub
                  </Link>
                  <Link
                    href="/dashboard/adminstaff/commercialization"
                    className="flex items-center px-3.5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2.5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Commercialization
                  </Link>
                </>
              )}

              {/* Director Navigation */}
              {isDirector && (
                <>
                  <Link
                    href="/dashboard/director"
                    className={`flex items-center px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                      pathname === "/dashboard/director"
                        ? "bg-red-50 text-maroon border-l-4 border-gold font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Director Overview
                  </Link>
                  <Link
                    href="/dashboard/director/commercialization"
                    className={`flex items-center px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                      pathname === "/dashboard/director/commercialization"
                        ? "bg-red-50 text-maroon border-l-4 border-gold font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2.5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Commercialization
                  </Link>
                  <Link
                    href="/dashboard/tbiudirector"
                    className="flex items-center px-3.5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    TBIU Governance
                  </Link>
                </>
              )}

              {/* TBIU Director Navigation */}
              {isTbiuDirector && (
                <>
                  <Link
                    href="/dashboard/tbiudirector"
                    className={`flex items-center px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                      pathname === "/dashboard/tbiudirector"
                        ? "bg-purple-50 text-purple-900 border-l-4 border-purple-600 font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    TBIU Governance
                  </Link>
                  <Link
                    href="/dashboard/director"
                    className="flex items-center px-3.5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Director Overview
                  </Link>
                  <Link
                    href="/dashboard/director/commercialization"
                    className="flex items-center px-3.5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2.5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Commercialization
                  </Link>
                </>
              )}

              {/* Researcher Internal Navigation */}
              {isInternal && (
                <>
                  <Link
                    href="/dashboard/internal"
                    className={`flex items-center px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                      pathname === "/dashboard/internal"
                        ? "bg-red-50 text-maroon border-l-4 border-maroon font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2.5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/internal/commercialization"
                    className="flex items-center px-3.5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Commercialization
                  </Link>
                  <Link
                    href="/dashboard/internal/incubation"
                    className="flex items-center px-3.5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Incubation
                  </Link>
                </>
              )}

              {/* External Partner Navigation */}
              {isExternal && (
                <>
                  <Link
                    href="/dashboard/external"
                    className={`flex items-center px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                      pathname === "/dashboard/external"
                        ? "bg-emerald-50 text-emerald-900 border-l-4 border-emerald-600 font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Partner Overview
                  </Link>
                </>
              )}
            </nav>
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${currentRole.color} font-bold flex items-center justify-center text-xs flex-shrink-0`}>
                {currentRole.avatar}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-gray-800 truncate">
                  {currentRole.name}
                </p>
                <p className="text-[10px] text-gray-400 truncate">
                  University of Southeastern Philippines
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 flex flex-col">
          <div className="flex-1 p-5 sm:p-8 max-w-7xl w-full mx-auto">
            {children}
          </div>
          
          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 text-xs py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 mt-auto gap-2">
            <div>
              <span className="text-maroon font-bold">KTTD Portal</span> | Knowledge &amp; Technology Transfer Division
              <span className="ml-2 text-gray-400">© 2024 USeP. All rights reserved.</span>
            </div>
            <div className="flex space-x-4 text-xs">
              <Link href="/" className="hover:text-maroon transition-colors">Home</Link>
              <a href="#" className="hover:text-maroon transition-colors">Support &amp; SOPs</a>
            </div>
          </footer>
        </main>
      </div>

      {/* New Service Request Modal */}
      <NewServiceRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
