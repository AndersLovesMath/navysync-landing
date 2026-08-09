import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NavySync | NJROTC Unit Platform",
  description:
    "NavySync is an all-in-one platform for NJROTC unit communication, events, cadet resources, and administration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
