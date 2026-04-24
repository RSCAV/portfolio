import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rodrigo casanova-aleman",
  description: "Personal notes by Rodrigo Casanova-Aleman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
