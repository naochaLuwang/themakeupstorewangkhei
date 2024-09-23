import Image from 'next/image'
import React from 'react'

const Carousal = () => {
  return (
    <div className="w-full lg:h-[70vh] h-40 relative">
        <Image src="/mac.png" alt="mac banner" fill />

    </div>
  )
}

export default Carousal
