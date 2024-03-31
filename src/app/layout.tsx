import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/shared/Navbar/Navbar";
import SmoothScroll from "../components/ui/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAZED MOHAMMED",
  description: "Mazed's personal portfolio website",
  icons: {
    icon: ["/favicon.ico?v=4"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Navbar></Navbar><SmoothScroll>{children}</SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
