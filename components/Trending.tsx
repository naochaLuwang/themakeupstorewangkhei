"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";






export default function Trending() {



  return (
    <div className="w-full h-auto lg:py-20 py-10 px-8">
      <h2 className="max-w-6xl  mx-auto lg:text-5xl text-2xl font-medium">
        Our Best Sellers
      </h2>



      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 grid-cols-2 mt-10 gap-10">
        <div className="w-full h-96 ">
            <div className="relative w-full h-72">
                <Image src="/milani.jpeg" fill alt="milani" objectFit="contain" />
            </div>
            <div className="flex flex-col space-y-3">
                <h1>Milani Lipstick 430 Secret</h1>

                     <div className="flex">
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className=" bg-white text-xl inline-block" >
                    &#9734;
                </span>
            </div>
            <p>₹ 1250</p>
            </div>

            <Link href="https://mybillbook.in/store/the_make_up_store/item/104cabb8-e370-40b6-b97a-4ea53aedba25?search_text=milani" >
                <div className="w-full h-fit bg-black py-3 text-white text-center mt-5 font-medium">BUY NOW</div> </Link>

        </div>

        <div className="w-full h-96 ">
            <div className="relative w-full h-72">
                <Image src="/huda.jpeg" fill alt="milani" objectFit="contain" />
            </div>
            <div className="flex flex-col space-y-3">
                <h1>Huda Beauty Foundation</h1>

                     <div className="flex">
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className=" bg-white text-xl inline-block" >
                    &#9734;
                </span>
            </div>
            <p>₹ 3650</p>
            </div>

            <div className="w-full h-fit bg-black py-3 text-white text-center font-medium mt-5">BUY NOW</div>
        </div>

        <div className="w-full h-96 ">
            <div className="relative w-full h-72">
                <Image src="/bella.png" fill alt="milani" objectFit="contain" />
            </div>
            <div className="flex flex-col space-y-3">
                <h1>Huda Beauty Foundation</h1>

                     <div className="flex">
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className=" bg-white text-xl inline-block" >
                    &#9734;
                </span>
            </div>
            <p>₹ 3650</p>
            </div>

            <div className="w-full h-fit bg-black py-3 text-white text-center font-medium mt-5">BUY NOW</div>
        </div>
        <div className="w-full h-96 ">
            <div className="relative w-full h-72">
                <Image src="/macp.png" fill alt="milani" objectFit="contain" />
            </div>
            <div className="flex flex-col space-y-3">
                <h1>Huda Beauty Foundation</h1>

                     <div className="flex">
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className="text-black text-xl">&#9733;</span>
                <span className=" bg-white text-xl inline-block" >
                    &#9734;
                </span>
            </div>
            <p>₹ 3650</p>
            </div>

            <div className="w-full h-fit bg-black py-3 text-white text-center font-medium mt-5">BUY NOW</div>
        </div>
      </div>



      <div className="max-w-6xl mx-auto text-center mt-32">
        <a href="https://mybillbook.in/store/the_make_up_store" className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">View all products</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
      </div>





    </div>

  );
}
