import React from "react";
import { ToogleContent } from "../Content-ui/ToogleContent";
import { CatCard } from "../Content-ui/CatCard";
import { Pepe } from "../Content-ui/Pepe";
import Timer from "../Content-ui/Timer";
import LongCard from "../Content-ui/LongCard";
import { TextContent } from "../Content-ui/TextContent";
import Image from "next/image";

type Props = {};

export const Content = (props: Props) => {
  return (
    <div className=" w-full xl:w-[1200px] h-max flex flex-wrap items-start justify-center px-2 xl:px-0 mx-auto gap-y-24 py-16 ">
      {/* first section */}
      <div className=" w-full h-max flex flex-col items-center sm:items-end relative ">
        <div className=" w-full z-30 relative ">
          <Image
            src="/assets/glow.svg"
            alt="glow"
            width={2000}
            height={2000}
            className=" w-40 h-24 object-contain absolute -top-16 sm:top-10 -left-10 sm:-left-40 rotate-45 sm:rotate-0  "
          />
          <ToogleContent />
        </div>
        <div className=" w-max flex items-center justify-end mt-[425px] sm:mt-5 z-40 ">
          <CatCard />
        </div>
        <Image
          src="/assets/line1.svg"
          alt="svg"
          width={1200}
          height={1200}
          className=" w-fit h-fit  absolute bottom-[420px] sm:top-40 left-4 sm:left-60 inset-x-0 rotate-90 sm:rotate-3 "
        />
        <Image
          src="/assets/line2.svg"
          alt="svg"
          width={1200}
          height={1200}
          className=" w-fit h-fit  absolute -bottom-32 sm:-bottom-32 -right-12 sm:-right-72  "
        />
      </div>
      {/* second section */}
      <div className=" w-full flex flex-col items-center sm:items-start relative  ">
        <div className=" w-full flex items-start justify-center sm:ml-24 z-40 ">
          <ToogleContent />
        </div>
        <div className="  w-max mt-96 sm:mt-40 md:mt-28 z-40 ">
          <CatCard />{" "}
        </div>
        <Image
          src="/assets/line3.svg"
          alt="svg"
          width={1200}
          height={1200}
          className=" w-fit h-fit absolute bottom-10 sm:top-5 right-12 sm:left-40 z-0 rotate-45 sm:rotate-0 "
        />
        <Image
          src="/assets/line4.svg"
          alt="svg"
          width={1200}
          height={1200}
          className=" w-fit h-fit absolute -bottom-44 sm:-bottom-64 left-0 sm:-left-64 z-0 rotate-6 sm:rotate-0 scale-110 "
        />
      </div>
      {/* third section */}
      <div className=" w-full flex flex-col md:flex-row items-center md:items-start justify-end gap-x-16 md:pr-6 mt-16 sm:mt-0 ">
        <div className=" w-max flex flex-col items-center justify-center gap-y-4 ">
          <Timer />
          <LongCard />
        </div>
        <div className=" md:mt-8 relative z-30 ">
          <TextContent />
          <div className="z-10">
            <Image
              src="/assets/corner-line.svg"
              alt="image"
              width={1200}
              height={1200}
              className=" h-fit w-fit object-contain absolute -bottom-16 -left-16 z-10 hidden md:block   "
            />
          </div>
        </div>
      </div>
      {/*<Pepe/>*/}
    </div>
  );
};
