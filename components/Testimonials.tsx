"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "John Doe",

    feedback: "Hands down the best makeup store in town! The staff helped me find the perfect shade of foundation, and the customer service was top-notch. I always leave feeling pampered and beautiful",
    title:"Personalized Service Like No Other",
    date:"21/09/2023"

  },
  {
    name: "Jane Smith",
    feedback: "I love the personalized service! They really take the time to understand your needs and skin type. The products are top quality and have transformed my everyday beauty routine.",
    title:"Transformed My Everyday Routine",
    date:"21/09/2023"
  },
  {
    name: "Alex Johnson",
    feedback: "The selection is incredible! Whether you're looking for something bold or natural, they have it all. The staff is super friendly and knowledgeable about what works best for each skin type.",
    title:"A Huge Selection for Every Look",
    date:"21/09/2023"
  },
  {
    name: "Maria Garcia",
    feedback: "I’ve never felt more confident in my skin! The makeup artists here knew exactly what products would complement my complexion. The result was flawless! I’ll definitely be back for more.",
    title:"Flawless Complexion Every Time",
    date:"21/09/2023"
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Testimonials() {
  return (
    <div className="max-w-7xl h-auto pt-10 pb-20 mx-auto">
      <h1 className="lg:text-3xl text-xl font-medium tracking-wide mb-10 pl-6 lg:pl-0">
        What Our Customers Say
      </h1>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm h-80 rounded-lg p-6 mx-3"
          >
            <div className="flex items-center ">
                <p className="font-semibold text-sm " >Naocha Luwang</p>
                <Image src="/icons/check.png" width={20} height={20} className="ml-2" alt="check" />
            <p className="font-extralight tracking-wider text-sm ml-2">Verified Buyer</p></div>
            <div className="flex">
          <span className="text-black text-2xl">&#9733;</span>
          <span className="text-black text-2xl">&#9733;</span>
          <span className="text-black text-2xl">&#9733;</span>
          <span className="text-black text-2xl">&#9733;</span>
          <span className="text-black text-2xl">&#9733;</span>
        </div>
        <p className="mt-5 font-medium">{testimonial.title}</p>

        <p className="text-sm mt-2 font-extralight tracking-wider">{testimonial.feedback}</p>

        <div className="flex mt-12 space-x-5 items-center">
            <Image src="/icons/calendar.png" width={20} height={20} alt="calendar" />
            <p className="tracking-wider text-xs font-extralight">{testimonial.date}</p>
        </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
