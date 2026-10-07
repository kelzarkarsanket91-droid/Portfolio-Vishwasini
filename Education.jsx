import { education } from "../data/portfolioData";
import SectionShell from "./SectionShell";
import TiltCard from "./TiltCard";
import { GraduationCap, ExternalLink, Award, Calendar } from "lucide-react";

export default function Education() {
  return (
    <SectionShell
      id="education"
      sheet="03"
      title="Academic Background"
      subtitle="Computer Science engineering degree focused on Artificial Intelligence & Machine Learning."
    >
      <TiltCard className="p-8 border border-dark-800 bg-dark-900/60 backdrop-blur-xl max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-dark-800 pb-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-violet-500/20 border border-neon-cyan/40 text-neon-cyan shrink-0 mt-1">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <a
                href={education.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-display text-2xl font-bold text-white transition-colors hover:text-neon-cyan"
              >
                <span>{education.institution}</span>
                <ExternalLink className="w-4 h-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="font-body text-sm text-paper-300 mt-1">
                {education.school}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs text-emerald-400 shrink-0 w-fit">
            <Calendar className="w-3.5 h-3.5" />
            <span>{education.status}</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 font-mono text-xs">
          <div className="p-4 rounded-xl bg-dark-950/60 border border-dark-800">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-[10px] uppercase">DEGREE PROGRAM</span>
            </div>
            <p className="font-body text-sm font-medium text-white leading-relaxed">
              {education.program}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-dark-950/60 border border-dark-800 flex flex-col justify-between">
            <div>
              <span className="text-paper-400 block text-[10px] uppercase">SPECIALIZATION</span>
              <p className="font-body text-sm font-medium text-neon-cyan mt-1">
                Artificial Intelligence & Machine Learning (AI & ML)
              </p>
            </div>
            <div className="mt-3 text-right">
              <span className="text-[10px] text-paper-400">STATUS: ACTIVE STUDENT</span>
            </div>
          </div>
        </div>
      </TiltCard>
    </SectionShell>
  );
}
