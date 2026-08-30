"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Work", href: "/projects/" },
    { name: "Services", href: "/services/" },
    { name: "About", href: "/about/" },
    { name: "Lab", href: "/design-system/" },
    { name: "Contact", href: "/contact/" },
  ];

  // Helper to check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    // Sync body overflow to prevent background scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            @ramsingh
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <nav aria-label="Main navigation">
              <ul className="nav-links">
                {navLinks.map((link) => (
                  link.name !== "Contact" && (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={isActive(link.href) ? "active" : ""}
                        aria-current={isActive(link.href) ? "page" : undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                ))}
              </ul>
            </nav>
            <Link 
              href="/contact/" 
              className="tactile-btn header-cta-btn"
              style={{ textDecoration: "none" }}
            >
              [ BOOK A PROJECT ]
            </Link>
            <button
              className={`mobile-menu-btn ${isOpen ? "active" : ""}`}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <nav
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="mobile-menu-overlay active"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
