"use client";
import type { Metadata } from "next";
import { Footer, Navbar } from "@components";
import Providers from "./providers";
import { Inter } from "next/font/google";
import meta from "./meta";

import "@/styles/globals.css";

// export const metadata: Metadata = meta;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={inter.className}>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
