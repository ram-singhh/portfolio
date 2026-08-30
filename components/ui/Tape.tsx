import React from "react";

export interface TapeProps {
  rotation?: number;
  position?: "top-center" | "top-left" | "top-right" | "bottom-center" | "none";
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Tape({
  rotation = 1.5,
  position = "top-center",
  width = "90px",
  className = "",
  style,
}: TapeProps) {
  const combinedStyle = {
    ...style,
    "--tape-rotation": `${rotation}deg`,
    "--tape-width": typeof width === "number" ? `${width}px` : width,
  } as React.CSSProperties;

  const positionClass = position !== "none" ? `tape-pos-${position}` : "";

  return (
    <div
      className={`masking-tape-component ${positionClass} ${className}`}
      style={combinedStyle}
      aria-hidden="true"
    />
  );
}
