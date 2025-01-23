import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export const metadata: Metadata = {
  title: "IMAJIWA CREATIVE",
  description: "Generated by IMAJIWA CREATIVE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
