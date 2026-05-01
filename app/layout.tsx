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
  title: "Modern SaaS - Build Something Amazing",
  description: "A powerful platform to help you build, scale, and grow your business with modern tools and features.",
  keywords: "SaaS, business, platform, growth, tools",
  openGraph: {
    title: "Modern SaaS - Build Something Amazing",
    description: "A powerful platform to help you build, scale, and grow your business.",
    type: "website",
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