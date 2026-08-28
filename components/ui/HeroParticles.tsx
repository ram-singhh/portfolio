"use client";

import React, { useEffect, useState } from "react";

export default function HeroParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="particles-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      {Array.from({ length: 50 }).map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const duration = `${3 + Math.random() * 4}s`;
        const delay = `${Math.random() * 2}s`;

        return (
          <div
            key={i}
            className="particle"
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "rgba(139, 92, 246, 0.3)",
              borderRadius: "50%",
              animation: `float ${duration} ease-in-out infinite`,
              animationDelay: delay,
              left,
              top,
            }}
          />
        );
      })}
    </div>
  );
}
