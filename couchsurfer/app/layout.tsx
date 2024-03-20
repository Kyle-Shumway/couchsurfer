"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="min-h-screen bg-gray-100">
            <header>
              <nav className="max-w-4xl mx-auto py-4 px-4 flex justify-between items-center">
                <Link href="/">
                  <span className="text-blue-500 hover:underline">Home</span>
                </Link>
              </nav>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
