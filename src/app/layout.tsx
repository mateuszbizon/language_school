import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Szkoła językowa",
  description: "Szkoła językowa dzięki której zaczniesz swobodnie rozmawiać z każdym i to wszędzie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
