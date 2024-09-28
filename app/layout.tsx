import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Carousal from "@/components/Carousal";
import Trending from "@/components/Trending";
import About from "@/components/About";
import { TextHover } from "@/components/Texthover";
import BrandPartners from "@/components/Partners";
import Footer from "@/components/Footer";
import Map from "@/components/map";
import Creator from "@/components/creator";
// import Testimonials from "@/components/Testimonials";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "THE MAKEUP STORE",
  description: "Generated by create next app",

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
        <Banner />
        <Header />
        <Carousal />
        <Trending />
        <TextHover />
        <About />


        {children}
        <BrandPartners />
        {/* <Testimonials /> */}
        {/* <Map /> */}
        <Footer/>
        <Creator/>
      </body>
    </html>
  );
}
