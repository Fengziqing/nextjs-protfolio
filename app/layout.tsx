import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import smalllogo from "@/assets/smalllogo.png";

//font use poppins
const Poppin = Poppins({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: "swap"
});

//search engine message
export const metadata: Metadata = {
  //why not working?
  icons: {
    icon: "/favicon.ico",
  },
  title: "Haruko Portfolio",
  description: "This is haruko feng's personal website which 100% developed and designed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${Poppin.className} relative`}>
        <NavBar />
        <main className=" h-full w-2/3 ml-[calc(34%)]">
          {children}
        </main>
      </body>
    </html>
  );
}
