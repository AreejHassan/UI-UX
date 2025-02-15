import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/HEADER";
import Footer from "@/components/FOOTER";
export const metadata: Metadata = {
  title: "NIKE",
  description: "SWOOSH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
