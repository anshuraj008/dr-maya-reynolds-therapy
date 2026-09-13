import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteMetadata, generateStructuredData } from "@/lib/seo";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#24352F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased selection:bg-secondary selection:text-primary"
        suppressHydrationWarning
      >
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-surface focus:rounded-md focus:shadow-elevated focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
