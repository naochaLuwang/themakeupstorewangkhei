import React from 'react'
import { FlipWords } from './ui/flip-words'

const Banner = () => {
    const words = ["DURGA PUJA SALE 11 - 15 October","MAC COSMETIC","HUDA BEAUTY", "LA GIRL", "LN PRO", "KRYOLAN", "MILANI", "FOREVER 52"];
  return (
    <div className="w-full flex items-center justify-center h-12">
                <div className="lg:w-[800px] w-[400px] h-8 rounded-2xl bg-gray-900 text-white font-medium flex items-center justify-center text-sm">
            <FlipWords words={words} /> <br />
        </div>

    </div>
  )
}

export default Banner
