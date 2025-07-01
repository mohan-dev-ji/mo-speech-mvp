import { Manrope } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Mo Speech",
  description: "Your AI-powered speech therapy assistant",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
