import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/componets/navbar";
// import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const gotham = localFont({
//   src: [
//     {
//       path: "../fonts/Gotham-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Gotham-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-gotham",
// });

export const metadata: Metadata = {
  title: "Jorge Palacios ",
  description: "Guitarrista profesional y profesor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
