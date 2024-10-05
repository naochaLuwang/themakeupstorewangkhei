import React from 'react'
import { FlipWords } from './ui/flip-words'

const Banner = () => {
    const words = ["UPTO 50 % OFF", "DURGA PUJA SALE", "5th October - 11th October Midnight"];
  return (
    <div className="w-full flex items-center justify-center h-12">
                <div className="lg:w-[800px] w-[400px] h-8 rounded-2xl bg-gray-900 text-yellow-400 font-bold flex items-center justify-center text-sm">
            <FlipWords words={words} /> <br />
        </div>

    </div>
  )
}

export default Banner
