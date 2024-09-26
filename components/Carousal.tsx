// import Image from 'next/image'
// import React from 'react'

// const Carousal = () => {
//   return (
//     <div className="w-full lg:h-[70vh] h-40 relative">
//         <Image src="/mac.png" alt="mac banner" fill />

//     </div>
//   )
// }

// export default Carousal

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Carousal = () => {
  return (
    <div className="w-full lg:h-[70vh] h-56 relative overflow-hidden">
      <Image
        src="/mac.png"
        alt="mac banner"
        fill
        className="object-cover hidden lg:block"
      />
      <div className="absolute left-0 lg:top-48 top-28 transform -translate-y-1/2 p-4 text-black text-2xl lg:px-12 px-6">
      <h1 className="lg:text-4xl text-base font-semibold tracking-wide leading-relaxed">ONE STOP DESTINATION <br/> FOR ALL YOUR MAKEUP NEEDS</h1>
      <p className='lg:text-sm text-xs mt-5 lg:mb-10 mb-5'>Elevate Your Makeup Game: <br /> Authentic Products, Hands-On Testing, and Expert Assistance—All in One Place!</p>

      <Link className="w-fit h-fit lg:py-3 py-2 lg:px-5 px-4 rounded-full shadow-md  bg-black text-white lg:text-base text-sm" href="https://mybillbook.in/store/the_make_up_store" >EXPLORE NOW</Link>

      </div>
    </div>
  );
};

export default Carousal;
