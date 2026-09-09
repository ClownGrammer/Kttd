export default function Hero() {
  return (
    <section className="relative min-h-[440px] md:min-h-[480px] flex items-center overflow-hidden pt-16 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark text-white">
      {/* Subtle geometric overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-maroon-deeper/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white animate-fade-in-up">
            Empowering USeP&apos;s{" "}
            <span className="text-gold">Innovation Ecosystem</span>
          </h1>
          <p
            className="mt-5 text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Secure, streamlined, and efficient electronic filing for inventors,
            researchers, and creators within the University of Southeastern
            Philippines.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-3.5 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#portal"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-maroon-dark font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md hover:shadow-gold/20 transition-all cursor-pointer"
            >
              Get Started
            </a>
            <a
              href="#portal"
              className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
            >
              Submit Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
