"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Adaptive Practice Platform | CBSE Classes IX-XII</title>
        <meta name="description" content="Personalized adaptive practice, diagnostic assessment, and mastery tracking for CBSE IX-XII" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <SessionProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
            Adaptive Practice Platform • CBSE Classes IX-XII & JEE/NEET Foundations • Built with Next.js & TypeScript
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
