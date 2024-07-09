import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { TbTriangleFilled } from "react-icons/tb";
type Props = {};
const content = [
  {
    title: "How to plan your retirement with crypto?",
    img: "/assets/creator1.png",
  },
  { title: "Why are there limited Bitcoin?", img: "/assets/creator2.png" },
  { title: "How does Uniswap actually work?", img: "/assets/creator1.png" },
  {
    title: "How to spot crypto projects to invest in?",
    img: "/assets/creator3.png",
  },
];
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
const CryptoCreates = (props: Props) => {
  return (
    <div
      className=" w-full h-max py-16 flex flex-col items-center justify-center gap-y-10 border-b-2 border-[#1B1B1B] px-2 "
      style={outfit.style}
    >
      <div className=" w-full flex flex-col items-center justify-center gap-y-1 text-center ">
        <span className=" text-2xl text-white font-semibold ">
          Top Crypto Creators and Projects to Follow
        </span>
        <span className=" text-base text-[#696969] font-semibold ">
          Answers to your crypto doubts, straight from the experts
        </span>
      </div>
      <div className=" w-full flex flex-wrap items-center justify-center gap-4">
        {content.map((item, i) => (
          <div className=" h-96 w-72 rounded-2xl bg-yellow-400 relative overflow-hidden cursor-pointer group ">
            <div className=" absolute top-4 right-4 border-[1px] border-[#ffffff]/30 flex items-center justify-center p-3 rounded-full bg-black/20 ">
              <Image
                src="/assets/reel.svg"
                alt="photo"
                width={1200}
                height={1200}
                className=" w-6 h-6 object-contain "
              />
            </div>
            <div className=" absolute left-28 top-56 border-[1px] border-[#ffffff]/30 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-black/20 opacity-0 group-hover:opacity-100 duration-300 ease-out group-hover:-translate-y-14 ">
              <span className=" text-white text-2xl rotate-90 ">
                <TbTriangleFilled />
              </span>
            </div>
            {/* <div className=" w-full h-20 bg-gradient-to-t from-gray-400/90 to-gray-100/25 absolute bottom-0 "> */}
            <Image
              src={item.img}
              alt="photo"
              width={1200}
              height={1200}
              className=" w-full h-full object-cover "
            />
            <div className=" bg-gradient-to-t from-gray-800/50 to-gray-400/25 backdrop-blur-sm absolute bottom-0 h-20 w-full  ">
              <span className=" text-2xl font-medium text-white/70 mx-4 leading-relaxed absolute h-20  bottom-0 ">
                {item.title}
              </span>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCreates;
