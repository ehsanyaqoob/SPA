import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ehsan Yaqoob | App Developer",
  description:
    "Ehsan Yaqoob — Flutter and Mobile App Developer skilled in building scalable Android and iOS apps with clean architecture, intuitive UI/UX, and seamless performance.",
icons: {
    icon: '/spaicon.png',
    shortcut: '/spaicon.png',
    apple: '/spaicon.png',
  },
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "Cross Platform Developer",
    "UI/UX Designer",
    "Ehsan Yaqoob Portfolio",
  ],
  authors: [{ name: "Ehsan Yaqoob", url: "https://github.com/ehsanyaqoob" }],
  creator: "Ehsan Yaqoob",
  publisher: "Ehsan Yaqoob",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ehsanyaqoob.com",
    title: "Ehsan Yaqoob | Flutter & Mobile App Developer",
    description:
      "Portfolio of Ehsan Yaqoob — building modern, high-performance Flutter apps for Android and iOS platforms.",
    siteName: "Ehsan Yaqoob Portfolio",
    images: [
      {
        url: "https://ehsanyaqoob.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ehsan Yaqoob Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehsan Yaqoob | Flutter & Mobile App Developer",
    description:
      "Flutter & Mobile App Developer specializing in Android, iOS, and cross-platform app development with a focus on performance and design.",
    creator: "@ehsanyaqoob",
    images: ["https://ehsanyaqoob.com/og-image.jpg"],
  },
  metadataBase: new URL("https://ehsanyaqoob.com"),
};

import { NexusBackground } from "@/components/ui/NexusBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon ager change karna hy tu src mein osi file ka name do jo pulic mein parha hy */}
        <link rel="icon" href="/spaicon.png" type="image/jpeg" />
        <link rel="shortcut icon" href="/spaicon.png" type="image/jpeg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NexusBackground />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
