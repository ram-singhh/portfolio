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
  priority?: boolean;
  sizes?: string;
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
  priority = false,
  sizes,
}: PolaroidProps) {
  const combinedStyle = {
    ...style,
    "--polaroid-rotation": `${rotation}deg`,
    width: `min(${width}px, 100%)`,
    maxWidth: "100%",
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
            priority={priority}
            sizes={sizes || "(max-width: 640px) 260px, (max-width: 1024px) 280px, 320px"}
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
