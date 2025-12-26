import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: description編集
export const metadata: Metadata = {
  title: "Murakawa Takuya - Portfolio",
  description: "Fullstack Developer & Computer Vision Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="min-h-screen bg-black text-white selection:bg-neutral-700 selection:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
