import React from "react";
import { TextHoverEffect } from "./text-hover-effect";
import Image from "next/image";

export function TextHover() {
  return (
    <>
    <div className=" lg:h-[10rem] h-[3rem] w-full lg:block hidden">
  <span className="bg-black text-transparent bg-clip-text text-3xl font-bold ">
    <TextHoverEffect text="THE MAKEUP STORE" />
  </span>
</div>
<div className="max-w-6xl mx-auto lg:hidden flex">
    <div className="w-full h-28 relative">
        <Image  src="/makeupstore.jpeg" alt="makeupstore" fill/>
    </div>
</div>
    </>

  );
}
