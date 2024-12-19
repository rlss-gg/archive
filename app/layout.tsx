import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RLSS.GG Item Database",
  description: "A collection of (almost) every item in Rocket League Sideswipe",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
