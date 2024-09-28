import React from 'react'
import Marquee from "react-fast-marquee";
import Partnerimage from './Partnerimage';





const BrandPartners = () => {
  return (
    <div className="w-full h-auto my-10 lg:pt-20 pt-0 ">
<h1 className='text-center lg:text-6xl text-3xl tracking-wide font-medium  '>BRANDS</h1>
<p className='text-center'>Top Picks</p>
<p className="max-w-6xl mx-auto text-center mt-5">Explore a wide range of well-known and niche makeup brands carefully curated for quality and diversity. From luxurious high end products to affordable options, we offer a selection that caters to all preferences and skin types, ensuring you find the perfect cosmetics to enhance your beauty.</p>

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
    <Partnerimage pimage="/partners/lagirl.png" />
    <Partnerimage pimage="/partners/maybelline.png" />
    <Partnerimage pimage="/partners/forever52.png" />
    <Partnerimage pimage="/partners/revolution.png" />
    <Partnerimage pimage="/partners/pigment.png" />
    <Partnerimage pimage="/partners/kryolan.png" />
    <Partnerimage pimage="/partners/milani.png" />

</Marquee>
</div>

    </div>


  )
}

export default BrandPartners
