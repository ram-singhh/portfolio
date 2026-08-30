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
          backgroundColor: "#161514",
          border: "2px solid var(--border-secondary)",
          borderRadius: "var(--radius-md)",
          padding: "1.5rem",
          width: "100%",
          maxWidth: "320px",
          margin: "0 auto",
          boxShadow: "inset 0 0 15px rgba(0,0,0,0.6)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
          userSelect: "none",
          ...style
        }}
        aria-hidden="true"
      >
        {/* Mock calculator display */}
        <div style={{
          width: "100%",
          height: "36px",
          backgroundColor: "#0d0c0c",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 0.5rem",
          marginBottom: "1rem",
          color: "#22c55e",
          fontWeight: "bold",
          fontSize: "1rem",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.8)"
        }}>
          123,456.78
        </div>
        {/* Mock buttons */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.5rem",
          width: "100%"
        }}>
          {["C", "±", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((btn, idx) => (
            <div 
              key={idx} 
              style={{
                gridColumn: btn === "0" ? "span 2" : undefined,
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: btn === "=" ? "var(--color-ink-red)" : "#221e1b",
                color: btn === "=" ? "#fff" : "var(--text-primary)",
                border: "1px solid rgba(0,0,0,0.3)",
                borderRadius: "2px",
                fontSize: "0.75rem",
                fontWeight: "bold",
                boxShadow: "0 1px 2px rgba(0,0,0,0.4)"
              }}
            >
              {btn}
            </div>
          ))}
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

  return null;
}
