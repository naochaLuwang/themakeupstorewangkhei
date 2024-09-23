import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="w-full h-24 lg:px-12 px-8 flex items-center justify-between">
        <div  className="flex items-center lg:space-x-5 space-x-2">
            <div className="lg:w-20 lg:h-20 w-10 h-10 border rounded-md border-black relative flex-shrink-0">
                <Image src="/logo.jpeg" alt="logo" objectFit="contain" fill />

            </div>
            <h1 className="lg:text-3xl text-xl font-bold tracking-wide">THE MAKEUP STORE</h1>

        </div>



        <div className="w-fit h-fit bg-gray-800 lg:px-4 lg:py-2 px-2 py-2 text-white rounded-md shadow-sm hover:bg-gray-900 lg:text-md text-sm font-semibold">
            <Link href="https://mybillbook.in/store/the_make_up_store">SHOP NOW</Link>
        </div>
    </div>
  )
}

export default Header
