import React from "react";

export interface DeskBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function DeskBackground({ className = "", style }: DeskBackgroundProps) {
  return (
    <div className={`desk-background ${className}`} style={style} aria-hidden="true">
      <div className="desk-surface" />
      <div className="desk-grain" />
      <div className="desk-lighting" />
    </div>
  );
}
