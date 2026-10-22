
const projects = [
  {
    name: "EKAYANSH",
    details: ["3 BHK", "Residential & Commercial", "@Sabarmati"],
    image: "https://thesparshgroup.com/wp-content/uploads/2025/04/GalleryEkaya5.jpg",
  },
  {
    name: "EKAGRAH",
    details: [
      "Ultra Luxurious 4 BHK Apartment",
      "5 BHK Duplex",
      "@Darpan Cross Road",
    ],
    image: "https://thesparshgroup.com/wp-content/uploads/2025/06/GalleryEkant10.jpg",
  },
  {
    name: "EKAYA",
    details: [
      "Ultra Luxurious",
      "4 BHK Apartment | 5 BHK Duplex",
      "Only Residential",
      "@Naranpura",
    ],
    image: "https://thesparshgroup.com/wp-content/uploads/2025/07/SliderEkagrah.jpg",
  },
  {
    name: "EKLAVYA",
    details: ["4 & 3 BHK", "Flats and Commercial", "@Naranpura"],
    image: "https://thesparshgroup.com/wp-content/uploads/2025/05/GalleryEklaya10.jpg",
  },
  {
    name: "EKANT",
    details: [
      "3 BHK Apartment & Shops",
      "@New Chandkheda, Ahmedabad",
    ],
    image: "https://thesparshgroup.com/wp-content/uploads/2025/07/SliderEkansh.jpg",
  },
  {
    name: "SATYAMEV S CUBE",
    details: ["Corporate & Retail Spaces", "@Motera, Chandkheda"],
    image: "https://thesparshgroup.com/wp-content/uploads/2025/07/s-cube-02.jpg",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="grid grid-cols-1 items-start gap-5 sm:grid-cols-[1.05fr_1fr] sm:gap-6">
      <div className="aspect-[1.55/1] overflow-hidden bg-stone-100">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="py-1 sm:py-2">
        <h3 className="text-2xl font-normal uppercase leading-tight text-[#0c0e25] sm:text-3xl">
          {project.name}
        </h3>

        <div className="mt-4 space-y-1.5 text-base font-extrabold leading-5 text-[#747474] sm:text-lg lg:text-md">
          {project.details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-12 sm:px-10 lg:px-16 lg:py-16"
    >
      <div className="mx-auto max-w-[1620px]">
        <h2 className="mb-12 text-4xl font-black uppercase tracking-tight text-[#0c0e25] sm:text-5xl lg:mb-14 lg:text-7xl">
          Feature Project
        </h2>

        <div className="grid gap-x-12 gap-y-16 lg:grid-cols-2 xl:gap-x-16 xl:gap-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
