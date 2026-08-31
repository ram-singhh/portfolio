import React from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import DeskBackground from "@/components/ui/DeskBackground";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "6rem" }}>
      <DeskBackground />
      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "10rem", maxWidth: "560px", margin: "0 auto" }}>
        <div style={{ transform: "rotate(-1.5deg)" }}>
          <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
            <Tape rotation={-3} position="top-center" width="110px" />
            <div style={{ marginBottom: "1.5rem" }}>
              <TypewriterLabel variant="dymo" rotation={1.5}>
                404
              </TypewriterLabel>
            </div>
            <h1 style={{ 
              fontFamily: "var(--font-serif)", 
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)", 
              fontWeight: 700, 
              fontStyle: "italic", 
              color: "var(--text-dark)", 
              marginBottom: "1rem" 
            }}>
              THIS PAGE GOT LOST.
            </h1>
            <p style={{ 
              fontFamily: "var(--font-primary)", 
              fontSize: "0.95rem", 
              lineHeight: "1.6", 
              color: "#333", 
              marginBottom: "2rem" 
            }}>
              The requested document is not on the desk. It may have been moved or archived.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "240px", margin: "0 auto" }}>
              <Link href="/" className="tactile-btn tactile-btn-primary" style={{ textDecoration: "none" }}>
                [ BACK HOME ]
              </Link>
              <Link href="/projects/" className="tactile-btn" style={{ textDecoration: "none" }}>
                [ VIEW MY WORK ]
              </Link>
              <Link href="/contact/" className="tactile-btn" style={{ textDecoration: "none" }}>
                [ BOOK A PROJECT ]
              </Link>
            </div>
          </Paper>
        </div>
      </div>
    </main>
  );
}
