"use client";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#444",
        padding: "15px 20px",
        color: "#57b576ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      {/* Student Info on the left */}
      <div>
        Jeremiah Moussa | ID: 21596155
      </div>

      {/* Title centered/right */}
      <div style={{ fontSize: "20px", letterSpacing: "1px" }}>
        Assignment 1
      </div>
    </header>
  );
}


