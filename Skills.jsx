import { skills } from "../data/portfolioData";
import SectionShell from "./SectionShell";
import TiltCard from "./TiltCard";
import { Code2, Layout, Cpu, CheckCircle2 } from "lucide-react";

const iconsMap = {
  Languages: <Code2 className="w-5 h-5 text-neon-cyan" />,
  Web: <Layout className="w-5 h-5 text-violet-400" />,
  "Emerging focus": <Cpu className="w-5 h-5 text-amber-400" />,
};

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      sheet="02"
      title="Technical Expertise"
      subtitle="Programming languages, web technologies, and machine learning focus area."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <TiltCard
            key={group.category}
            className="p-6 border border-dark-800 bg-dark-900/60 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 border-b border-dark-800 pb-4">
                <div className="p-2 rounded-lg bg-dark-950/80 border border-dark-800">
                  {iconsMap[group.category] || <Code2 className="w-5 h-5 text-neon-cyan" />}
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/20 bg-dark-950/60 px-3 py-2 font-mono text-xs text-paper-200 transition-all duration-300 hover:border-neon-cyan hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dark-800/60 flex items-center justify-between font-mono text-[10px] text-paper-400">
              <span>{group.items.length} TECHNOLOGIES</span>
              <span className="text-cyan-400/80">VERIFIED</span>
            </div>
          </TiltCard>
        ))}
      </div>
    </SectionShell>
  );
}
