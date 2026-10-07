import { profile } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { Sparkles, Code2, Cpu, Globe, ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative px-6 pb-20 pt-28 md:px-12 md:pb-32 md:pt-36 overflow-hidden"
    >


      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-dark-900/80 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-paper-200">
                Available for internships & projects
              </span>
            </div>

            <div>
              <p className="font-mono text-xs tracking-wider uppercase text-cyan-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neon-cyan animate-spin" style={{ animationDuration: '8s' }} />
                Software Developer, Data Science & AI/ML Enthusiast
              </p>
              
              <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.08]">
                Hi, I'm <br />
                <span className="text-gradient-cyan">{profile.name}</span>
              </h1>
            </div>

            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-neon-cyan to-violet-500" />

            <p className="font-body text-lg text-paper-300 max-w-xl leading-relaxed">
              {profile.title} based in <span className="text-white font-medium">{profile.location}</span>.
            </p>
            
            <p className="font-body text-sm text-paper-400 max-w-lg leading-relaxed">
              {profile.tagline}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-gradient-to-r from-neon-cyan/20 to-violet-500/20 px-6 py-3.5 font-mono text-xs font-semibold text-white border border-neon-cyan/40 transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-neon-cyan transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-paper-400/20 bg-dark-900/60 px-6 py-3.5 font-mono text-xs text-paper-300 transition-all duration-300 hover:border-paper-300 hover:text-white hover:bg-dark-850/80"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Tilt Technical Spec Card */}
          <div className="lg:col-span-5">
            <TiltCard className="p-7 border border-cyan-400/20 bg-dark-900/75 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-dark-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[11px] text-cyan-400/80">
                  SYSTEM_SPEC.v1.0
                </span>
              </div>

              {/* Core Attributes */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-dark-950/60 border border-dark-800">
                  <Code2 className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="text-paper-400 text-[10px] uppercase">Core Tech Stack</p>
                    <p className="text-white font-medium mt-0.5">Python, Java, C#, JS, SQL, React</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-dark-950/60 border border-dark-800">
                  <Cpu className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-paper-400 text-[10px] uppercase">Specialization</p>
                    <p className="text-white font-medium mt-0.5">AI & Machine Learning (B.Tech CSE)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-dark-950/60 border border-dark-800">
                  <Globe className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-paper-400 text-[10px] uppercase">Institution</p>
                    <p className="text-white font-medium mt-0.5">Sandip University, Nashik</p>
                  </div>
                </div>
              </div>

              {/* 3D Blueprint Technical Data Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-dark-800 pt-5 font-mono text-[11px]">
                <div className="p-2.5 rounded bg-dark-950/40 border border-dark-800">
                  <p className="text-paper-400">YEAR</p>
                  <p className="text-white font-semibold mt-1">2nd Year B.Tech</p>
                </div>
                <div className="p-2.5 rounded bg-dark-950/40 border border-dark-800">
                  <p className="text-paper-400">FOCUS</p>
                  <p className="text-neon-cyan font-semibold mt-1">Full-Stack, AI & ML</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
