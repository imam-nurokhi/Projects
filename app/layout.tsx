import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://imam-nurokhi.dev"),
  title: "Muhammad Imam Nurokhi | Senior Software Developer & Tech Lead",
  description:
    "Portfolio of Muhammad Imam Nurokhi — Senior Software Developer, Full-Stack Engineer & Tech Lead with 11+ years of experience delivering high-impact digital solutions across e-Commerce, Auditing, and ERP sectors.",
  keywords: [
    "Muhammad Imam Nurokhi",
    "Senior Software Developer",
    "Tech Lead",
    "Full Stack Engineer",
    "Go Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js",
    "ERPNext",
    "Odoo",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Imam Nurokhi" }],
  creator: "Muhammad Imam Nurokhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imam-nurokhi.dev",
    title: "Muhammad Imam Nurokhi | Senior Software Developer & Tech Lead",
    description:
      "Portfolio of Muhammad Imam Nurokhi — Senior Software Developer, Full-Stack Engineer & Tech Lead.",
    siteName: "Imam Nurokhi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Imam Nurokhi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Imam Nurokhi | Senior Software Developer & Tech Lead",
    description:
      "Portfolio of Muhammad Imam Nurokhi — Senior Software Developer, Full-Stack Engineer & Tech Lead.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
