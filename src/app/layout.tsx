import type { Metadata } from "next";
import { Space_Grotesk, Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import GrainOverlay from "@/components/layout/GrainOverlay";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import { CartProvider } from "@/components/shop/CartContext";
import { channel } from "@/lib/youtube";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.productionName} | Film, Video & Creative Production Kenya`,
    template: `%s | ${siteConfig.productionName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.productionName,
    title: `${siteConfig.productionName} | Film, Video & Creative Production Kenya`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.productionName} | Film, Video & Creative Production Kenya`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.productionName,
      url: siteConfig.url,
      areaServed: "Kenya",
      sameAs: [channel.url],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
    {
      "@type": "Person",
      name: siteConfig.name,
      alternateName: channel.name,
      jobTitle: "Artist, Film Director & Creative Producer",
      sameAs: [channel.url],
      worksFor: { "@type": "Organization", name: siteConfig.productionName },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${dmSerif.variable} bg-bg text-text font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-near-black focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <CartProvider>
          <GrainOverlay />
          <CustomCursor />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileStickyBar />
        </CartProvider>
      </body>
    </html>
  );
}
