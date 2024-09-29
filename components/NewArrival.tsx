"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Raleway_Dots } from 'next/font/google';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
}

const raleway = Raleway_Dots({
    weight:["400"],
    subsets: ["latin"],
})

const products: Product[] = [
  {
    id: 1,
    name: 'LN PRO 4 Steps Contour',
    price: '₹ 450',
    image: '/lnprocounter.png',
    link: 'https://mybillbook.in/store/the_make_up_store/item/1fff865d-2412-4af4-b3f7-37f0a464a315?category=7a7aaf36-0ea5-4706-acef-c8021ad3653b&page_no=1',
  },
  {
    id: 2,
    name: 'Too Faced Lip Injection',
    price: '₹ 2550',
    image: '/tooflip.png',
    link: 'https://mybillbook.in/store/the_make_up_store/item/1d38fe2b-2587-4fe9-b1bd-8eec4c1b5fec?category=c4de3cd7-4145-43fc-ae2c-0052ef13bb6a&page_no=1',
  },
  {
    id: 3,
    name: 'LN Pro Highlighter 102',
    price: '₹ 395',
    image: '/lnprodew.png',
    link: 'https://mybillbook.in/store/the_make_up_store/item/2572f41b-4e82-44c3-a491-6e2cec212a81?category=7a7aaf36-0ea5-4706-acef-c8021ad3653b&page_no=1',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '₹ 2100',
    image: '/milani.jpeg',
    link: '#',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const NewArrival: React.FC = () => {
  const carouselRef = useRef<Carousel | null>(null);

  return (
    <div className="max-w-7xl mx-auto py-20">
      <h2 className={`text-7xl font-[400] mb-6 px-5 ${raleway.className}`}>New Launches</h2>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        infinite={true}
        autoPlay={true} // Set to false to use custom buttons
        containerClass="carousel-container"
        itemClass="carousel-item-padding-20-px"

      >
        {products.map((product) => (
          <div key={product.id} className="bg-white h-96 flex overflow-hidden mx-5 flex-col">
            <div className="flex items-center justify-center w-full h-full"> {/* Center the image */}
              <div className="relative w-56 h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="p-4 w-full flex flex-col justify-center"> {/* Align text to the right */}
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
              <Link href={product.link} passHref>
                <div className="mt-3 w-full inline-block bg-black text-white py-2 rounded hover:bg-gray-800 transition text-center">
                  Buy Now
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewArrival;
