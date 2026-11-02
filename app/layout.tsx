import "./globals.css";
import type { Metadata } from "next";
import { Caveat, Fraunces, Instrument_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NexusBackground } from "@/components/NexusBackground";
import { contact, person, seo } from "@/site.config";

const display = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-display" });
const sans = Instrument_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const hand = Caveat({ subsets: ["latin"], display: "swap", variable: "--font-hand" });

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: seo.title,
  description: seo.description,
  icons: { icon: seo.favicon, shortcut: seo.favicon, apple: seo.favicon },
  keywords: seo.keywords,
  authors: [{ name: person.name, url: contact.github }],
  creator: person.name,
  publisher: person.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.url,
    title: seo.title,
    description: seo.description,
    siteName: person.name,
    images: [{ url: seo.ogImage, alt: person.name }],
  },
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
    creator: seo.twitter,
    images: [seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${hand.variable}`}>
      <body>
        <NexusBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
