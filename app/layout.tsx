import type { Metadata } from "next";
import { Arvo } from "next/font/google";
import "./globals.css";

const arvoSans = Arvo({
  variable: "--font-arvo-serif",
  weight: "700"
});


export const metadata: Metadata = {
  title: "Andy Johnson",
  description: "Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arvoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
