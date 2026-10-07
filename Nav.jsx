import { useState, useEffect } from "react";
import { profile } from "../data/portfolioData";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-950/85 backdrop-blur-md border-b border-dark-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10">
        {/* Clean Professional Brand Badge */}
        <a
          href="#top"
          className="group flex items-center gap-3 font-display text-sm text-white transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-dark-900/90 font-mono text-xs font-semibold text-neon-cyan transition-all duration-300 group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            {profile.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-white leading-tight">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] text-cyan-400/90 tracking-wide">
              Full-Stack • Data Science • AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 rounded-full border border-dark-800/80 bg-dark-900/60 p-1.5 backdrop-blur-lg">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full px-4 py-1.5 font-mono text-xs text-paper-300 transition-all duration-200 hover:bg-neon-cyan/10 hover:text-neon-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-dark-800 bg-dark-900/80 text-paper-200 hover:text-neon-cyan cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-dark-800 bg-dark-950/95 px-6 py-6 backdrop-blur-xl">
          <ul className="flex flex-col gap-4 font-mono text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-paper-200 hover:bg-neon-cyan/10 hover:text-neon-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
