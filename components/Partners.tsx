import React from 'react'
import Marquee from "react-fast-marquee";
import Partnerimage from './Partnerimage';





const BrandPartners = () => {
  return (
    <div className="w-full h-auto my-10 lg:pt-20 pt-0 ">
<h1 className='text-center lg:text-6xl text-3xl tracking-wide font-medium  '>OUR TOP BRANDS</h1>

<div className="max-w-7xl mx-auto py-12">
<Marquee>
    <Partnerimage pimage="/partners/mac.png" />
    <Partnerimage pimage="/partners/cosrx.png" />
    <Partnerimage pimage="/partners/pac.png" />
    <Partnerimage pimage="/partners/mini.png" />
    <Partnerimage pimage="/partners/huda.png" />
    <Partnerimage pimage="/partners/kryolan.png" />
    <Partnerimage pimage="/partners/milani.png" />

</Marquee>
<Marquee direction="right">
    <Partnerimage pimage="/partners/mac.png" />
    <Partnerimage pimage="/partners/cosrx.png" />
    <Partnerimage pimage="/partners/pac.png" />
    <Partnerimage pimage="/partners/mini.png" />
    <Partnerimage pimage="/partners/huda.png" />
    <Partnerimage pimage="/partners/kryolan.png" />
    <Partnerimage pimage="/partners/milani.png" />

</Marquee>
</div>

    </div>


  )
}

export default BrandPartners
