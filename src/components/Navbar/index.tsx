import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
const navLinks = ["Compass", "Explore", "Academy", "NFTs", "For Projects"];
type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export const Navbar = (props: Props) => {
  return (
    <div
      className=" w-full h-max flex items-center justify-center gap-x-10 top-0 z-50 border-b-[1.25px] border-[#2A2A2A] bg-black/75 fixed py-3 "
      style={outfit.style}
    >
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={1200}
        height={1200}
        className=" w-24 h-10 object-contain "
      />
      <div className="flex items-center justify-center gap-x-7 ">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href="#"
            className="text-white/60 hover:text-white no-underline duration-200 ease-out transition-all font-medium "
          >
            {link}
          </Link>
        ))}
      </div>
      <input
        type="text"
        className=" w-[425px] rounded-full h-11 placeholder:pl-4 placeholder:text-sm bg-[#171717] border-[0.8px] border-white/10 "
        placeholder="Seach for ecosystem,trending quests etc,."
      />
      <div className=" flex items-center justify-center gap-x-2 ">
        <div className=" p-3 border-[1.5px] border-[#D8761C] bg-[#0F091F] rounded-full cursor-pointer ">
          <Image
            src="/assets/tv.svg"
            alt="logo"
            width={1200}
            height={1200}
            className=" w-4 h-4 object-contain "
          />
        </div>
        <button className=" px-6 py-2 bg-white text-black font-medium rounded-lg ">
          Sign In
        </button>
      </div>
    </div>
  );
};
