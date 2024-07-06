import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export const CatCard = (props: Props) => {
  return (
    <div
      className=" w-[265px] flex flex-col items-start gap-y-1 bg-transparent "
      style={outfit.style}
    >
      <div className=" relative p-2 border-[2px] border-[#434343] rounded-2xl  ">
        <Image
          src="/assets/cat1.png"
          alt="cat"
          width={1200}
          height={1200}
          className=" w-40 h-44 object-cover rounded-2xl "
        />
        <div className=" absolute -right-6 -bottom-5 bg-[#131313] p-3 border-[2px] border-[#2F2F2F] rounded-full  ">
          <Image
            src="/assets/lock.svg"
            alt="cat"
            width={1200}
            height={1200}
            className=" w-6 h-6 object-cover rounded-xl "
          />
        </div>
        <div className=" absolute -top-16 left-16 p-3 rounded-full text-[#505050] border-[1.2px] border-[#505050] bg-[#262626] text-2xl ">
          <IoMdCheckmark />
        </div>
      </div>
      <div className=" w-full flex flex-col items-start justify-center gap-y-[10px] mt-2 ">
        <span className=" text-[#9B9B9B] text-xl font-medium leading-snug ">
          Intract Certified: Learner NFT
        </span>
        <p className=" text-[#373737] text-base font-semibold leading-snug ">
          Your crypto black-belt <br /> certificate
        </p>
        <button className=" text-lg px-16 py-2 border-[1.2px] border-[#202020] text-[#717171] rounded-xl font-medium bg-[#141414] ">
          Claim
        </button>
      </div>
    </div>
  );
};
