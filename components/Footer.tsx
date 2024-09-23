import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-auto bg-slate-50 pb-10">
        <div className='max-w-7xl mx-auto flex pt-10 space-x-3 px-8'>
            <div className='lg:w-36 lg:h-24 w-20 h-20 relative border-2 rounded-lg flex-shrink-0'>
                <Image src="/logo.jpeg" alt="logo" fill />
            </div>
            <div>
                <h1 className="text-2xl font-medium tracking-wide">THE MAKEUP STORE</h1>
                <p className='text-neutral-800 text-sm'>ONE STOP DESTINATION FOR ALL YOUR MAKEUP NEEDS</p>
                <p className='text-neutral-500 mt-5 text-xs'>GSTIN: 14CQKPM8002Q1ZE</p>
                <p className='text-neutral-500 max-w-2xl mt-2 text-xs'>1st Floor , MICHAEL PLAZA, Wangkhei Angom Leikai, Opposite Thangal Temple Imphal East , Manipur - 795001 , Imphal East Manipur - 795005</p>
            </div>
        </div>

    </div>
  )
}

export default Footer
