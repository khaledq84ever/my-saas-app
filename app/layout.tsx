import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LangProvider } from "@/lib/lang";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://my-saas-app-rouge-three.vercel.app"),
  title: {
    default: "Modern SaaS - Build Something Amazing",
    template: "%s | Modern SaaS",
  },
  description: "A powerful platform to help you build, scale, and grow your business with modern tools and features.",
  keywords: ["SaaS", "business", "platform", "growth", "tools", "software"],
  authors: [{ name: "Modern SaaS" }],
  creator: "Modern SaaS",
  publisher: "Modern SaaS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-saas-app-rouge-three.vercel.app",
    siteName: "Modern SaaS",
    title: "Modern SaaS - Build Something Amazing",
    description: "A powerful platform to help you build, scale, and grow your business.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modern SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern SaaS - Build Something Amazing",
    description: "A powerful platform to help you build, scale, and grow your business.",
    creator: "@saas",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LangProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CookieConsent />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}