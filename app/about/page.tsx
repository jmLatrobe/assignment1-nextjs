"use client";

export default function AboutPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "25px",
          color: "#222",
        }}
      >
        About This Project
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#333" }}>
        This project was developed as part of <strong>Assignment 1</strong>.  
        The aim was to design and implement an interactive web application with
        <strong> Tabs functionality</strong>, <strong>Theme support (Light & Dark mode)</strong>,
        and a <strong>Hamburger menu</strong>. The focus was on building a clean UI,
        maintaining code quality, version control practices, and generating valid inline HTML output.
      </p>

      {/* Features Section */}
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "15px",
          borderBottom: "2px solid #1976d2",
          display: "inline-block",
          paddingBottom: "5px",
          color: "#1976d2",
        }}
      >
        Features
      </h2>
      <ul
        style={{
          fontSize: "1rem",
          lineHeight: "1.6",
          paddingLeft: "20px",
          marginBottom: "30px",
        }}
      >
        <li>Responsive <strong>Navigation Bar</strong> with Hamburger menu</li>
        <li>Light and Dark <strong>Theme Toggle</strong></li>
        <li><strong>Tabs Page</strong> supporting up to 15 editable tabs</li>
        <li>Persistent storage of tabs using <strong>localStorage</strong></li>
        <li><strong>Output Button</strong> that generates inline HTML code</li>
        <li>Simple, professional design using inline styling</li>
      </ul>

      {/* Demo Video Section */}
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "15px",
          borderBottom: "2px solid #1976d2",
          display: "inline-block",
          paddingBottom: "5px",
          color: "#1976d2",
        }}
      >
        Demo Video
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "20px", color: "#444" }}>
        The following demonstration video showcases the application’s main features,
        including adding/removing tabs, switching themes, and exporting inline HTML output.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <video
          controls
          width="700"
          style={{
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          <source src="/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Footer */}
      <p
        style={{
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#666",
          marginTop: "20px",
        }}
      >
        © 2025 Assignment 1 Project – Developed with Next.js & React
      </p>
    </div>
  );
}

