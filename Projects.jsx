import { projects } from "../data/portfolioData";
import SectionShell from "./SectionShell";
import TiltCard from "./TiltCard";
import { FolderGit2, ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  return (
    <SectionShell
      id="work"
      sheet="04"
      title="Featured Projects"
      subtitle="Selected web applications and machine learning projects built with modern technologies."
    >
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <TiltCard
            key={project.sheet}
            className="p-7 border border-dark-800 bg-dark-900/60 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-dark-800 pb-4 mb-4">
                <span className="font-mono text-xs text-neon-cyan flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4" />
                  FIG {project.sheet}
                </span>
                <span className="font-mono text-[10px] text-paper-400">
                  {project.stack[0]}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>

              <p className="mt-3 font-body text-sm leading-relaxed text-paper-300">
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-dark-800/80">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 font-mono text-[11px] rounded bg-cyan-400/10 px-2.5 py-1 text-cyan-300 border border-cyan-400/20"
                  >
                    <Code2 className="w-3 h-3 text-neon-cyan" />
                    {tech}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-semibold text-neon-cyan hover:text-white transition-colors"
                >
                  <span>View Demo & Code</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <span className="font-mono text-[11px] text-paper-400 italic">
                  Academic & Personal Lab Project
                </span>
              )}
            </div>
          </TiltCard>
        ))}
      </div>
    </SectionShell>
  );
}
