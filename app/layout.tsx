import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavOffset from "../components/NavOffset";
import '../styles/global.css';

export const metadata: Metadata = {
  icons: { icon: '/favicon.ico' },
  openGraph: {
    images: '/opengraph.jpg',
  },
  verification: {
    google: '8tSV9w6RXemjzTTzDYPpTO17MBILISwyw3209Qec08M',
  },
  other: {
    'msvalidate.01': '05C20B864F39C5927EDE879C9B069800',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500&family=Alegreya:ital,wght@0,400..900;1,400..900&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <NavOffset>{children}</NavOffset>
        <GoogleAnalytics gaId="G-L9YS5VN7NZ" />
        <Footer />
      </body>
    </html>
  );
}
