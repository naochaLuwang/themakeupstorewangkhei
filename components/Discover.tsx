import Image from 'next/image';
import React from 'react';

const Discover = () => {
  return (
    <div className="w-full h-auto flex flex-col py-10 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl tracking-wider">Discover Your Perfect Look</h1>
        <p className="mt-5 tracking-wider px-4">
          Welcome to The Makeup Store—your go-to destination for makeup that celebrates every form of beauty. Whether you’re a pro or a passionate enthusiast, we’ve got something for you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 px-4">
        <div className="flex flex-col text-center items-center justify-center w-full h-64 space-y-4">
          <Image src="/icons/checkmark.png" alt="checkmark" width={50} height={50} />
          <div className="flex flex-col space-y-2">
            <p className="text-lg tracking-wider">Inclusive Selection</p>
            <p className="text-sm font-extralight">We believe beauty is for everyone. Our diverse range of products caters to all skin tones and preferences, ensuring you find exactly what you need.</p>
          </div>
        </div>

        <div className="flex flex-col text-center items-center justify-center w-full h-64 space-y-3">
          <Image src="/icons/checkmark.png" alt="checkmark" width={50} height={50} />
          <div className="flex flex-col space-y-2">
            <p className="text-lg tracking-wider">Affordable to High-End</p>
            <p className="text-sm font-extralight">From budget-friendly finds to luxurious brands, our curated collection offers options for every budget, making quality makeup accessible to all.</p>
          </div>
        </div>

        <div className="flex flex-col text-center items-center justify-center w-full h-64 space-y-3">
          <Image src="/icons/checkmark.png" alt="checkmark" width={50} height={50} />
          <div className="flex flex-col">
            <p className="text-lg  tracking-wider">Online & In-Store Shopping</p>
            <p className="text-sm font-extralight">Enjoy the convenience of shopping online or in-store, providing flexibility that suits your lifestyle.</p>
          </div>
        </div>

        <div className="flex flex-col text-center items-center justify-center w-full h-64 space-y-3">
          <Image src="/icons/checkmark.png" alt="checkmark" width={50} height={50} />
          <div className="flex flex-col">
            <p className="text-lg md:text-xl tracking-wider">Expertly Curated</p>
            <p className="text-sm font-extralight">Each product is thoughtfully selected for its quality and effectiveness, ensuring you have the best tools to express your unique beauty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
