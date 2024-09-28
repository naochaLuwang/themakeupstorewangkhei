import Link from 'next/link'
import React from 'react'

const Creator = () => {
  return (
    <div className='w-full h-auto bg-black flex flex-col lg:flex-row py-3 items-center text-white lg:px-16 justify-between'>
<p className='text-xs font-medium tracking-wide'>2024.THE MAKEUP STORE. All rights reserved.</p>
<p className='text-xs font-medium tracking-wide'>Designed and Developed by <span><Link href="https://naocha-luwnag.vercel.app/">Naocha Luwang.</Link></span>
    </p>
    </div>
  )
}

export default Creator
