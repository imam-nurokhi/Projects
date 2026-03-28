import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://imam-nurokhi.dev"),
  title: "Muhammad Imam Nurokhi | IT Product Architect & Full Stack Developer",
  description:
    "Portfolio of Muhammad Imam Nurokhi — IT Product Architect, Full Stack Developer (React/Node.js/Next.js), Odoo ERP Specialist, and UI/UX Enthusiast based in Indonesia.",
  keywords: [
    "Muhammad Imam Nurokhi",
    "IT Product Architect",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Odoo Developer",
    "ERP Specialist",
    "Next.js",
    "UI/UX",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Imam Nurokhi" }],
  creator: "Muhammad Imam Nurokhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imam-nurokhi.dev",
    title: "Muhammad Imam Nurokhi | IT Product Architect & Full Stack Developer",
    description:
      "Portfolio of Muhammad Imam Nurokhi — IT Product Architect, Full Stack Developer, Odoo ERP Specialist.",
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
    title: "Muhammad Imam Nurokhi | IT Product Architect & Full Stack Developer",
    description:
      "Portfolio of Muhammad Imam Nurokhi — IT Product Architect, Full Stack Developer, Odoo ERP Specialist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Load Google Fonts at runtime via link tag (non-blocking for build) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#0A0A0F] text-white">
        {children}
      </body>
    </html>
  );
}
