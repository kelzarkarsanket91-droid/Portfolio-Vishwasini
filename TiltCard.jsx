import { useState, useRef } from "react";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02,
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: "transform 0.5s ease-out",
  });
  const [glowStyle, setGlowStyle] = useState({
    opacity: 0,
    background: `radial-gradient(600px circle at 50% 50%, rgba(0, 240, 255, 0.15), transparent 40%)`,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(
        2
      )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: "transform 0.1s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
    });

    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(400px circle at ${x}px ${y}px, rgba(0, 240, 255, 0.18), rgba(139, 92, 246, 0.08) 40%, transparent 80%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
    });
    setGlowStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative overflow-hidden rounded-xl glass-card transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic Cursor Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={glowStyle}
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}
