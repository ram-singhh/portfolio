"use client";

import { useState, useEffect } from "react";

export default function TypingText() {
  const [text, setText] = useState("cloud technologies");

  useEffect(() => {
    const texts = [
      "Cloud Technologies",
      "Intelligent Web Applications",
      "AI/ML Fundamentals",
      "Clean UI And Intuitive UX",
      "Real-World Problem Solving",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;
      }

      timer = setTimeout(type, speed);
    };

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, []);

  return <span className="typing-text">{text}</span>;
}
