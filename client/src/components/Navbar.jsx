
import { useState } from "react";
import { Building2, PhoneCall, Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT US", href: "#about" },
  { label: "QUICK LINKS", href: "#services" },
  { label: "JOIN US", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1700px] items-center justify-between px-6 py-6 sm:px-10 lg:px-16 lg:py-9">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 text-white">
          <Building2
            size={48}
            strokeWidth={1.5}
            className="text-[#efad35]"
          />

          <span>
            <span className="block text-xl font-black tracking-wider sm:text-2xl">
              THE BLISS
            </span>
            <span className="mt-1 block text-[10px] font-semibold tracking-[0.4em] text-white/80">
              SOLUTION GROUP
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-extrabold tracking-wider transition-colors hover:text-[#efad35] ${
                index === 0 ? "text-[#efad35]" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            aria-label="Contact us"
            className="ml-5 text-[#efad35] transition-transform hover:scale-110"
          >
            <PhoneCall size={32} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg border border-white/20 bg-black/20 p-2 text-white lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-5 rounded-xl border border-white/10 bg-[#211d19]/95 p-5 shadow-xl backdrop-blur-lg lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-4 text-sm font-bold tracking-widest text-white transition-colors hover:text-[#efad35]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center gap-3 py-3 font-semibold text-[#efad35]"
          >
            <PhoneCall size={20} />
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
