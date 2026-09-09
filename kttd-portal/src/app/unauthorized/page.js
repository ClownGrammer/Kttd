import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maroon via-red-500 to-maroon" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/3 rounded-full blur-3xl" />

      <div className="relative w-full max-w-lg text-center">
        {/* Logo */}
        <div className="mb-10">
          <Link href="/" className="inline-block">
            <span className="text-maroon-dark font-bold text-2xl tracking-wider">KTTD</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-12">
          {/* Shield icon */}
          <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
            </svg>
          </div>

          {/* Error Code */}
          <div className="mb-4">
            <span className="text-7xl font-black text-gray-200 select-none">403</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">Access Denied</h1>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-sm mx-auto">
            You don&apos;t have permission to access this resource. If you believe this is a mistake, please contact your administrator or the KTTD office.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-maroon hover:bg-maroon-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-maroon/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go to Home
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-maroon/30 text-gray-700 hover:text-maroon font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In
            </Link>
          </div>

          {/* Help section */}
          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-3">Need help?</p>
            <div className="flex items-center justify-center gap-6 text-xs">
              <a href="mailto:kttd@usep.edu.ph" className="text-maroon hover:text-maroon-dark font-medium transition-colors flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                kttd@usep.edu.ph
              </a>
              <a href="#" className="text-maroon hover:text-maroon-dark font-medium transition-colors flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                IT Support
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          © 2024 University of Southeastern Philippines. All rights reserved.
        </p>
      </div>
    </div>
  );
}
