import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { IoBookOutline } from "react-icons/io5";

type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export const Dictonary = (props: Props) => {
  return (
    <div
      className=" w-full h-max flex flex-col items-center justify-center gap-y-9 pt-8 pb-40 "
      style={outfit.style}
    >
      <div className=" w-full flex flex-col items-center justify-center gap-y-2 ">
        <span className=" text-2xl text-white font-medium ">
          Crypto Dictionary
        </span>
        <span className=" text-base text-[#6A6A6A] font-medium ">
          Your one-stop to catch up on all crypto terms
        </span>
      </div>
      <Link href="/" className=" relative overflow-hidden rounded-3xl ">
        <Image
          src="/assets/dictonary.svg"
          alt="dictonary"
          width={1200}
          height={1200}
          className=" w-fit h-fit object-contain rounded-3xl border-[1px] border-[#797979] relative "
        />
        <div className=" absolute bottom-0 w-full  h-20 bg-gradient-to-t from-white/50 to-transparent rounded-b-3xl  ">
          <div className=" bottom-2 absolute w-full h-max flex items-center justify-between px-8 z-50  ">
            <div className=" w-full flex flex-col items-start justify-start ">
              <span className=" text-2xl text-[#A5B1AF] ">
                Web3 + Degen Glossary
              </span>
              <span className=" text-base text-[#5E7470] ">
                Your own crypto dictionary
              </span>
            </div>
            <div className=" bg-zinc-700/60 p-5 text-xl text-white rounded-full ">
              <IoBookOutline />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
