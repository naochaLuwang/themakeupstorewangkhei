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
import Discover from "@/components/Discover";
import NewArrival from "@/components/NewArrival";
import VideoGrid from "@/components/VideoGrid";
import Testimonials from "@/components/Testimonials";
import { Analytics } from '@vercel/analytics/react';
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
  description: "ONE STOP DESTINATION FOR ALL YOUR MAKEUP NEEDS",

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
        <Analytics />
        <NewArrival />
        <Discover />
        <BrandPartners />
        <Testimonials />
        {/* <VideoGrid /> */}




        {/* <Map /> */}
        <Footer/>
        <Creator/>
      </body>
    </html>
  );
}
