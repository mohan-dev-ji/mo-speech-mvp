import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mo Speech",
  description: "Your AI-powered speech therapy assistant",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-slate-200">
          <main className="flex-1 p-8">
            <div className={inter.className}>{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
