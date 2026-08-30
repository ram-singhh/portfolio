"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { SpotifyResponse } from "@/lib/spotify";

export interface CurrentlyPlayingProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function CurrentlyPlaying({ className = "", style }: CurrentlyPlayingProps) {
  const [data, setData] = useState<SpotifyResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/spotify/currently-playing/");
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      const json: SpotifyResponse = await res.json();
      setData(json);
      setError(false);
    } catch (err) {
      console.error("Error fetching currently playing track:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();

    // Poll every 25 seconds to reflect track state reasonably quickly without hammering
    const interval = setInterval(fetchStatus, 25000);
    return () => clearInterval(interval);
  }, []);

  // Compute state flags
  const isConfigured = data ? data.isConfigured : true;
  const isPlaying = data ? data.isPlaying : false;
  const track = data ? data.track : null;
  const hasError = error || (data && data.error && data.error !== "rate-limited");

  // 1. LOADING STATE
  if (loading) {
    return (
      <div className={`spotify-mock-player ${className}`} style={style} aria-busy="true" aria-live="polite">
        <div className="spotify-cassette" aria-label="Vintage cassette tape representing spotify player loading">
          <div className="cassette-label">
            <span style={{ fontSize: "0.55rem", fontWeight: "bold", opacity: 0.6, letterSpacing: "0.15em", color: "#555" }}>
              SPOTIFY TAPE
            </span>
            <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", fontWeight: "bold", color: "#666" }}>
              [ CONNECTING... ]
            </span>
          </div>
          <div className="cassette-reels" aria-hidden="true">
            <div className="cassette-reel" style={{ animationPlayState: "paused" }} />
            <div className="cassette-reel" style={{ animationPlayState: "paused" }} />
          </div>
        </div>
        
        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
            Checking deck connection...
          </p>
        </div>
      </div>
    );
  }

  // 2. UNCONFIGURED STATE (SPOTIFY NOT CONNECTED)
  if (!isConfigured) {
    return (
      <div className={`spotify-mock-player ${className}`} style={style} aria-live="polite">
        <div className="spotify-cassette" aria-label="Vintage cassette tape representing spotify player unconfigured">
          <div className="cassette-label">
            <span style={{ fontSize: "0.55rem", fontWeight: "bold", opacity: 0.6, letterSpacing: "0.15em", color: "#555" }}>
              SPOTIFY TAPE
            </span>
            <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", fontWeight: "bold", color: "var(--color-ink-red)" }}>
              [ NOT CONNECTED ]
            </span>
          </div>
          <div className="cassette-reels" aria-hidden="true">
            <div className="cassette-reel" style={{ animationPlayState: "paused" }} />
            <div className="cassette-reel" style={{ animationPlayState: "paused" }} />
          </div>
        </div>
        
        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-ink-red)", margin: 0, fontWeight: "bold" }}>
            SPOTIFY NOT CONNECTED
          </p>
          <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
            Add credentials to environment variables.
          </p>
        </div>
      </div>
    );
  }

  // 3. ERROR / OFFLINE STATE
  if (hasError) {
    return (
      <div className={`spotify-mock-player ${className}`} style={style} aria-live="assertive">
        <div className="spotify-cassette" aria-label="Vintage cassette tape representing spotify player error">
          <div className="cassette-label">
            <span style={{ fontSize: "0.55rem", fontWeight: "bold", opacity: 0.6, letterSpacing: "0.15em", color: "#555" }}>
              SPOTIFY TAPE
            </span>
            <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", fontWeight: "bold", color: "var(--color-ink-red)" }}>
              [ OFFLINE ]
            </span>
          </div>
          <div className="cassette-reels" aria-hidden="true">
            <div className="cassette-reel" style={{ animationPlayState: "paused" }} />
            <div className="cassette-reel" style={{ animationPlayState: "paused" }} />
          </div>
        </div>
        
        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-ink-red)", margin: 0 }}>
            ▲ OFFLINE / CONNECTION ERROR
          </p>
        </div>
      </div>
    );
  }

  // 4. CURRENTLY PLAYING STATE
  if (isPlaying && track) {
    const progressMs = data ? data.progressMs : null;
    const durationMs = data ? data.durationMs : null;
    const progressPercent = durationMs && progressMs ? (progressMs / durationMs) * 100 : 0;

    return (
      <div className={`spotify-mock-player ${className}`} style={style} aria-live="polite">
        {/* Cassette Tape */}
        <div className="spotify-cassette" aria-label={`Cassette tape spinning, playing ${track.name} by ${track.artist}`}>
          <div className="cassette-label">
            <span style={{ fontSize: "0.55rem", fontWeight: "bold", opacity: 0.6, letterSpacing: "0.15em", color: "#555" }}>
              SPOTIFY TAPE
            </span>
            <span style={{ 
              fontSize: "0.65rem", 
              fontFamily: "var(--font-mono)", 
              fontWeight: "bold", 
              color: "#111", 
              maxWidth: "100%", 
              whiteSpace: "nowrap", 
              overflow: "hidden", 
              textOverflow: "ellipsis" 
            }}>
              {track.name}
            </span>
          </div>
          <div className="cassette-reels" aria-hidden="true">
            <div className="cassette-reel" style={{ animationPlayState: "running" }} />
            <div className="cassette-reel" style={{ animationPlayState: "running" }} />
          </div>
        </div>

        {/* Track Details Card */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "0.75rem" }}>
          {/* Album artwork */}
          {track.image ? (
            <div style={{ position: "relative", width: 64, height: 64, borderRadius: "4px", overflow: "hidden", flexShrink: 0, boxShadow: "0 2px 5px rgba(0,0,0,0.5)" }}>
              <Image 
                src={track.image} 
                alt={`Album art for ${track.name} by ${track.artist}`}
                fill
                sizes="64px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : (
            <div style={{ 
              width: 64, 
              height: 64, 
              borderRadius: "4px", 
              backgroundColor: "#222", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              flexShrink: 0,
              boxShadow: "0 2px 5px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <span style={{ fontSize: "1.5rem" }} role="img" aria-label="Music disc placeholder">💿</span>
            </div>
          )}

          {/* Track Text */}
          <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 0 }}>
            <span style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "0.9rem", 
              fontWeight: "bold", 
              color: "#fff", 
              whiteSpace: "nowrap", 
              overflow: "hidden", 
              textOverflow: "ellipsis" 
            }}>
              {track.name}
            </span>
            
            <span style={{ 
              fontFamily: "var(--font-primary)", 
              fontSize: "0.8rem", 
              color: "var(--text-secondary)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              {track.artist}
            </span>

            {track.album && (
              <span style={{ 
                fontFamily: "var(--font-primary)", 
                fontSize: "0.7rem", 
                color: "var(--text-muted)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}>
                {track.album}
              </span>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {durationMs && progressMs !== null && (
          <div style={{ marginTop: "0.5rem" }}>
            <div style={{ width: "100%", height: "4px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }} aria-hidden="true">
              <div style={{ width: `${progressPercent}%`, height: "100%", backgroundColor: "var(--color-ink-red)", transition: "width 1s linear" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginTop: "0.25rem" }}>
              <span>{formatMs(progressMs)}</span>
              <span>{formatMs(durationMs)}</span>
            </div>
          </div>
        )}

        {/* Status & Spotify Link */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{ 
            fontFamily: "var(--font-mono)", 
            fontSize: "0.75rem", 
            fontWeight: "bold", 
            color: "#22c55e", 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.35rem" 
          }}>
            <span className="pulse-dot" style={{ width: "6px", height: "6px", backgroundColor: "#22c55e", borderRadius: "50%" }} />
            ▶ PLAYING
          </span>
          
          {track.spotifyUrl && (
            <a 
              href={track.spotifyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.75rem", 
                color: "var(--text-secondary)", 
                textDecoration: "underline",
                display: "inline-flex",
                alignItems: "center"
              }}
              aria-label={`Open ${track.name} on Spotify`}
            >
              OPEN IN SPOTIFY ↗
            </a>
          )}
        </div>
      </div>
    );
  }

  // 5. PAUSED / NOT PLAYING STATE (Default fallback)
  return (
    <div className={`spotify-mock-player ${className}`} style={style} aria-live="polite">
      <div className="spotify-cassette" aria-label="Vintage cassette tape representing spotify player paused or not playing">
        <div className="cassette-label">
          <span style={{ fontSize: "0.55rem", fontWeight: "bold", opacity: 0.6, letterSpacing: "0.15em", color: "#555" }}>
            SPOTIFY TAPE
          </span>
          <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", fontWeight: "bold", color: "#666" }}>
            [ NOT PLAYING ]
          </span>
        </div>
        <div className="cassette-reels" aria-hidden="true">
          <div className="cassette-reel" style={{ animationPlayState: "paused" }} />
          <div className="cassette-reel" style={{ animationPlayState: "paused" }} />
        </div>
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
        <span style={{ 
          fontFamily: "var(--font-mono)", 
          fontSize: "0.75rem", 
          color: "var(--text-muted)", 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "0.35rem" 
        }}>
          ■ NOT PLAYING
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
          deck ready
        </span>
      </div>
    </div>
  );
}

function formatMs(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
