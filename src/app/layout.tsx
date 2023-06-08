"use client";

import "@/app/css/globals.css";
import ScrollToTopButton from "@/app/modules/ScrollToTopButton";
import Navbar from "@/app/modules/navbar";
import Footer from "@/app/modules/footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wevement",
  description: "우리가 바꾸는 세상",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // js

  // web
  return (
    <html lang="kor">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
