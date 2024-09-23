import Image from 'next/image'
import React from 'react'

const Partnerimage = ({pimage}:any) => {
  return (
    <div className="w-36 h-24 relative mt-10 ml-10">
<Image src={pimage} alt="partner image" fill objectFit='contain' />
    </div>
  )
}

export default Partnerimage
