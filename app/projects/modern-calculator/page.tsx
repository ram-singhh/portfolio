"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ModernCalculator() {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState("");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

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
    <>
      <nav className="navbar" style={{ position: "absolute" }}>
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            @ramsingh
          </Link>
          <div className="nav-links">
            <Link href="/projects/" className="btn btn-secondary">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </nav>

      <div className="app-container" style={{ paddingTop: "8rem" }}>
        <div className="app-header">
          <h1 className="app-title">#modern-calculator</h1>
          <p className="app-subtitle">A fully functional calculator with keyboard support</p>
        </div>

        <div className="calculator-container">
          <div className="calculator">
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

          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>✓ Keyboard support</li>
              <li>✓ All basic operations</li>
              <li>✓ Modulo operation</li>
              <li>✓ Error handling</li>
              <li>✓ Responsive design</li>
            </ul>

            <div className="keyboard-shortcuts">
              <h4>Keyboard Shortcuts</h4>
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

        <div className="app-footer">
          <p>
            Built with HTML, CSS & JavaScript by <Link href="/">Ram Singh</Link>
          </p>
          <div className="app-links">
            <a href="https://github.com/Ramsingh4656/Modern-Calculator" target="_blank" rel="noopener noreferrer">
              View Source
            </a>
            <Link href="/projects/">More Projects</Link>
          </div>
        </div>
      </div>
    </>
  );
}
