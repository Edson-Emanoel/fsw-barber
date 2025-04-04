import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FSW Barber",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className}`}
      >
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
