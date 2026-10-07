import { profile } from "../data/portfolioData";
import SectionShell from "./SectionShell";
import TiltCard from "./TiltCard";
import { Brain, MapPin, Sparkles } from "lucide-react";

export default function About() {
  const paragraphs = profile.bio.split("\n\n");

  return (
    <SectionShell
      id="about"
      sheet="01"
      title="About Me"
      subtitle="Full-stack developer building scalable web applications and learning AI models."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Main Bio Card */}
        <div className="lg:col-span-8">
          <TiltCard className="p-8 border border-dark-800 bg-dark-900/60 backdrop-blur-xl h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-neon-cyan">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                Background & Expertise
              </h3>
            </div>

            <div className="space-y-4 font-body text-base leading-relaxed text-paper-300">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* Side Specs Card */}
        <div className="lg:col-span-4 space-y-4">
          <TiltCard className="p-6 border border-dark-800 bg-dark-900/60 backdrop-blur-xl">
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Quick Overview
            </h4>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-3 rounded-lg bg-dark-950/60 border border-dark-800">
                <span className="text-paper-400 block text-[10px]">CURRENT FOCUS</span>
                <span className="text-white font-medium block mt-1">
                  Full-stack Web Dev, Data Science & Python
                </span>
              </div>

              <div className="p-3 rounded-lg bg-dark-950/60 border border-dark-800">
                <span className="text-paper-400 block text-[10px]">DEGREE & MAJOR</span>
                <span className="text-white font-medium block mt-1">
                  B.Tech CSE (AI & ML)
                </span>
              </div>

              <div className="p-3 rounded-lg bg-dark-950/60 border border-dark-800 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-cyan shrink-0" />
                <div>
                  <span className="text-paper-400 block text-[10px]">LOCATION</span>
                  <span className="text-white font-medium block">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </SectionShell>
  );
}
