import React from "react";
import TypewriterLabel from "@/components/ui/TypewriterLabel";

export interface CurrentlyPlayingProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function CurrentlyPlaying({ className = "", style }: CurrentlyPlayingProps) {
  return (
    <div className={`spotify-mock-player ${className}`} style={style}>
      <div className="spotify-cassette" aria-label="Vintage cassette tape representing spotify player placeholder">
        <div className="cassette-label">
          <span style={{ fontSize: "0.55rem", fontWeight: "bold", opacity: 0.6, letterSpacing: "0.15em" }}>
            SPOTIFY TAPE
          </span>
          <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", fontWeight: "bold", color: "#111" }}>
            [ OFFLINE MODE ]
          </span>
        </div>
        <div className="cassette-reels">
          <div className="cassette-reel" />
          <div className="cassette-reel" />
        </div>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
          Spotify connection coming soon.
        </p>
      </div>
    </div>
  );
}
