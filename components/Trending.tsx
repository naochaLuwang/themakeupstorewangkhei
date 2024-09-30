import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Orbitron} from 'next/font/google'

const orbitron = Orbitron({
    weight:["400","500","600", "700","800"],
    subsets:["latin"]
})

const Trending = () => {
  return (
    <div className="max-w-7xl h-auto mx-auto py-10">
        <h1 className={`lg:text-4xl text-xl tracking-wider mb-10 px-8 lg:px-0 ${orbitron.className}`}>Our Best Sellers</h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 lg:max-w-7xl lg:mx-auto w-full px-8 lg:px-0 mt-10">
            <div className='w-full h-96 flex flex-col space-y-3'>
                <div className="h-40 w-40 relative">
                    <Image src="/ruby.jpeg" alt="milani" fill objectFit='contain' />

                </div>
                <p className='text-sm md:text-lg'>Mac Lipstick Ruby Woo</p>
                  <div className="flex">
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="bg-white text-xl inline-block">&#9734;</span>
        </div>
        <p>₹ 1950</p>
        <Link className="w-full h-fit bg-black text-white text-center py-2 px-4"  href="https://mybillbook.in/store/the_make_up_store/item/a61616c8-bd96-489a-9e06-1313091bf6d4?search_text=ruby%20woo">BUY NOW</Link>
      </div>
      <div className='w-full h-96 flex flex-col space-y-3'>
                <div className="h-40 w-40 relative">
                    <Image src="/huda.jpeg" alt="milani" fill objectFit='contain' />

                </div>
                <p className="text-sm md:text-lg">Huda Beauty Milkshake</p>
                  <div className="flex">
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="bg-white text-xl inline-block">&#9734;</span>
        </div>
        <p>₹ 3650</p>
        <Link className="w-full h-fit bg-black text-white text-center py-2 px-4"  href="https://mybillbook.in/store/the_make_up_store/item/feb05662-a784-41b8-aa4f-eefc987925f8?search_text=milkshake">BUY NOW</Link>
      </div>
      <div className='w-full h-96 flex flex-col space-y-3'>
                <div className="h-40 w-40 relative">
                    <Image src="/milani.jpeg" alt="milani" fill objectFit='contain' />

                </div>
                <p>Mialni Lipstick 430 Secret</p>
                  <div className="flex">
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="bg-white text-xl inline-block">&#9734;</span>
        </div>
        <p>₹ 1250</p>
        <Link className="w-full h-fit bg-black text-white text-center py-2 px-4"  href="https://mybillbook.in/store/the_make_up_store/item/104cabb8-e370-40b6-b97a-4ea53aedba25?category=bcd20f18-b238-4340-9ce4-52de6e0d954f&page_no=1">BUY NOW</Link>
      </div>
      <div className='w-full h-96 flex flex-col space-y-3'>
                <div className="h-40 w-40 relative">
                    <Image src="/la4.jpeg" alt="milani" fill objectFit='contain' />

                </div>
                <p>LA Girl 4 Play Eyeshadow</p>
                  <div className="flex">
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="bg-white text-xl inline-block">&#9734;</span>
        </div>
        <p>₹ 745</p>
        <Link className="w-full h-fit bg-black text-white text-center py-2 px-4"  href="https://mybillbook.in/store/the_make_up_store/item/f741546e-ddbf-4e01-ab62-87fcdd761373?category=a0336bcc-e3fb-4a8d-bd22-5b8c08bedb2f&page_no=2">BUY NOW</Link>
      </div>

            </div>

              <div className="flex justify-center">
      <div className="relative inline-block text-lg group">
        <Link href="https://mybillbook.in/store/the_make_up_store" className="relative flex items-center justify-between px-5 py-2 text-black bg-white border border-black rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
          <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[-10px]">Explore More Products</span>
          <span className="ml-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">→</span>
        </Link>
      </div>
    </div>
        </div>




  )
}

export default Trending
