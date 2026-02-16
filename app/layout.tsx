import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrezoAI - Transform Your Ideas into Stunning Presentations with AI",
  description: "AI-powered presentation generator that transforms your content into professional, stunning presentations in seconds.",
  keywords: ["AI", "presentations", "PowerPoint", "slides", "automation"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
