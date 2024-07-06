import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export default function Hero({}: Props) {
  return (
    <main className=" w-full h-full flex items-center justify-center relative ">
      <Image
        src="/assets/hero.png"
        alt="hero"
        width={2200}
        height={2200}
        className=" w-full h-full object-contain "
      />
      <div className=" h-max w-max flex flex-col items-center justify-center absolute gap-y-12 ">
        <Image
          src="/assets/academy-animated-logo-57b2ae61.gif"
          alt="hero text"
          width={1200}
          height={1200}
          className=" w-72 h-full object-contain opacity-50 "
        />
        <div className=" flex flex-col items-center justify-center ">
          <p className=" text-xl font-medium text-[#D2D0D2]  ">
            Intract users{" "}
            <span className="text-[#6B6A6B]">have together made more than</span>{" "}
            $100 million <span className="text-[#6B6A6B]">in web3.</span>
          </p>
          <p className=" text-xl font-medium text-[#D2D0D2]  ">
            {" "}
            <span className="text-[#6B6A6B]">Join them and</span> learn how to
            earn crypto!
          </p>
        </div>
        <button
          className=" flex items-center justify-center gap-x-2 rounded-lg text-white py-3 px-16 bg-[#6A3BEA] text-sm "
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
