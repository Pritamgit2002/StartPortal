import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export const Pepe = (props: Props) => {
  return (
    <div
      className=" h-max flex flex-col items-center justify-center gap-y-2 "
      style={outfit.style}
    >
      <div className=" p-1 border-[1.2px] border-[#999999] flex items-center justify-center rounded-full ">
        <div className=" w-16 h-16 rounded-full bg-[#4C9641]  "></div>
      </div>
      <div className=" w-max flex flex-col items-center justify-center  ">
        <span className=" text-[#9C9C9C] text-xl font-medium ">
          10,000 <span className="text-[#4C9641] ">$PEPE</span>
        </span>
        <span className=" text-[#393939] text-base  font-semibold ">
          Memecoin Airdrop
        </span>
      </div>
    </div>
  );
};
