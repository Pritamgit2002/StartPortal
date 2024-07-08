import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { content_footer } from "./content";
import {
  FaDiscord,
  FaSpotify,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
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
      <div className=" w-max min-w-[1248px] flex items-start justify-start gap-x-32 border-b-[1.2px] border-[#646464]/60 py-6 ">
        <div className=" flex flex-col items-start justify-center gap-y-4 w-72 ">
          <span className=" text-3xl font-semibold text-white ">intract</span>
          <p className=" text-base font-medium text-[#7D7D7D] ">
            We are your personal guide for exploring web3 projects & earning
            100x rewards
          </p>
        </div>
        <div className=" w-max flex items-start justify-center gap-x-9 ">
          {content_footer.map((item, i) => (
            <div className=" w-36 flex flex-col gap-y-1 items-start justify-start text-base text-white ">
              <span className=" font-semibold ">{item.title}</span>
              <ul>
                {item.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link}>
                    <li className="mb-1 font-medium text-[#7D7D7D] hover:text-white duration-200 ease-in transition-all ">
                      {link}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* second section */}
      <div className=" w-max max-w-[1248px] flex items-start leading-snug py-8  border-b-[1.2px] border-[#646464]/60">
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
      <div className=" w-max min-w-[1248px] flex items-center justify-between py-6 ">
        <div>
          <p className=" uppercase text-white ">
            CREATED BY{" "}
            <Link
              href="/"
              className=" underline underline-offset-1 cursor-pointer hover:text-[#7D7D7D]  "
            >
              INTRACT
            </Link>{" "}
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
