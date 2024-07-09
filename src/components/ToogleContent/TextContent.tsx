import React from "react";
import localFont from "next/font/local";
import { LiaExclamationCircleSolid } from "react-icons/lia";

type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export const TextContent = (props: Props) => {
  return (
    <div
      className=" w-80 rounded-b-md md:rounded-md border-b-[1px] border-x-[1px] md:border-[1px] border-white/20 bg-[#131313] z-20 "
      style={outfit.style}
    >
      <div className=" w-full flex items-center justify-start gap-x-1 border-b-[1px] border-[#1F1F1F] ">
        <span className=" text-[#6B6B6B] pl-4 py-4 ">Reward info</span>
        <span className=" text-lg text-[#717171] ">
          <LiaExclamationCircleSolid />
        </span>
      </div>
      <div className=" p-4 flex flex-col gap-y-4 text-[#7D7D7D] leading-snug tracking-tight ">
        <span className="text-[#C3C3C3]">
          Free access to paid KOL (crypto earning) communities!
        </span>
        <span>
          Win access to exclusive earning communities of some of the the
          greatest earners in crypto for a month, every 24 hours. Get access to
          unmatched insights, a close-knit community of the best airdrop
          earners, and more.
        </span>
        <span>
          To win: make sure you've connected your Twitter and Discord accounts -
          and follow our criteria!
        </span>
      </div>
    </div>
  );
};
