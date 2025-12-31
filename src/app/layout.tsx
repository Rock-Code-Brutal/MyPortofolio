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
  title: "Rocky | IT Support Specialist | Fullstack Developer | AI-Assisted Development Specialist",
  description: "Profesional IT dengan pengalaman mengelola infrastruktur kritis di sektor perbankan. Spesialisasi dalam pengembangan fullstack dengan metodologi AI-Assisted Development untuk percepatan delivery proyek berkualitas tinggi.",
  keywords: "IT Support, Fullstack Developer, AI-Assisted Development, Prompt Engineering, JavaScript, React, Next.js, Laravel, PHP, Banking Infrastructure, Enterprise Solutions",
  authors: [{ name: "Rocky" }],
  openGraph: {
    title: "Rocky | IT Support Specialist | Fullstack Developer",
    description: "Profesional IT spesialisasi dalam pengembangan fullstack dan AI-assisted development workflow",
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
