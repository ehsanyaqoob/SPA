import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ehsan Yaqoob - Flutter Developer & UI/UX Designer',
  description: 'Portfolio of Ehsan Yaqoob, a Flutter Developer and UI/UX Designer specializing in beautiful, responsive, and user-centric mobile and web applications.',
  keywords: ['Flutter Developer', 'UI/UX Designer', 'Mobile App Developer', 'Web Developer', 'Ehsan Yaqoob'],
  authors: [{ name: 'Ehsan Yaqoob' }],
  creator: 'Ehsan Yaqoob',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ehsanyaqoob.com',
    title: 'Ehsan Yaqoob - Flutter Developer & UI/UX Designer',
    description: 'Portfolio of Ehsan Yaqoob, specializing in beautiful, responsive, and user-centric mobile and web applications.',
    siteName: 'Ehsan Yaqoob Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ehsan Yaqoob - Flutter Developer & UI/UX Designer',
    description: 'Portfolio of Ehsan Yaqoob, specializing in beautiful, responsive, and user-centric mobile and web applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
