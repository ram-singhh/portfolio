import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import JsonLd from "@/components/JsonLd";
import { Inter, Playfair_Display, Courier_Prime, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const courier = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Ram Singh",
    "Ram Singh portfolio",
    "Ram Singh web developer",
    "Ram Singh freelance web developer",
    "Freelance Web Developer India",
    "Web Developer Mumbai",
    "Frontend Developer Mumbai",
    "Freelance Web Developer Mumbai",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer"
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      ...(process.env.BING_SITE_VERIFICATION && { "msvalidate.01": process.env.BING_SITE_VERIFICATION }),
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.siteName,
    images: [
      {
        url: "/assets/images/Profile.jpg",
        width: 800,
        height: 800,
        alt: "Ram Singh - Freelance Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/images/Profile.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${courier.variable} ${caveat.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <PersonJsonLd />
        <WebSiteJsonLd />
        <JsonLd />
      </body>
    </html>
  );
}
