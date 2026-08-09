export default function Hero() {
  return (
    <section className="relative min-h-[480px] flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark" />

      {/* Decorative overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-maroon-deeper/50 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Empowering USeP&apos;s{" "}
            <span className="text-gold">Innovation Ecosystem</span>
          </h1>
          <p
            className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Secure, streamlined, and efficient electronic filing for inventors,
            researchers, and creators within the University of Southeastern
            Philippines.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#portal"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-maroon-dark font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Our Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
