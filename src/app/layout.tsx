import { CssVarsProvider } from "@mui/joy";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    <html lang="ja" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SpeedInsights />
        <CssVarsProvider defaultMode="dark">
          <main className="min-h-screen bg-black text-white selection:bg-neutral-700 selection:text-white">
            {children}
          </main>
          <footer className="w-full px-4 py-8 mt-16 border-t border-white/10">
            <p className="text-center text-sm text-gray-500 m-0">
              © 2025~{new Date().getFullYear()} Murakawa Takuya. All rights
              reserved.
            </p>
          </footer>
        </CssVarsProvider>
      </body>
    </html>
  );
}
