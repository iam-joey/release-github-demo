import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "semantic-release-demo",
  description: "Automated versioning with conventional commits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex items-center justify-between border-b border-zinc-200 px-8 py-4 dark:border-zinc-800">
          <a href="/" className="text-sm font-semibold text-zinc-900 dark:text-white">
            release-demo
          </a>
          <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a href="/" className="hover:text-zinc-900 dark:hover:text-white">Home</a>
            <a href="/about" className="hover:text-zinc-900 dark:hover:text-white">About</a>
            <a href="/solana" className="hover:text-zinc-900 dark:hover:text-white">Solana</a>
          </div>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
