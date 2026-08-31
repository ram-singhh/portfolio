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

  // Helper function for rendering compact vintage cassette tape visual
  const renderCassette = (tagText: string, spinning: boolean) => (
    <div className="spotify-cassette-mini" aria-label={`Vintage cassette tape ${spinning ? "playing" : "idle"}`}>
      <div className="cassette-screw top-left" />
      <div className="cassette-screw top-right" />
      <div className="cassette-screw bottom-left" />
      <div className="cassette-screw bottom-right" />
      <div className="cassette-label-mini">
        <span className="cassette-tape-tag">{tagText}</span>
        <div className="cassette-window-mini">
          <div className="cassette-tape-strip" />
          <div className="cassette-reels-mini" aria-hidden="true">
            <div className="cassette-reel-mini" style={{ animationPlayState: spinning ? "running" : "paused" }} />
            <div className="cassette-reel-mini" style={{ animationPlayState: spinning ? "running" : "paused" }} />
          </div>
        </div>
      </div>
    </div>
  );

  // 1. LOADING STATE
  if (loading) {
    return (
      <div className={`spotify-compact-player ${className}`} style={style} aria-busy="true" aria-live="polite">
        <div className="spotify-main-layout">
          {renderCassette("SPOTIFY", false)}
          <div className="spotify-content-column">
            <div className="spotify-track-container">
              <div className="spotify-album-thumb-placeholder">💿</div>
              <div className="spotify-track-details">
                <span className="spotify-track-name">[ CONNECTING... ]</span>
                <span className="spotify-track-artist">Checking deck connection...</span>
              </div>
            </div>
            <div className="spotify-status-bar">
              <span className="spotify-status-badge" style={{ color: "var(--text-muted)" }}>
                ■ CONNECTING
              </span>
              <span className="spotify-deck-note">deck initializing</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. UNCONFIGURED STATE (SPOTIFY NOT CONNECTED)
  if (!isConfigured) {
    return (
      <div className={`spotify-compact-player ${className}`} style={style} aria-live="polite">
        <div className="spotify-main-layout">
          {renderCassette("UNCONFIG", false)}
          <div className="spotify-content-column">
            <div className="spotify-track-container">
              <div className="spotify-album-thumb-placeholder" style={{ borderColor: "rgba(220, 38, 38, 0.3)" }}>⚠️</div>
              <div className="spotify-track-details">
                <span className="spotify-track-name" style={{ color: "var(--color-ink-red)" }}>[ NOT CONNECTED ]</span>
                <span className="spotify-track-artist">Add credentials to environment variables</span>
              </div>
            </div>
            <div className="spotify-status-bar">
              <span className="spotify-status-badge" style={{ color: "var(--color-ink-red)" }}>
                ■ NOT CONNECTED
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. ERROR / OFFLINE STATE
  if (hasError) {
    return (
      <div className={`spotify-compact-player ${className}`} style={style} aria-live="assertive">
        <div className="spotify-main-layout">
          {renderCassette("OFFLINE", false)}
          <div className="spotify-content-column">
            <div className="spotify-track-container">
              <div className="spotify-album-thumb-placeholder" style={{ borderColor: "rgba(220, 38, 38, 0.3)" }}>📡</div>
              <div className="spotify-track-details">
                <span className="spotify-track-name" style={{ color: "var(--color-ink-red)" }}>[ OFFLINE ]</span>
                <span className="spotify-track-artist">Connection or API error</span>
              </div>
            </div>
            <div className="spotify-status-bar">
              <span className="spotify-status-badge" style={{ color: "var(--color-ink-red)" }}>
                ▲ OFFLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. CURRENTLY PLAYING STATE
  if (isPlaying && track) {
    const progressMs = data ? data.progressMs : null;
    const durationMs = data ? data.durationMs : null;
    const progressPercent = durationMs && progressMs ? Math.min((progressMs / durationMs) * 100, 100) : 0;

    return (
      <div className={`spotify-compact-player ${className}`} style={style} aria-live="polite">
        <div className="spotify-main-layout">
          {renderCassette("SPOTIFY TAPE", true)}
          <div className="spotify-content-column">
            <div className="spotify-track-container">
              {track.image ? (
                <div className="spotify-album-thumb">
                  <Image 
                    src={track.image} 
                    alt={`Album art for ${track.name} by ${track.artist}`}
                    fill
                    sizes="52px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : (
                <div className="spotify-album-thumb-placeholder">💿</div>
              )}

              <div className="spotify-track-details">
                <span className="spotify-track-name">{track.name}</span>
                <span className="spotify-track-artist">{track.artist}</span>
                {track.album && <span className="spotify-track-album">{track.album}</span>}
              </div>
            </div>

            <div className="spotify-status-bar">
              <span className="spotify-status-badge" style={{ color: "#22c55e" }}>
                <span className="pulse-dot" />
                ● PLAYING
              </span>

              {track.spotifyUrl && (
                <a 
                  href={track.spotifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="spotify-open-link"
                  aria-label={`Open ${track.name} on Spotify`}
                >
                  OPEN IN SPOTIFY ↗
                </a>
              )}
            </div>

            {durationMs && progressMs !== null && (
              <div className="spotify-progress-wrapper">
                <div className="spotify-progress-bar" aria-hidden="true">
                  <div className="spotify-progress-fill" style={{ width: `${progressPercent}%` }} />
                </div>
                <div className="spotify-progress-times">
                  <span>{formatMs(progressMs)}</span>
                  <span>{formatMs(durationMs)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 5. PAUSED / NOT PLAYING STATE (Default fallback)
  return (
    <div className={`spotify-compact-player ${className}`} style={style} aria-live="polite">
      <div className="spotify-main-layout">
        {renderCassette("SPOTIFY TAPE", false)}
        <div className="spotify-content-column">
          <div className="spotify-track-container">
            <div className="spotify-album-thumb-placeholder">💿</div>
            <div className="spotify-track-details">
              <span className="spotify-track-name" style={{ color: "#999" }}>[ NOT PLAYING ]</span>
              <span className="spotify-track-artist">No track currently playing</span>
            </div>
          </div>
          <div className="spotify-status-bar">
            <span className="spotify-status-badge" style={{ color: "var(--text-muted)" }}>
              ■ NOT PLAYING
            </span>
            <span className="spotify-deck-note">deck ready</span>
          </div>
        </div>
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
