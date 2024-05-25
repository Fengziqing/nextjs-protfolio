import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import smalllogo from "@/assets/smalllogo.png";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" className="h-full bg-webPink dark:bg-[#567119]" suppressHydrationWarning>
      <body className={`${Poppin.className} relative flex justify-center h-auto xl:justify-normal`}>
        <ThemeProvider attribute="media">
          <NavBar />
          <main className="
                w-auto justify-center mt-16
                sm:mt-20
                md:mt-16
                xl:h-full xl:w-2/3 xl:ml-[calc(35%)] xl:mt-0 xl:p-3.5">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
