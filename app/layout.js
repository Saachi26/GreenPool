import { Inter, Nunito } from "next/font/google";
import * as React from "react";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "GreenPool",
  description: "Greener way to commute",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
