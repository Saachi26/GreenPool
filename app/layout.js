import { Inter } from "next/font/google";
import * as React from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GreenPool",
  description: "Greener way to commute",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers> */}
        <Header />
        {children}
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
