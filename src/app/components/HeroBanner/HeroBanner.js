"use client";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-green-50">
      {/* Background Image */}
      <img
        src="/your-crystal-image.jpg" // change this path
        alt="Beautiful Crystal"
        className="w-full h-[40vh] sm:h-[45vh] lg:h-[50vh] object-cover opacity-80"

      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Discover the Energy of Crystals
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white max-w-2xl drop-shadow">
          Explore authentic stones hand-selected for healing, balance, and beauty.
        </p>
      </div>
    </section>
  );
}
