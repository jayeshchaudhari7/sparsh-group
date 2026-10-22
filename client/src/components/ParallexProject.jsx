import { useEffect, useRef } from "react";

const stats = [
  { number: "6", label: "PROJECTS" },
  { number: "2", label: "UPCOMING" },
  { number: "1", label: "COMPLETED" },
  { number: "3", label: "ONGOING" },
];

export default function ParallaxProjects() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    let frameId;

    const updateParallax = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const offset = rect.top * -0.18;

        image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
      });
    };

    window.addEventListener("scroll", updateParallax, {
      passive: true,
    });

    updateParallax();

    return () => {
      window.removeEventListener("scroll", updateParallax);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[760px] overflow-hidden bg-[#0b0e25] md:min-h-[850px]"
    >
      {/* Parallax background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          ref={imageRef}
          src="https://thesparshgroup.com/wp-content/uploads/2025/04/GalleryEkaya5-1024x664.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center will-change-transform"
        />
      </div>

      {/* Light overlay to preserve heading contrast */}
      <div className="absolute inset-0 -z-10 bg-white/20" />

      {/* Content */}
      <div className="mx-auto max-w-[1680px] px-6 pb-20 pt-16 md:px-12 md:pt-20 lg:px-16">
        <h2 className="max-w-[1050px] text-4xl leading-[1.08] font-black tracking-tight text-black sm:text-3xl md:text-2xl lg:text-[50px]">
          THE LANDMARK THAT
          <br />
          EXUDES RADIANCE
        </h2>

        <div className="mt-14 grid max-w-[800px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:mt-20 lg:gap-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-[150px] flex-col items-center justify-center bg-[#0c0e25] px-3 py-8 text-center sm:min-h-[200px] lg:min-h-[250px]"
            >
              <span className="text-3xl font-bold text-white md:text-3xl lg:text-[60px]">
                {stat.number}
              </span>

              <span className="mt-6 max-w-full break-words text-base leading-snug font-medium text-[#efb43e] sm:text-lg md:text-xl lg:text-[27px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Back-to-top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-10 right-7 z-40 flex h-14 w-14 items-center justify-center bg-[#e9b34e] text-3xl text-white transition-colors hover:bg-[#d49a30] md:right-12"
      >
        ↑
      </button>
    </section>
  );
}