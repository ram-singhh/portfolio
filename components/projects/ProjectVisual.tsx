import React from "react";

interface ProjectVisualProps {
  slug: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ProjectVisual({ slug, className = "", style }: ProjectVisualProps) {
  if (slug === "modern-calculator") {
    return (
      <div 
        className={`project-visual-calculator ${className}`} 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#171513",
          border: "2px solid #2b2724",
          borderRadius: "12px",
          padding: "1rem",
          width: "100%",
          maxWidth: "320px",
          margin: "0 auto",
          boxShadow: "0 12px 24px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.08)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
          userSelect: "none",
          ...style
        }}
        aria-hidden="true"
      >
        {/* Mock Header */}
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
          fontSize: "0.6rem",
          color: "var(--text-muted)",
          letterSpacing: "0.05em"
        }}>
          <span>RAM SINGH // RS-31</span>
          <div style={{ display: "flex", gap: "2px", background: "#1a1610", padding: "2px 4px", border: "1px solid #362e22", borderRadius: "2px" }}>
            <div style={{ width: "6px", height: "8px", background: "#423522" }} />
            <div style={{ width: "6px", height: "8px", background: "#423522" }} />
            <div style={{ width: "6px", height: "8px", background: "#423522" }} />
          </div>
        </div>

        {/* Mock calculator display */}
        <div style={{
          width: "100%",
          height: "38px",
          backgroundColor: "#0c100e",
          border: "1.5px solid #1a221f",
          borderRadius: "6px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "0 0.6rem",
          marginBottom: "0.75rem",
          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.8)"
        }}>
          <span style={{ fontSize: "0.55rem", color: "#94a3b8", lineHeight: 1 }}>125 × 8</span>
          <span style={{ color: "#34d399", fontWeight: "bold", fontSize: "1.1rem", lineHeight: 1.1 }}>1,000</span>
        </div>

        {/* Mock buttons */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.4rem",
          width: "100%"
        }}>
          {[
            { label: "AC", type: "fn" }, { label: "DEL", type: "fn" }, { label: "%", type: "fn" }, { label: "÷", type: "op" },
            { label: "7", type: "num" }, { label: "8", type: "num" }, { label: "9", type: "num" }, { label: "×", type: "op" },
            { label: "4", type: "num" }, { label: "5", type: "num" }, { label: "6", type: "num" }, { label: "-", type: "op" },
            { label: "1", type: "num" }, { label: "2", type: "num" }, { label: "3", type: "num" }, { label: "+", type: "op" },
            { label: "0", type: "num" }, { label: ".", type: "num" }, { label: "=", type: "eq" }
          ].map((btn, idx) => {
            let bg = "#24211e";
            let color = "#f2ede4";
            let shadow = "0 2px 0 #12100e";
            let border = "1px solid #383430";

            if (btn.type === "fn") {
              bg = "#36291e";
              color = "#fcd34d";
              shadow = "0 2px 0 #1c140d";
              border = "1px solid #4a3a2c";
            } else if (btn.type === "op") {
              bg = "#1e293b";
              color = "#93c5fd";
              shadow = "0 2px 0 #0f172a";
              border = "1px solid #334155";
            } else if (btn.type === "eq") {
              bg = "#9e1f1f";
              color = "#ffffff";
              shadow = "0 2px 0 #580d0d";
              border = "1px solid #b91c1c";
            }

            return (
              <div 
                key={idx} 
                style={{
                  gridColumn: btn.label === "0" ? "span 2" : undefined,
                  height: "26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: bg,
                  color: color,
                  border: border,
                  borderRadius: "4px",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  boxShadow: shadow
                }}
              >
                {btn.label}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (slug === "ai-multi-module-system") {
    return (
      <div 
        className={`project-visual-ai ${className}`} 
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#080706",
          border: "1px solid var(--border-secondary)",
          borderRadius: "var(--radius-md)",
          padding: "1rem",
          width: "100%",
          maxWidth: "320px",
          margin: "0 auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--text-secondary)",
          ...style
        }}
        aria-hidden="true"
      >
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "var(--text-muted)" }}>python -m system_core</span>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-ink-green)" }} />
        </div>
        <div style={{ lineHeight: "1.35", color: "#8d857a" }}>
          <div>[SYS] Initializing Modular Core...</div>
          <div style={{ color: "var(--text-primary)" }}>[SYS] Loading AI sub-modules:</div>
          <div style={{ paddingLeft: "10px" }}>├── module_llm_query.py <span style={{ color: "var(--color-ink-green)" }}>[LOADED]</span></div>
          <div style={{ paddingLeft: "10px" }}>├── module_data_parse.py <span style={{ color: "var(--color-ink-green)" }}>[LOADED]</span></div>
          <div style={{ paddingLeft: "10px" }}>└── module_config.py <span style={{ color: "var(--color-ink-green)" }}>[LOADED]</span></div>
          <div style={{ color: "var(--text-primary)", marginTop: "4px" }}>[SYS] Orchestrating workflow pipeline...</div>
          <div style={{ color: "var(--color-ink-blue)", fontWeight: "bold" }}>&gt;&gt;&gt; Pipeline ready. Core waiting for task.</div>
        </div>
      </div>
    );
  }

  if (slug === "portfolio-website") {
    return (
      <div 
        className={`project-visual-portfolio ${className}`} 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1c1a18",
          border: "2px dashed rgba(255,255,255,0.05)",
          borderRadius: "var(--radius-md)",
          padding: "1rem",
          width: "100%",
          maxWidth: "320px",
          margin: "0 auto",
          height: "150px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
          ...style
        }}
        aria-hidden="true"
      >
        {/* Visual schematic of desk components */}
        <div style={{
          width: "70%",
          height: "60px",
          backgroundColor: "#fdfcf7",
          border: "1px solid rgba(0,0,0,0.15)",
          transform: "rotate(-2deg)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          position: "absolute",
          top: "15px",
          left: "15px",
          display: "flex",
          flexDirection: "column",
          padding: "4px"
        }}>
          <div style={{ width: "30%", height: "4px", backgroundColor: "#ccc", marginBottom: "4px" }} />
          <div style={{ width: "90%", height: "2px", backgroundColor: "#ddd", marginBottom: "2px" }} />
          <div style={{ width: "80%", height: "2px", backgroundColor: "#ddd", marginBottom: "2px" }} />
          <div style={{ width: "85%", height: "2px", backgroundColor: "#ddd" }} />
        </div>
        
        <div style={{
          width: "80px",
          height: "80px",
          border: "4px solid #fff",
          borderBottomWidth: "16px",
          backgroundColor: "#e4dfd7",
          transform: "rotate(3deg)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.4)",
          position: "absolute",
          bottom: "10px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{ width: "100%", height: "100%", backgroundColor: "#3a2d20", borderRadius: "1px" }} />
        </div>

        <div style={{
          width: "45px",
          height: "22px",
          backgroundColor: "#1b1917",
          border: "1px solid #444",
          borderRadius: "2px",
          position: "absolute",
          bottom: "20px",
          left: "25px",
          transform: "rotate(-6deg)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.4)"
        }} />
      </div>
    );
  }

  if (slug === "wrapped-wishes") {
    return (
      <div 
        className={`project-visual-wrapped-wishes ${className}`} 
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#221a22",
          border: "1px solid rgba(236,72,153,0.3)",
          borderRadius: "var(--radius-md)",
          padding: "1rem",
          width: "100%",
          maxWidth: "320px",
          margin: "0 auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "#fbcfe8",
          position: "relative",
          overflow: "hidden",
          ...style
        }}
        aria-hidden="true"
      >
        <div style={{ borderBottom: "1px solid rgba(236,72,153,0.2)", paddingBottom: "0.5rem", marginBottom: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#f472b6", fontWeight: "bold" }}>Wrapped Wishes 🎀</span>
          <span style={{ fontSize: "0.65rem", padding: "1px 6px", backgroundColor: "#831843", color: "#fbcfe8", borderRadius: "10px" }}>Storefront</span>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <div style={{ width: "50px", height: "50px", backgroundColor: "#3b0764", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", border: "1px solid #701a75" }}>
            🎁
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3px" }}>
            <span style={{ color: "#fff", fontWeight: "bold", fontSize: "0.8rem" }}>Gifts That Feel Like a Hug</span>
            <span style={{ color: "#f472b6", fontSize: "0.7rem" }}>Supabase • Vercel • HTML/CSS/JS</span>
            <span style={{ color: "#22c55e", fontSize: "0.68rem", fontWeight: "bold", marginTop: "2px" }}>[ WhatsApp Order Enabled ]</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
