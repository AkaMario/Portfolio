import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AsideNav from "@/components/AsideNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mario Developer",
  description: "Portfolio of Mario Uparela - Web Developer and UX/UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AsideNav />
        {children}
      </body>
    </html>
  );
}
