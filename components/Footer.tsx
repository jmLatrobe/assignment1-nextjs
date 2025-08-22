"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        padding: "10px",
        color: "white",
        textAlign: "center",
      }}
    >
      © Jeremiah Moussa | Student Number: 21596155 |{" "}
      {new Date().toLocaleDateString()}
    </footer>
  );
}
