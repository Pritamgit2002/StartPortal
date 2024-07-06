"use client";
import localFont from "next/font/local";
import Image from "next/image";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { content } from "./content";

type Props = {};
const dashes = Array(25).fill("-");
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export function ToogleContent({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`w-[518px] h-[240px]  p-6 flex items-center justify-start gap-x-4 bg-zinc-700/30 hover:bg-[#2b2b2b]/75 relative  border-[#363636]/80 cursor-pointer ${
        isOpen
          ? "rounded-t-2xl border-x-[1.2px] border-t-[1.2px] "
          : " rounded-2xl border-[1.2px]"
      } `}
      onClick={handleToggle}
    >
      <div className=" p-2 rounded-xl bg-zinc-800 border-[0.5px] border-gray-300 ">
        <Image
          src="/assets/content_a.png"
          alt="done"
          width={1200}
          height={1200}
          className=" w-64 h-44 rounded-xl object-cover "
        />
      </div>
      <div
        className=" w-full flex flex-col items-start justify-between gap-y-1 "
        style={outfit.style}
      >
        <span className=" text-2xl text-white font-medium ">
          Basics of Crypto
        </span>
        <p className=" text-base text-[#727272] font-medium ">
          The safest and easiest place to start your crypto journey!
        </p>
        <div className="flex items-center justify-start space-x-1 select-none ">
          {dashes.map((dash, index) => (
            <div key={index} className="text-center text-[#373737] ">
              {dash}
            </div>
          ))}
        </div>
        <div className=" p-2 bg-[#252525] border-[1px] border-[#2E2E2E] w-max flex items-center justify-center gap-x-1 rounded-l-full rounded-r-full">
          <Image
            src="/assets/coin.svg"
            alt="coin"
            width={1200}
            height={1200}
            className=" w-5 h-5 object-contain "
          />
          <span className=" text-sm text-[#D2D2D2]  " style={outfit.style}>
            1490 XPs
          </span>
        </div>
      </div>
      <button
        className={`absolute text-3xl text-[#434243] top-3 right-6 transform transition-transform duration-300 ease-out ${
          isOpen ? "rotate-180" : ""
        }`}
        // onClick={handleToggle}
      >
        <FaCaretDown />
      </button>
      {isOpen && (
        <div
          className={` w-[518px] h-[460px] absolute top-[240px] left-0 bg-[#101010] rounded-b-2xl flex flex-col items-center justify-start gap-y-2 pt-6 pb-4 overflow-y-auto border-[#363636]/80 ${
            isOpen ? "border-x-[1.2px] border-b-[1.2px] " : " border-none "
          } `}
        >
          <SubToogleContent />
        </div>
      )}
    </div>
  );
}

export function SubToogleContent({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {content.map((item, i) => (
        <div
          className=" w-[465px] p-3 flex items-center justify-start gap-x-4 rounded-xl cursor-pointer bg-[#1C1C1C] hover:bg-[#2D2D2D]/80 transition-all duration-75 ease-out "
          style={outfit.style}
        >
          <div className=" ">
            <Image
              src={item.img}
              alt="done"
              width={1200}
              height={1200}
              className=" w-32 h-20 object-cover rounded-xl "
            />
          </div>
          <div className=" flex flex-col items-start justify-between ">
            <span className=" text-[#CFCFCF] ">{item.title}</span>
            <div className="flex items-center justify-start space-x-1">
              {dashes.map((dash, index) => (
                <div key={index} className="text-center text-[#373737] ">
                  {dash}
                </div>
              ))}
            </div>
            <div className=" w-full flex items-center justify-start gap-x-4 ">
              <span className="text-[#A1A1A1]">{item.task}</span>
              <div className=" p-1 border-[1.2px] border-[#2F2F2F] rounded-full">
                <div className=" w-36 h-2 rounded-full bg-[#2F2F2F] "></div>
              </div>
              <div className=" p-[3px] rounded-full text-[#505050] border-[1.2px] border-[#505050] bg-[#262626] ">
                <IoMdCheckmark />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
