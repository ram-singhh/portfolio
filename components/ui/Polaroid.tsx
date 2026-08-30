import React from "react";
import Image from "next/image";
import Tape from "./Tape";

export interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  hasTape?: boolean;
  tapeRotation?: number;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Polaroid({
  src,
  alt,
  caption,
  rotation = -1.5,
  hasTape = false,
  tapeRotation = 2,
  width = 280,
  height = 280,
  className = "",
  style,
}: PolaroidProps) {
  const combinedStyle = {
    ...style,
    "--polaroid-rotation": `${rotation}deg`,
    width: `${width}px`,
  } as React.CSSProperties;

  return (
    <div className={`polaroid-component ${className}`} style={combinedStyle}>
      {hasTape && <Tape rotation={tapeRotation} position="top-center" />}
      <div className="polaroid-frame">
        <div className="polaroid-image-container">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="polaroid-image"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          {/* Film gloss effect */}
          <div className="polaroid-gloss" />
        </div>
        {caption && (
          <div className="polaroid-caption-container">
            <span className="polaroid-caption-text">{caption}</span>
          </div>
        )}
      </div>
    </div>
  );
}
