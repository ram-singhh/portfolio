import React from "react";

export interface PaperProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "craft" | "lined" | "grid";
  rotation?: number;
  padding?: "none" | "small" | "medium" | "large";
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export default function Paper({
  children,
  variant = "light",
  rotation = 0,
  padding = "medium",
  className = "",
  id,
  style,
}: PaperProps) {
  // Combine custom inline styles with CSS variables for rotation
  const combinedStyle = {
    ...style,
    "--paper-rotation": `${rotation}deg`,
  } as React.CSSProperties;

  return (
    <div
      id={id}
      className={`paper-component paper-variant-${variant} paper-padding-${padding} ${className}`}
      style={combinedStyle}
    >
      {/* Decorative notebook/craft texture overlays inside paper if needed */}
      {(variant === "lined" || variant === "grid") && (
        <div className="paper-pattern-overlay" aria-hidden="true" />
      )}
      <div className="paper-content">{children}</div>
    </div>
  );
}
