import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Focus Companion",
  description: "Virtual co-working with an AI companion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
