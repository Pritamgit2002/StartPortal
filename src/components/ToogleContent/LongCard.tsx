import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
const LongCard = (props: Props) => {
  return (
    <div
      className=" h-max min-h-[475px] w-[318px] rounded-xl bg-[#141414] flex flex-wrap p-3 "
      style={outfit.style}
    >
      <Image
        src="/assets/long.gif"
        alt="done"
        width={1200}
        height={1200}
        className=" w-fit h-fit object-contain rounded-lg "
      />
      <div className=" w-full flex flex-col items-start justify-center gap-y-2 text-[#717171] ">
        <div className=" w-full flex items-center justify-between  ">
          <span className=" text-base font-medium ">Exclusive Community</span>
          <div className=" w-max flex items-center justify-center gap-x-1">
            <Image
              src="/assets/discord.svg"
              alt="discord"
              width={1200}
              height={1200}
              className=" w-4 h-4 object-contain "
            />
            <span className=" text-white ">Earndrop</span>
          </div>
        </div>
        <div className="w-full space-x-1 flex">
          {Array.from({ length: 37 }).map((_, index) => (
            <div key={index} className="w-1 h-[1.5px] bg-[#373737]" />
          ))}
        </div>
        <div className=" w-full flex items-start justify-between ">
          <span className=" text-sm tracking-tighter font-medium ">
            Complete all Essential quests
          </span>
          <div>
            <div className=" p-[1px] rounded-full text-[#505050] border-[1.2px] border-[#505050] bg-[#262626] text-xs mt-1 ">
              <IoMdCheckmark />
            </div>
          </div>
        </div>
        <div className=" w-full flex items-start justify-between ">
          <span className=" text-sm tracking-tighter font-medium ">
            Complete at least 1 Alpha Hub quest today
          </span>
          <div>
            <div className=" p-[1px] rounded-full text-[#505050] border-[1.2px] border-[#505050] bg-[#262626] text-xs mt-1 ">
              <IoMdCheckmark />
            </div>
          </div>
        </div>
        <button
          className=" w-full flex items-center justify-center gap-x-2 rounded-lg text-white py-3 px-16 bg-[#252525] border-[1.5px] border-[#343434] text-sm mt-1 "
          style={outfit.style}
        >
          Claim Now
          <Image
            src="/assets/arrow-right.svg"
            alt="right arrow"
            width={1200}
            height={1200}
            className=" w-4 h-4 "
          />
        </button>
      </div>
    </div>
  );
};
//
export default LongCard;
