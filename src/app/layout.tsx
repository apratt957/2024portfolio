import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const googleFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Pratt Portfolio",
  description: "Portfolio of Andrew Pratt, developer and designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={googleFont.className}>{children}</body>
    </html>
  );
}
