import React from "react";

export interface TypewriterLabelProps {
  children: React.ReactNode;
  variant?: "paper" | "dymo" | "plain";
  rotation?: number;
  className?: string;
  as?: "span" | "div" | "h2" | "h3" | "h4" | "h5" | "h6";
  style?: React.CSSProperties;
}

export default function TypewriterLabel({
  children,
  variant = "paper",
  rotation = 0.5,
  className = "",
  as: Component = "span",
  style,
}: TypewriterLabelProps) {
  const combinedStyle = {
    ...style,
    "--label-rotation": `${rotation}deg`,
  } as React.CSSProperties;

  return (
    <Component
      className={`typewriter-label-component label-style-${variant} ${className}`}
      style={combinedStyle}
    >
      {variant === "dymo" && <span className="dymo-emboss-dots" aria-hidden="true" />}
      <span className="typewriter-label-text">{children}</span>
    </Component>
  );
}
