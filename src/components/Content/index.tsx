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
    <div className="w-[1200px] h-max flex flex-wrap items-start justify-center   mx-auto gap-y-24 py-16 ">
      <div className=" w-full flex flex-col relative ">
        <div className=" w-full z-40 ">
          <ToogleContent />
        </div>
        <div className=" w-full flex items-center justify-end mt-5 z-40 ">
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
      <div className=" w-full flex flex-col relative">
        <div className=" w-full flex items-center justify-center ml-24 ">
          <ToogleContent />
        </div>
        <div className="  w-full mt-28 ">
          <CatCard />{" "}
        </div>
        <Image
          src="/assets/line3.svg"
          alt="svg"
          width={1200}
          height={1200}
          className=" w-fit h-fit  absolute top-5 left-40 "
        />
        <Image
          src="/assets/line4.svg"
          alt="svg"
          width={1200}
          height={1200}
          className=" w-fit h-fit  absolute -bottom-64 -left-64 "
        />
      </div>
      <div className=" w-full flex items-start justify-end gap-x-16 pr-6  ">
        <div className=" w-max flex flex-col items-center justify-center gap-y-4 ">
          <Timer />
          <LongCard />
        </div>
        <div className=" mt-8 relative ">
          <TextContent />
          <Image
            src="/assets/corner-line.svg"
            alt="image"
            width={1200}
            height={1200}
            className=" h-fit w-fit object-contain absolute -bottom-16 -left-16 z-10  "
          />
        </div>
      </div>
      {/*<Pepe/>*/}
    </div>
  );
};
