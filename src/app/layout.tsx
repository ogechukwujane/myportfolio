import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Source_Sans_3 } from "next/font/google";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { Lobster } from "next/font/google";

export const metadata: Metadata = {
  title: "Ogechukwu Gerald-ikedinma",
  description:
    "Problem-solving Frontend Developer who thrives on turning complex design concepts into functional digital experiences.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-poppins",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sourceSans",
});

export const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={` antialiased`}>
        <Navbar />

        <div
          className={cn(
            "size-full min-h-screen bg-background overflow-x-hidden overflow-y-hidden",
            poppins.variable,
            sourceSans.variable,
            lobster.variable,
          )}
        >
          <AnimatePresence>{children}</AnimatePresence>
        </div>
        <Footer />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
