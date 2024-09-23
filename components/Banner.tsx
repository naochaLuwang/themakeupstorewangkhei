import React from 'react'
import { FlipWords } from './ui/flip-words'

const Banner = () => {
    const words = ["Flat 10% OFF on all products", "cute", "beautiful", "modern"];
  return (
    <div className="w-full flex items-center justify-center h-12">
                <div className="lg:w-[800px] w-[400px] h-8 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-sm">
            <FlipWords words={words} /> <br />
        </div>

    </div>
  )
}

export default Banner
