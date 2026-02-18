import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omugwo Academy | Home Page",
  description: "Revolutionizing Postnatal Care for Sustainable Maternal and Child well-being in Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
