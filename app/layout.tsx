import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Calvin — Software Engineering Portfolio",
  description:
    "Bachelor of Computer Science student at Monash University Malaysia focusing on low-level systems, algorithms, and cryptography.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`scroll-smooth h-full ${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable}`}
    >
      <body className="bg-stonebg text-ink font-sans antialiased min-h-full selection:bg-emerald selection:text-white pb-24">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
