import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCQ Tech - Reliability, Consistency, Quality",
  description:
    "RCQ Tech builds custom apps, automation workflows, AI-powered solutions, and conversion-ready websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} min-h-svh overflow-x-clip antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-svh flex-col bg-[#0F0F0F] text-zinc-100">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
