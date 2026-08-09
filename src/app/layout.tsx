import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NavySync | NJROTC Unit Platform",
    template: "%s | NavySync",
  },
  description:
    "NavySync is an all-in-one platform for NJROTC unit communication, events, cadet resources, and administration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${manrope.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-surface text-on-surface">
        <noscript>
          {/* Scroll reveal starts hidden and is switched on by script, so undo
              it entirely when there is no script to run. */}
          <style>{`[data-reveal],[data-reveal] > *{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ScrollReveal />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
