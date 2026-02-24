import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Asady Law | Toronto's Premier Virtual Real Estate Law Firm",
  description: "Full service real estate law practice specializing in purchases, sales, and refinancing of residential and commercial properties. Virtual closings from anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
