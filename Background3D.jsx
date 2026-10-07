export default function Background3D() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-dark-950"
      aria-hidden="true"
    >
      {/* Soft Ambient Glowing Orbs */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse-slow" />
      <div
        className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute -bottom-32 left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-400/5 blur-[120px]" />
    </div>
  );
}
