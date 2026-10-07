import { profile } from "../data/portfolioData";
import { ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-dark-800/80 bg-dark-950/80 px-6 py-8 md:px-12 backdrop-blur-md relative z-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-paper-400 sm:flex-row">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
          <span>
            © {year} <span className="text-white font-medium">{profile.name}</span>. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[10px] uppercase text-cyan-400/70">
            3D Portfolio Edition v1.0
          </span>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 rounded-full border border-dark-800 bg-dark-900/60 px-3 py-1.5 text-xs text-paper-300 transition-all hover:border-neon-cyan hover:text-neon-cyan"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
