

import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AAC App",
  description: "An AAC app to help non-verbal autistic children communicate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className={inter.className}>{children}</div>

      </body>
    </html>
  );
}
