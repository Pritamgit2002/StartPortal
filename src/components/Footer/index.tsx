import React from "react";
import localFont from "next/font/local";

import { content_footer } from "./content";
import {
  FaDiscord,
  FaSpotify,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export const Footer = (props: Props) => {
  return (
    <div
      className=" border-t-[1px] border-[#1B1B1B] flex flex-col items-center justify-center w-full  pt-4 "
      style={outfit.style}
    >
      {/* first section */}
      <div className="w-full max-w-[1248px] flex flex-wrap md:flex-col lg:flex-row items-start justify-start gap-y-14 md:gap-y-20 lg:gap-x-16  2xl:gap-x-32 border-b-[1.2px] border-[#646464]/60 py-6 px-4 md:px-8 xl:px-0  ">
        <div className=" flex flex-col items-start justify-center gap-y-4 w-72 ">
          <span className=" text-3xl font-semibold text-white ">intract</span>
          <p className=" text-base font-medium text-[#7D7D7D] ">
            We are your personal guide for exploring web3 projects & earning
            100x rewards
          </p>
        </div>
        <div className=" w-max flex flex-wrap 2xl:flex-row items-start justify-start xl:justify-center gap-6 xl:gap-x-9 ">
          {content_footer.map((item, i) => (
            <div
              key={i}
              className="w-max xl:w-36 flex flex-col gap-y-1 items-start justify-start text-base text-white "
            >
              <span className="font-semibold">{item.title}</span>
              <ul className="cursor-pointer ">
                {item.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="mb-1 font-medium text-[#7D7D7D] !hover:text-white duration-200 ease-in transition-all !cursor-pointer lg:whitespace-nowrap "
                  >
                    <a href={link}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* second section */}
      <div className=" w-full xl:w-[1248px] flex items-start leading-snug py-8  border-b-[1.2px] border-[#646464]/60 px-4 md:px-8 xl:px-0 ">
        <p className="  text-[#7D7D7D]">
          <span className="text-white">Disclaimer: </span>
          Crypto Products, Virtual Digital Assets, and NFTs are unregulated and
          can be highly risky. There may be no regulatory recourse for any loss
          from such transactions. We advise the viewer to proceed with caution.
          Nothing in this website or any communication published by us amounts
          to, is intended to be, or should be construed as investment or
          purchase advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </p>
      </div>

      {/* third section */}
      <div className=" w-full xl:w-[1248px] flex flex-wrap items-center justify-between py-6 px-4 md:px-8 xl:px-0 gap-y-8  ">
        <div>
          <p className=" uppercase text-white ">
            CREATED BY{" "}
            <Link href="/" legacyBehavior>
              <a className="underline underline-offset-1 cursor-pointer hover:text-[#7D7D7D]">
                INTRACT
              </a>
            </Link>
          </p>
        </div>
        <div className=" w-max flex items-center justify-center gap-x-3 ">
          <Link
            href="/"
            className=" p-2 text-2xl text-[#377DFF] bg-[#1A1A1A] rounded-lg "
          >
            <FaTwitter />
          </Link>
          <Link
            href="/"
            className=" p-2 text-2xl text-[#09A5BE] bg-[#1A1A1A] rounded-lg "
          >
            <FaDiscord />
          </Link>
          <Link
            href="/"
            className=" p-2 text-2xl text-[#377DFF] bg-[#1A1A1A] rounded-lg "
          >
            <FaTelegramPlane />
          </Link>
          <Link
            href="/"
            className=" p-2 text-2xl text-[#04D404] bg-[#1A1A1A] rounded-lg "
          >
            <FaSpotify />
          </Link>
        </div>
      </div>
    </div>
  );
};
