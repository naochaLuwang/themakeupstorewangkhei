import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Trending = () => {
  return (
    <div className="max-w-7xl h-auto mx-auto py-10">
        <h1 className="lg:text-4xl text-xl tracking-wider mb-10 px-8 lg:px-0">Our Best Sellers</h1>
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
                <p className="text-sm md:text-lg">Mialni Lipstick 430 Secret</p>
                  <div className="flex">
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="text-black text-xl">&#9733;</span>
          <span className="bg-white text-xl inline-block">&#9734;</span>
        </div>
        <p>₹ 1250</p>
        <Link className="w-full h-fit bg-black text-white text-center py-2 px-4"  href="https://mybillbook.in/store/the_make_up_store">BUY NOW</Link>
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
        <Link className="w-full h-fit bg-black text-white text-center py-2 px-4"  href="https://mybillbook.in/store/the_make_up_store">BUY NOW</Link>
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
        <Link className="w-full h-fit bg-black text-white text-center py-2 px-4"  href="https://mybillbook.in/store/the_make_up_store">BUY NOW</Link>
      </div>

            </div>

              <div className="flex justify-center">
      <div className="relative inline-block text-lg group">
        <div className="relative flex items-center justify-between px-5 py-2 text-black bg-white border border-black rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
          <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[-10px]">Explore More Products</span>
          <span className="ml-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">→</span>
        </div>
      </div>
    </div>
        </div>




  )
}

export default Trending
