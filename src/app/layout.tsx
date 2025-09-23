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
  title: "Rocky | Web Developer Portfolio",
  description: "Personal portfolio of Rocky - Web Developer specializing in JavaScript, React, Next.js, and Laravel. View my projects and get in touch!",
  keywords: "web developer, portfolio, JavaScript, React, Next.js, Laravel, PHP",
  authors: [{ name: "Rocky" }],
  openGraph: {
    title: "Rocky | Web Developer Portfolio",
    description: "Personal portfolio showcasing web development projects and skills",
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
