import React from "react";
import { ToogleContent } from "../ToogleContent/ToogleContent";
import { CatCard } from "../ToogleContent/CatCard";
import { Pepe } from "../ToogleContent/Pepe";
import Timer from "../ToogleContent/Timer";
import LongCard from "../ToogleContent/LongCard";
import { TextContent } from "../ToogleContent/TextContent";
import Image from "next/image";

type Props = {};

export const Content = (props: Props) => {
  return (
    <div className=" w-full xl:w-[1200px] h-max flex flex-wrap items-start justify-center px-2 xl:px-0 mx-auto gap-y-24 py-16 ">
      {/* first section */}
      <div className=" w-full h-max flex flex-col items-center sm:items-end relative ">
        <div className=" w-full z-30 ">
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
          className=" w-fit h-fit  absolute top-40 left-60 inset-x-0 rotate-3 "
        />
        <Image
          src="/assets/line2.svg"
          alt="svg"
          width={1200}
          height={1200}
          className=" w-fit h-fit  absolute -bottom-32 -right-72 "
        />
      </div>
      {/* second section */}
      <div className=" w-full flex flex-col items-center sm:items-start relative ">
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
          className=" w-fit h-fit absolute top-5 left-40 z-0 "
        />
        <Image
          src="/assets/line4.svg"
          alt="svg"
          width={1200}
          height={1200}
          className=" w-fit h-fit absolute -bottom-64 -left-64 z-0 "
        />
      </div>
      {/* third section */}
      <div className=" w-full flex flex-col md:flex-row items-center md:items-start justify-end gap-x-16 md:pr-6 ">
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
