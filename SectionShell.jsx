export default function SectionShell({ id, sheet, title, subtitle, children }) {
  return (
    <section
      id={id}
      className="relative px-6 py-20 md:px-12 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-12 flex flex-col gap-2">
          <div className="flex items-center gap-3 font-mono text-xs text-cyan-400">
            <span className="inline-block px-2.5 py-0.5 rounded border border-cyan-400/30 bg-cyan-400/10">
              SHEET {sheet}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-dark-800 via-cyan-400/30 to-transparent" />
          </div>
          
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="font-body text-sm text-paper-400 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
