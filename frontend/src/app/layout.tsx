import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relaxation Dental | Salida, CO",
  description: "Gentle, Modern Dentistry in Salida, CO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}