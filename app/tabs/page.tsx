"use client";

import { useState, useEffect } from "react";

export default function TabsPage() {
  const [tabs, setTabs] = useState<{ id: number; title: string; content: string }[]>([]);
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [output, setOutput] = useState("");

  // Load from localStorage
  useEffect(() => {
    const savedTabs = localStorage.getItem("tabs");
    if (savedTabs) {
      setTabs(JSON.parse(savedTabs));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (tabs.length > 0) {
      localStorage.setItem("tabs", JSON.stringify(tabs));
    }
  }, [tabs]);

  const addTab = () => {
    if (tabs.length >= 15) return alert("Maximum of 15 tabs reached!");
    const newTab = {
      id: Date.now(),
      title: `Tab ${tabs.length + 1}`,
      content: "New tab content",
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const removeTab = (id: number) => {
    setTabs(tabs.filter((tab) => tab.id !== id));
    if (activeTab === id) setActiveTab(null);
  };

  const updateTab = (id: number, key: "title" | "content", value: string) => {
    setTabs(
      tabs.map((tab) =>
        tab.id === id ? { ...tab, [key]: value } : tab
      )
    );
  };

  // ✅ Updated output generator
  const generateOutput = () => {
    const html = `
<div>
  <!-- Tabs Header -->
  <ul style="display:flex; gap:10px; list-style:none; padding:0; margin:0;">
    ${tabs
      .map(
        (tab, index) => `
      <li 
        style="
          padding:5px 10px; 
          border:1px solid #ccc; 
          cursor:pointer; 
          background:${activeTab === tab.id ? "#e3f2fd" : "#fff"};
          font-weight:${activeTab === tab.id ? "bold" : "normal"};
        "
        onclick="document.querySelectorAll('.tab-content').forEach((el,i)=>el.style.display = i==${index} ? 'block':'none')"
      >
        ${tab.title}
      </li>`
      )
      .join("")}
  </ul>

  <!-- Tabs Content -->
  <div style="margin-top:10px; padding:10px; border:1px solid #ccc;">
    ${tabs
      .map(
        (tab, index) => `
      <div class="tab-content" style="display:${activeTab === tab.id ? "block" : "none"};">
        ${tab.content}
      </div>`
      )
      .join("")}
  </div>
</div>`;
    setOutput(html.trim());
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#222",
        }}
      >
        Tabs Page
      </h1>

      {/* Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={addTab}
          style={{
            padding: "8px 12px",
            border: "1px solid #1976d2",
            background: "#1976d2",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ＋ Add Tab
        </button>
        <button
          onClick={generateOutput}
          style={{
            padding: "8px 12px",
            border: "1px solid #388e3c",
            background: "#388e3c",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ⚡ Generate Output
        </button>
      </div>

      {/* Tab buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              border: activeTab === tab.id ? "2px solid #1976d2" : "1px solid #ccc",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              background: activeTab === tab.id ? "#e3f2fd" : "#fff",
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTab(tab.id);
              }}
              style={{
                border: "none",
                background: "transparent",
                color: "red",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Tab editor */}
      {activeTab && (
        <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
          {tabs
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <div key={tab.id}>
                <input
                  type="text"
                  value={tab.title}
                  onChange={(e) => updateTab(tab.id, "title", e.target.value)}
                  style={{
                    display: "block",
                    width: "100%",
                    marginBottom: "10px",
                    padding: "8px",
                    border: "1px solid #ccc",
                  }}
                />
                <textarea
                  value={tab.content}
                  onChange={(e) => updateTab(tab.id, "content", e.target.value)}
                  style={{
                    width: "100%",
                    height: "120px",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            ))}
        </div>
      )}

      {/* Output Section */}
      {output && (
        <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}>
          <strong>Generated HTML:</strong>
          <pre
            style={{
              width: "100%",
              maxHeight: "350px",
              overflowY: "auto",
              marginTop: "10px",
              padding: "10px",
              fontFamily: "Consolas, monospace",
              fontSize: "0.9rem",
              background: "#f5f5f5",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}

