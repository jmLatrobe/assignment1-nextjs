import "./globals.css";
import type { Metadata } from "next";
import RootWrapper from "../components/RootWrapper";

export const metadata: Metadata = {
  title: "Assignment 1",
  description: "Next.js Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}













