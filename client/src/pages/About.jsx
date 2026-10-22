
import { ArrowRight, ArrowUp } from "lucide-react";

const logo =
  "https://thesparshgroup.com/wp-content/uploads/2025/07/SparshLogoDark-2048x861.png";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[0.8fr_1.7fr] lg:gap-20">
          {/* Company Logo */}
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Sparsh Group logo"
              className="w-full max-w-[380px] object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* About Content */}
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#e7ad4b]">
              Who We Are
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#0c0e25] sm:text-5xl lg:text-7xl">
              About Sparsh
            </h2>

            <p className="mt-6 max-w-5xl text-lg leading-8 text-[#626779] sm:text-xl">
              Welcome to SPARSH GROUP, your trusted partner in turning
              real estate dreams into real homes and thriving communities.
            </p>

            <a
              href="#contact"
              className="group mt-10 inline-flex min-h-24 items-center gap-4 bg-[#0c0e25] px-10 py-6 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:bg-[#e7ad4b] sm:px-14"
            >
              Know More
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>


      {/* Back to Top */}
      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center bg-[#e7ad4b] text-white shadow-lg transition hover:bg-[#0c0e25]"
      >
        <ArrowUp size={28} />
      </a>
    </>
  );
}
