"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export default function Hero({}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50); // delay for animation
    return () => clearTimeout(timer);
  }, []);
  return (
    <main
      className="w-full h-max flex items-center justify-center mt-24 xl:mt-32 2xl:mt-60 mb-10 2xl:mb-48 pt-[70px]"
      style={outfit.style}
    >
      <div className=" h-max w-max flex flex-col items-center justify-center gap-y-2 xl:gap-y-6  z-30 ">
        <Image
          src="/assets/logo.gif"
          alt="hero text"
          width={1200}
          height={1200}
          className=" w-72 h-full object-contain opacity-50 "
        />
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className=" flex flex-col items-center justify-center leading-snug xl:leading-normal "
          >
            <p className=" text-lg sm:text-xl font-medium text-[#D2D0D2]  text-center leading-tight tracking-tight sm:tracking-normal ">
              Intract users{" "}
              <span className="text-[#6B6A6B]">
                have together made more than
              </span>{" "}
              $100 million <span className="text-[#6B6A6B]">in web3.</span>
            </p>
            <p className=" text-lg sm:text-xl font-medium text-[#D2D0D2] tracking-tight sm:tracking-normal ">
              {" "}
              <span className="text-[#6B6A6B]">Join them and</span> learn how to
              earn crypto!
            </p>
          </motion.div>
        )}
        {isLoaded && (
          <motion.button
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className=" flex items-center justify-center gap-x-2 rounded-lg text-white py-2 px-16 bg-[#6A3BEA]/90 hover:bg-[#6A3BEA] group "
            style={outfit.style}
          >
            <span className=" text-sm group-hover:translate-x-1 duration-700 ease-out transition-all  ">
              Get Started
            </span>
            <Image
              src="/assets/arrow-right.svg"
              alt="right arrow"
              width={1200}
              height={1200}
              className=" w-4 h-4 group-hover:translate-x-1 duration-700 ease-out  transition-all "
            />
          </motion.button>
        )}
      </div>
    </main>
  );
}
