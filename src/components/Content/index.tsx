import React from "react";
import { ToogleContent } from "../ToogleContent/ToogleContent";
import { CatCard } from "../ToogleContent/CatCard";
import { Pepe } from "../ToogleContent/Pepe";
import Timer from "../ToogleContent/Timer";
import LongCard from "../ToogleContent/LongCard";

type Props = {};

export const Content = (props: Props) => {
  return (
    <div className=" w-full h-screen flex flex-wrap items-start justify-center border-b-2 border-[#1B1B1B] ">
      <ToogleContent />
      <CatCard />
      <Pepe />
      <Timer />
      <LongCard />
    </div>
  );
};
