"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
// import NavBar from "./components/NavBar";
// import TestRouter from "./components/TestRouter";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "AAC App",
//   description: "An AAC app to help non-verbal autistic children communicate.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-300">
        {/* <NavBar /> */}
        {/* <TestRouter /> */}
        <main className="flex-1 p-8">
        <div className={inter.className}>{children}</div>
        </main>
      </body>
    </html>
  );
}
