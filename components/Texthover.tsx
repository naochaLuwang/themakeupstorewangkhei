import React from "react";
import { TextHoverEffect } from "./text-hover-effect";

export function TextHover() {
  return (
 <div className=" h-[10rem] w-full">
  <span className="bg-black text-transparent bg-clip-text text-3xl font-bold">
    <TextHoverEffect text="THE MAKEUP STORE" />
  </span>
</div>
  );
}
