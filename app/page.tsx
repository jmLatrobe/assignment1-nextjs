"use client";

import Link from "next/link";

export default function Home({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "60px 20px",
        background: darkMode ? "#121212" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Welcome to Assignment 1
        </h1>
        <hr
          style={{
            width: "60%",
            margin: "0 auto 30px auto",
            border: `1px solid ${darkMode ? "white" : "#1976d2"}`,
          }}
        />

        {/* Card container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            { title: "About", path: "/about" },
            { title: "Tabs Page", path: "/tabs" },
            { title: "Pre-Lab Questions", path: "/prelab" },
            { title: "Escape Room", path: "/escaperoom" },
            { title: "Coding Races", path: "/codingraces" },
            { title: "Court Room", path: "/courtroom" },
          ].map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                style={{
                  width: "200px",
                  height: "100px",
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: darkMode ? "#222" : "#f9f9f9",
                  color: darkMode ? "white" : "black",
                  cursor: "pointer",
                }}
              >
                <h2 style={{ margin: 0 }}>{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
