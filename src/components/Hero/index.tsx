import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export default function Hero({}: Props) {
  return (
    <main
      className="w-full h-max flex items-center justify-center mt-24 xl:mt-32 2xl:mt-60 mb-10 2xl:mb-48 pt-[70px]"
      style={outfit.style}
    >
      <div className=" h-max w-max flex flex-col items-center justify-center gap-y-2 xl:gap-y-6  z-30 ">
        <Image
          src="/assets/logo.gif"
          alt="hero text"
          width={1200}
          height={1200}
          className=" w-72 h-full object-contain opacity-50 "
        />
        <div className=" flex flex-col items-center justify-center leading-snug xl:leading-normal ">
          <p className=" text-lg sm:text-xl font-medium text-[#D2D0D2]  text-center leading-tight tracking-tight sm:tracking-normal ">
            Intract users{" "}
            <span className="text-[#6B6A6B]">have together made more than</span>{" "}
            $100 million <span className="text-[#6B6A6B]">in web3.</span>
          </p>
          <p className=" text-lg sm:text-xl font-medium text-[#D2D0D2] tracking-tight sm:tracking-normal ">
            {" "}
            <span className="text-[#6B6A6B]">Join them and</span> learn how to
            earn crypto!
          </p>
        </div>
        <button
          className=" flex items-center justify-center gap-x-2 rounded-lg text-white py-2 px-14 bg-[#6A3BEA]/80 hover:bg-[#6A3BEA] text-sm "
          style={outfit.style}
        >
          Get Started
          <Image
            src="/assets/arrow-right.svg"
            alt="right arrow"
            width={1200}
            height={1200}
            className=" w-4 h-4 "
          />
        </button>
      </div>
    </main>
  );
}
