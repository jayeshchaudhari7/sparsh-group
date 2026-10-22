
import { ArrowDown } from "lucide-react";

const heroImage =
  "https://thesparshgroup.com/wp-content/uploads/2025/04/SliderArtboard-1-copy.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[650px] h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 flex w-full flex-col items-center px-5 text-center">
        <p className="mb-5 text-2xl font-medium italic tracking-wide text-[#F2B544] sm:text-3xl md:text-4xl">
          Find the Best
        </p>

        <h1 className="text-[clamp(2.5rem,5.5vw,7rem)] font-black uppercase leading-[1.05] tracking-tight text-white">
          Modern Apartments
        </h1>
      </div>

      {/* Explore Button */}
      <a
        href="#projects"
        className="group absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4 text-white transition-colors hover:text-[#F2B544]"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em]">
          Explore
        </span>

        <ArrowDown
          size={28}
          strokeWidth={1.5}
          className="animate-bounce"
        />
      </a>
    </section>
  );
}
