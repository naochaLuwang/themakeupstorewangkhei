import Image from 'next/image';
import React from 'react';

const Discover = () => {
  return (
    <div className="w-full h-auto flex flex-col py-10 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl tracking-wider">Discover Your Perfect Look</h1>
        <p className="mt-5 text-sm tracking-wider px-4">
          Welcome to The Makeup Store—your go-to destination for makeup that celebrates every form of beauty. Whether you’re a pro or a passionate enthusiast, we’ve got something for you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20 px-4">
        <div className="flex flex-col text-center items-center justify-center w-full h-fit space-y-4">
          <Image src="/icons/checkmark.png" alt="checkmark" width={50} height={50} />
          <div className="flex flex-col space-y-2">
            <p className="text-lg tracking-wider">Inclusive Selection</p>
            <p className="text-sm font-extralight">Beauty is for everyone, with products for all skin tones and preferences.</p>
          </div>
        </div>

        <div className="flex flex-col text-center items-center justify-center w-full h-fit space-y-4">
          <Image src="/icons/afford.png" alt="checkmark" width={50} height={50} />
          <div className="flex flex-col space-y-2">
            <p className="text-lg tracking-wider">Affordable to High-End</p>
            <p className="text-sm font-extralight">
From budget to luxury, our curated collection offers quality makeup for every budget.</p>
          </div>
        </div>

        <div className="flex flex-col text-center items-center justify-center w-full h-fit space-y-3">
          <Image src="/icons/shopping.png" alt="checkmark" width={50} height={50} />
          <div className="flex flex-col space-y-2">
            <p className="text-lg  tracking-wider">Online & In-Store Shopping</p>
            <p className="text-sm font-extralight">Shop online or in-store with flexibility to fit your lifestyle.</p>
          </div>
        </div>

        <div className="flex flex-col text-center items-center justify-center w-full h-fit space-y-4">
          <Image src="/icons/flask.png" alt="checkmark" width={50} height={50} />
          <div className="flex flex-col space-y-2">
            <p className="text-lg  tracking-wider">Expertly Curated</p>
            <p className="text-sm font-extralight">
Each product is chosen for quality and effectiveness, helping you express your unique beauty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
