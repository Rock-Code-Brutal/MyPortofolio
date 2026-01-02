import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { LanguageProvider } from '@/contexts/LanguageContext';
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
  description: "IT Professional with experience managing critical infrastructure in the banking sector. Specializing in fullstack development with AI-Assisted Development methodology for high-quality project delivery acceleration.",
  keywords: "IT Support, Fullstack Developer, AI-Assisted Development, Prompt Engineering, JavaScript, React, Next.js, Laravel, PHP, Banking Infrastructure, Enterprise Solutions",
  authors: [{ name: "Rocky" }],
  openGraph: {
    title: "Rocky | IT Support Specialist | Fullstack Developer",
    description: "IT Professional specializing in fullstack development and AI-assisted development workflow",
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
