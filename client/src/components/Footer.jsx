import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuLinks = [
    { label: "Home", href: "/" },
    { label: "Contact us", href: "/contact" },
    { label: "About us", href: "/about" },
  ];

  const quickLinks = [
    { label: "Review", href: "/review" },
    { label: "Live Photos", href: "/live-photos" },
    { label: "Special Offer", href: "/special-offer" },
  ];

  const linkClass =
    "block text-[18px] md:text-[20px] text-[#96a5b9] transition-colors duration-200 hover:text-[#e5ad4d]";

  return (
    <footer className="relative bg-[#202020] text-white">
      <div className="mx-auto max-w-[1680px] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr_1.4fr_0.7fr] lg:gap-10">
          {/* Brand */}
          <div>
            <a href="/" aria-label="Sparsh Group home">
              <img
                src="https://thesparshgroup.com/wp-content/uploads/2025/04/SparshGroupLogo.png"
                alt="Sparsh Group"
                className="mb-10 h-auto w-[190px] object-contain"
              />
            </a>

            <p className="max-w-[250px] text-[27px] leading-[1.15] font-normal tracking-tight">
              We Develop &amp;
              <br />
              Create
              <br />
              Our Common
              <br />
              Future
            </p>
          </div>

          {/* Menu */}
          <div>
            <h2 className="mb-8 text-[20px] font-medium uppercase">
              Menu
            </h2>

            <ul className="space-y-6">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a className={linkClass} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-8 text-[20px] font-medium uppercase">
              Quick Links
            </h2>

            <ul className="space-y-6">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a className={linkClass} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-8 text-[20px] font-medium uppercase">
              Contact Us
            </h2>

            <div className="space-y-8 text-[18px] leading-[1.9] text-[#96a5b9]">
              <address className="not-italic">
                1110-1111, Surya Icon, B/H Binali
                <br />
                Complex Naranpura,
                <br />
                Ahmedabad.
              </address>

              <a
                href="mailto:info@thesparshgroup.com"
                className="block break-words transition-colors hover:text-[#e5ad4d]"
              >
                info@thesparshgroup.com
              </a>

              <a
                href="tel:+919904555373"
                className="block transition-colors hover:text-[#e5ad4d]"
              >
                +91 99045 55373
              </a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h2 className="mb-10 text-[20px] font-medium uppercase">
              Socials
            </h2>

            <div className="flex flex-wrap gap-4">
              {/* Add your actual social media URLs here. */}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-15 border-t border-[#383838] pt-6">
          <p className="text-[16px] text-[#96a5b9] md:text-[20px]">
            Sparsh Group © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>


    </footer>
  );
};

export default Footer;