"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <main className="flex-1 p-8">
        <div className={inter.className}>{children}</div>
        </main>
      </body>
    </html>
  );
}
