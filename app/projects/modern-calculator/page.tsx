"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";
import { projectsData } from "@/data/projects";

export default function ModernCalculator() {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState("");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const project = projectsData.find((p) => p.slug === "modern-calculator")!;

  // Find next project index
  const currentIndex = projectsData.findIndex((p) => p.slug === "modern-calculator");
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  // Store state in ref to avoid stale closure issues in stable event listeners
  const stateRef = useRef({ currentOperand, previousValue, operation, isError });
  useEffect(() => {
    stateRef.current = { currentOperand, previousValue, operation, isError };
  }, [currentOperand, previousValue, operation, isError]);

  const clear = () => {
    setCurrentOperand("0");
    setPreviousOperand("");
    setPreviousValue(null);
    setOperation(null);
    setIsError(false);
  };

  const deleteChar = () => {
    const curr = stateRef.current.currentOperand;
    if (curr === "0" || stateRef.current.isError) return;
    let next = curr.slice(0, -1);
    if (next === "" || next === "-") {
      next = "0";
    }
    setCurrentOperand(next);
  };

  const appendNumber = (num: string) => {
    const curr = stateRef.current.currentOperand;
    if (stateRef.current.isError) return;
    if (num === "." && curr.includes(".")) return;
    
    if (curr === "0" && num !== ".") {
      setCurrentOperand(num);
    } else {
      setCurrentOperand(curr + num);
    }
  };

  const chooseOperation = (op: string) => {
    const { currentOperand: curr, previousValue: prev, operation: activeOp, isError } = stateRef.current;
    if (isError || curr === "") return;

    let computedPrev = prev;
    let computedCurr = parseFloat(curr);

    if (prev !== null && activeOp !== null) {
      const result = runCalculation(prev, computedCurr, activeOp);
      if (result === null) return; // divide by zero error handled
      computedPrev = result;
      setPreviousValue(result);
    } else {
      computedPrev = computedCurr;
      setPreviousValue(computedCurr);
    }

    setOperation(op);
    setPreviousOperand(`${roundNumber(computedPrev!)} ${op}`);
    setCurrentOperand("0");
  };

  const runCalculation = (prev: number, current: number, op: string): number | null => {
    let result: number;
    switch (op) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "×":
      case "*":
        result = prev * current;
        break;
      case "÷":
      case "/":
        if (current === 0) {
          showError();
          return null;
        }
        result = prev / current;
        break;
      case "%":
        result = prev * (current / 100);
        break;
      default:
        return null;
    }
    return roundNumber(result);
  };

  const calculate = () => {
    const { currentOperand: curr, previousValue: prev, operation: op, isError } = stateRef.current;
    if (isError || prev === null || op === null) return;

    const current = parseFloat(curr);
    if (isNaN(current)) return;

    const result = runCalculation(prev, current, op);
    if (result === null) return;

    setCurrentOperand(result.toString());
    setOperation(null);
    setPreviousOperand("");
    setPreviousValue(null);
  };

  const roundNumber = (num: number): number => {
    return Math.round(num * 100000000) / 100000000;
  };

  const showError = () => {
    setIsError(true);
    setCurrentOperand("Error");
    setTimeout(() => {
      clear();
    }, 2000);
  };

  // Keyboard support listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = ["/", "*", "+", "-", "=", "Enter", "Escape", "Backspace", "%"];
      if (keys.includes(e.key)) {
        e.preventDefault();
      }

      setPressedKey(e.key);

      if (e.key >= "0" && e.key <= "9") appendNumber(e.key);
      if (e.key === ".") appendNumber(".");
      if (e.key === "+") chooseOperation("+");
      if (e.key === "-") chooseOperation("-");
      if (e.key === "*") chooseOperation("×");
      if (e.key === "/") chooseOperation("÷");
      if (e.key === "%") chooseOperation("%");
      if (e.key === "Enter" || e.key === "=") calculate();
      if (e.key === "Escape") clear();
      if (e.key === "Backspace") deleteChar();
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Format font size dynamically for long numbers
  const displayFontSize = () => {
    if (currentOperand.length > 12) return "1.5rem";
    if (currentOperand.length > 9) return "2rem";
    return undefined;
  };

  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "6rem" }}>
      {/* Desk Background */}
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "800px" }}>
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
          <ol style={{ display: "flex", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", alignItems: "center", flexWrap: "wrap" }}>
            <li>
              <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>HOME</Link>
            </li>
            <li aria-hidden="true" style={{ margin: "0 0.2rem" }}>&gt;</li>
            <li>
              <Link href="/projects/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>PROJECTS</Link>
            </li>
            <li aria-hidden="true" style={{ margin: "0 0.2rem" }}>&gt;</li>
            <li style={{ color: "var(--color-ink-red)", fontWeight: "bold" }}>
              {project.title.toUpperCase()}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/projects/" className="tactile-btn" style={{ textDecoration: "none" }} aria-label="Back to project archive">
            [ &larr; BACK TO ARCHIVE ]
          </Link>
        </div>

        {/* Breadcrumb JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.ramsingh.dev/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Projects",
                  "item": "https://www.ramsingh.dev/projects/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": project.title,
                  "item": "https://www.ramsingh.dev/projects/modern-calculator/"
                }
              ]
            })
          }}
        />

        {/* Interactive Calculator Section */}
        <section aria-labelledby="project-title" style={{ marginBottom: "3rem" }}>
          <Paper variant="craft" rotation={-0.8} padding="large" style={{ position: "relative" }}>
            <Tape rotation={-2} position="top-left" width="100px" />
            
            <header>
              <div style={{ marginBottom: "1rem" }}>
                <TypewriterLabel variant="dymo" rotation={1.5}>
                  {project.category.toUpperCase()}
                </TypewriterLabel>
              </div>
              
              <h1 id="project-title" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2rem, 6vw, 3.5rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                lineHeight: "1.1", 
                margin: "0 0 1rem 0" 
              }}>
                {project.title}
              </h1>
              
              <p style={{ 
                fontFamily: "var(--font-primary)", 
                fontSize: "1.1rem", 
                lineHeight: "1.5", 
                color: "#2c251f", 
                fontWeight: 500, 
                margin: "0 0 2rem 0" 
              }}>
                {project.shortDescription}
              </p>
            </header>

            {/* Interactive Calculator Widget */}
            <div style={{ margin: "2rem 0" }}>
              <div className="calculator-container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", width: "100%", margin: "0 auto" }}>
                <div className="calculator" style={{ margin: "0 auto", width: "100%", maxWidth: "340px" }}>
                  <div className="display">
                    <div className="previous-operand" id="previous">
                      {previousOperand}
                    </div>
                    <div
                      className="current-operand"
                      id="current"
                      style={{
                        fontSize: displayFontSize(),
                        color: isError ? "#ef4444" : undefined,
                      }}
                    >
                      {currentOperand}
                    </div>
                  </div>
                  <div className="buttons">
                    <button
                      className={`btn btn-function ${pressedKey === "Escape" ? "btn-pressed" : ""}`}
                      onClick={clear}
                      aria-label="Clear all"
                    >
                      AC
                    </button>
                    <button
                      className={`btn btn-function ${pressedKey === "Backspace" ? "btn-pressed" : ""}`}
                      onClick={deleteChar}
                      aria-label="Delete last entry"
                    >
                      DEL
                    </button>
                    <button
                      className={`btn btn-function ${pressedKey === "%" ? "btn-pressed" : ""}`}
                      onClick={() => chooseOperation("%")}
                      aria-label="Modulo"
                    >
                      %
                    </button>
                    <button
                      className={`btn btn-operator ${pressedKey === "/" ? "btn-pressed" : ""}`}
                      onClick={() => chooseOperation("÷")}
                      aria-label="Divide"
                    >
                      ÷
                    </button>

                    <button
                      className={`btn btn-number ${pressedKey === "7" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("7")}
                      aria-label="Seven"
                    >
                      7
                    </button>
                    <button
                      className={`btn btn-number ${pressedKey === "8" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("8")}
                      aria-label="Eight"
                    >
                      8
                    </button>
                    <button
                      className={`btn btn-number ${pressedKey === "9" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("9")}
                      aria-label="Nine"
                    >
                      9
                    </button>
                    <button
                      className={`btn btn-operator ${pressedKey === "*" ? "btn-pressed" : ""}`}
                      onClick={() => chooseOperation("×")}
                      aria-label="Multiply"
                    >
                      ×
                    </button>

                    <button
                      className={`btn btn-number ${pressedKey === "4" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("4")}
                      aria-label="Four"
                    >
                      4
                    </button>
                    <button
                      className={`btn btn-number ${pressedKey === "5" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("5")}
                      aria-label="Five"
                    >
                      5
                    </button>
                    <button
                      className={`btn btn-number ${pressedKey === "6" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("6")}
                      aria-label="Six"
                    >
                      6
                    </button>
                    <button
                      className={`btn btn-operator ${pressedKey === "-" ? "btn-pressed" : ""}`}
                      onClick={() => chooseOperation("-")}
                      aria-label="Subtract"
                    >
                      -
                    </button>

                    <button
                      className={`btn btn-number ${pressedKey === "1" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("1")}
                      aria-label="One"
                    >
                      1
                    </button>
                    <button
                      className={`btn btn-number ${pressedKey === "2" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("2")}
                      aria-label="Two"
                    >
                      2
                    </button>
                    <button
                      className={`btn btn-number ${pressedKey === "3" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("3")}
                      aria-label="Three"
                    >
                      3
                    </button>
                    <button
                      className={`btn btn-operator ${pressedKey === "+" ? "btn-pressed" : ""}`}
                      onClick={() => chooseOperation("+")}
                      aria-label="Add"
                    >
                      +
                    </button>

                    <button
                      className={`btn btn-number btn-zero ${pressedKey === "0" ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber("0")}
                      aria-label="Zero"
                    >
                      0
                    </button>
                    <button
                      className={`btn btn-number ${pressedKey === "." ? "btn-pressed" : ""}`}
                      onClick={() => appendNumber(".")}
                      aria-label="Decimal point"
                    >
                      .
                    </button>
                    <button
                      className={`btn btn-equals ${pressedKey === "Enter" || pressedKey === "=" ? "btn-pressed" : ""}`}
                      onClick={calculate}
                      aria-label="Calculate result"
                    >
                      =
                    </button>
                  </div>
                </div>

                 <div className="features" style={{ width: "100%", maxWidth: "340px", margin: "0 auto" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: "bold", color: "var(--text-dark)", marginBottom: "0.5rem" }}>
                    Features
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", color: "#333", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <li>✓ Keyboard support</li>
                    <li>✓ All basic operations</li>
                    <li>✓ Modulo operation</li>
                    <li>✓ Error handling</li>
                    <li>✓ Responsive design</li>
                  </ul>

                  <div className="keyboard-shortcuts" style={{ marginTop: "1rem" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "bold", color: "var(--text-dark)", marginBottom: "0.5rem" }}>
                      Keyboard Shortcuts
                    </div>
                    <div className="shortcut-list">
                      <div className="shortcut">
                        <kbd>0-9</kbd>
                        <span>Numbers</span>
                      </div>
                      <div className="shortcut">
                        <kbd>+</kbd>
                        <kbd>-</kbd>
                        <kbd>*</kbd>
                        <kbd>/</kbd>
                        <span>Operations</span>
                      </div>
                      <div className="shortcut">
                        <kbd>Enter</kbd>
                        <span>Calculate</span>
                      </div>
                      <div className="shortcut">
                        <kbd>Esc</kbd>
                        <span>Clear</span>
                      </div>
                      <div className="shortcut">
                        <kbd>Backspace</kbd>
                        <span>Delete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Source Link */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "2rem" }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label="View source code on GitHub">
                  [ VIEW SOURCE CODE ]
                </a>
              )}
            </div>
          </Paper>
        </section>

        {/* 2. About & Scope Sheet */}
        <section aria-labelledby="section-about" style={{ marginBottom: "3rem" }}>
          <Paper variant="lined" rotation={1.2} padding="large">
            <h2 id="section-about" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-red)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              01. ABOUT THE PROJECT
            </h2>
            
            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "1.5rem" }}>
              {project.description}
            </p>

            <h3 style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "0.95rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "0.5rem"
            }}>
              Why It Exists
            </h3>
            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", margin: 0 }}>
              {project.whyItExists}
            </p>
          </Paper>
        </section>

        {/* 3. Problem & Approach Sheet */}
        {(project.problem || project.approach) && (
          <section aria-labelledby="section-engineering" style={{ marginBottom: "3rem" }}>
            <Paper variant="light" rotation={-1.5} padding="large">
              <Tape rotation={3} position="top-right" width="80px" />
              
              <h2 id="section-engineering" style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "1.25rem", 
                fontWeight: 700, 
                color: "var(--text-dark)", 
                textTransform: "uppercase",
                marginBottom: "1.5rem"
              }}>
                02. PROBLEM &amp; APPROACH
              </h2>

              {project.problem && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "0.95rem", 
                    fontWeight: 700, 
                    color: "var(--color-ink-red)", 
                    textTransform: "uppercase",
                    marginBottom: "0.5rem"
                  }}>
                    The Problem
                  </h3>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", lineHeight: "1.6", color: "#222", margin: 0 }}>
                    {project.problem}
                  </p>
                </div>
              )}

              {project.approach && (
                <div>
                  <h3 style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "0.95rem", 
                    fontWeight: 700, 
                    color: "var(--color-ink-blue)", 
                    textTransform: "uppercase",
                    marginBottom: "0.5rem"
                  }}>
                    The Approach
                  </h3>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", lineHeight: "1.6", color: "#222", margin: 0 }}>
                    {project.approach}
                  </p>
                </div>
              )}
            </Paper>
          </section>
        )}

        {/* 4. Technical Architecture Sheet */}
        <section aria-labelledby="section-architecture" style={{ marginBottom: "3rem" }}>
          <Paper variant="grid" rotation={0.5} padding="large">
            <h2 id="section-architecture" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              03. ARCHITECTURE &amp; IMPLEMENTATION
            </h2>

            {/* Tech Tags */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.9rem", 
                fontWeight: 700, 
                color: "var(--text-dark)", 
                marginBottom: "0.75rem"
              }}>
                Technologies Utilized
              </h3>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.75rem", 
                      fontWeight: "bold",
                      backgroundColor: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: "2px",
                      padding: "2px 6px",
                      color: "#333"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Implementation details */}
            <div>
              <h3 style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.9rem", 
                fontWeight: 700, 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem"
              }}>
                Technical Execution
              </h3>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#222", margin: 0 }}>
                {project.implementation}
              </p>
            </div>
          </Paper>
        </section>

        {/* 5. Results & Lessons Sheet */}
        <section aria-labelledby="section-results" style={{ marginBottom: "4rem" }}>
          <Paper variant="lined" rotation={-0.6} padding="large">
            <h2 id="section-results" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-green)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              04. THE RESULTING SYSTEM &amp; LESSONS
            </h2>

            {/* Result */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.9rem", 
                fontWeight: 700, 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem"
              }}>
                What I Built
              </h3>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", margin: 0 }}>
                {project.result}
              </p>
            </div>

            {/* Lessons */}
            {project.lessons && (
              <div>
                <h3 style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "0.9rem", 
                  fontWeight: 700, 
                  color: "var(--text-dark)", 
                  marginBottom: "0.5rem"
                }}>
                  Key Takeaways
                </h3>
                <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", margin: 0 }}>
                  {project.lessons}
                </p>
              </div>
            )}
          </Paper>
        </section>

        {/* Next Project Link */}
        <section style={{ marginBottom: "4rem", display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1.5deg)", width: "100%", maxWidth: "400px" }}>
            <Paper variant="light" rotation={0} padding="medium" style={{ textAlign: "center", border: "1px dashed var(--border-secondary)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                UP NEXT IN ARCHIVE
              </span>
              <Link 
                href={`/projects/${nextProject.slug}/`}
                style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "1.2rem", 
                  fontWeight: 700, 
                  fontStyle: "italic",
                  color: "var(--text-dark)", 
                  textDecoration: "underline" 
                }}
              >
                {nextProject.title} &rarr;
              </Link>
            </Paper>
          </div>
        </section>

        {/* 6. Freelance CTA */}
        <section aria-labelledby="cta-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(-1deg)", width: "100%", maxWidth: "560px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                LIKE WHAT YOU SEE?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.4", marginBottom: "1.5rem" }}>
                Have something similar in mind? Let's build your next web application or interactive layout together.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5} fontSize="1.25rem">
                  let's collaborate on your goals
                </HandwrittenNote>
              </div>

              <div>
                <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a project with Ram Singh">
                  [ BOOK A PROJECT ]
                </Link>
              </div>
            </Paper>
          </div>
        </section>

      </div>
    </main>
  );
}
