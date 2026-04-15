import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Menace Hi-Fi — Coming Soon to West Loop",
  description:
    "Little Menace Hi-Fi. A listening room, coffee shop, and community in Chicago's West Loop. Coming soon.",
  metadataBase: new URL("https://littlemenacehifi.com"),
  openGraph: {
    title: "Little Menace Hi-Fi",
    description:
      "A listening room, coffee shop, and community in Chicago's West Loop. Coming soon.",
    url: "https://littlemenacehifi.com",
    siteName: "Little Menace Hi-Fi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Menace Hi-Fi",
    description:
      "A listening room, coffee shop, and community in Chicago's West Loop. Coming soon.",
  },
  keywords: [
    "hi-fi",
    "listening room",
    "coffee shop",
    "vinyl",
    "Chicago",
    "West Loop",
    "Little Menace",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-cream text-black leading-relaxed">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
