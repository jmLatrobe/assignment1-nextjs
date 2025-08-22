"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        background: darkMode ? "#222" : "#1976d2",
        color: "white",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <span style={{ fontWeight: "bold", fontSize: "18px" }}>Assignment 1</span>

      <div>
        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          style={{
            marginRight: "12px",
            border: "1px solid white",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            background: "transparent",
            color: "white",
          }}
        >
          {darkMode ? "Dark" : "Light"}
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            fontSize: "22px",
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "220px",
          height: "100%",
          background: darkMode ? "#333" : "#fff",
          color: darkMode ? "white" : "black",
          padding: "20px",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          boxShadow: open ? "2px 0 8px rgba(0,0,0,0.3)" : "none",
          zIndex: 1000,
        }}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            marginBottom: "20px",
            color: darkMode ? "white" : "black",
          }}
        >
          ✕
        </button>

        {/* Links */}
        {[
          { title: "Home", path: "/" },
          { title: "About", path: "/about" },
          { title: "Tabs Page", path: "/tabs" },
          { title: "Pre-Lab", path: "/prelab" },
          { title: "Escape Room", path: "/escaperoom" },
          { title: "Coding Races", path: "/codingraces" },
          { title: "Court Room", path: "/courtroom" },
        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            style={{
              display: "block",
              padding: "10px 0",
              textDecoration: "none",
              color: darkMode ? "white" : "black",
            }}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
