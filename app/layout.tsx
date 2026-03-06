import Navbar from "@/features/layout/navbar";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Electronics",
  description: "Electronics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
