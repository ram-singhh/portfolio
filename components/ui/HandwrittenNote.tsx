import React from "react";

export interface HandwrittenNoteProps {
  children: React.ReactNode;
  color?: "blue" | "pencil" | "red" | "green";
  tilt?: number;
  fontSize?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HandwrittenNote({
  children,
  color = "blue",
  tilt = -1.5,
  fontSize = "1.35rem",
  className = "",
  style,
}: HandwrittenNoteProps) {
  const combinedStyle = {
    ...style,
    "--note-tilt": `${tilt}deg`,
    fontSize,
  } as React.CSSProperties;

  return (
    <span
      className={`handwritten-note-component note-ink-${color} ${className}`}
      style={combinedStyle}
    >
      {children}
    </span>
  );
}
