import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rocky | IT Support Specialist | Fullstack Developer | AI-Assisted Developer",
  description: "IT Professional dengan pengalaman menangani infrastruktur kritis perbankan. Spesialisasi dalam Fullstack Development dengan AI-assisted workflow untuk delivery proyek yang efisien.",
  keywords: "IT Support, Fullstack Developer, AI-Assisted Development, Prompt Engineering, JavaScript, React, Next.js, Laravel, PHP, Banking Infrastructure",
  authors: [{ name: "Rocky" }],
  openGraph: {
    title: "Rocky | IT Support Specialist | Fullstack Developer",
    description: "IT Professional spesialisasi dalam Fullstack Development dan AI-assisted workflow",
    url: "https://my-portofolio-eta-seven.vercel.app",
    siteName: "Rocky Portfolio",
    type: "website",
  },
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
