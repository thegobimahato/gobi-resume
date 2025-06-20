import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Gobi Resume | Smarter Resumes, Powered by AI",
    absolute: "Gobi Resume | Smarter Resumes, Powered by AI",
  },
  description:
    "Create professional, AI-powered resumes in minutes with Gobi Resume. Stand out to employers with intelligent formatting, tailored content, and modern design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
