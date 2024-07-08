"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { PiClockCountdownFill } from "react-icons/pi";
import Image from "next/image";

type Props = {};
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});

const calculateTimeLeft = () => {
  const difference = +new Date("2024-12-31T00:00:00Z") - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Timer = (props: Props) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className="w-80 h-max rounded-xl bg-[#141414] border-[1.2px] border-[#202020] p-3 space-y-4 z-40 "
      style={outfit.style}
    >
      <div className="w-full flex items-center justify-start gap-x-2 text-[#717171]">
        <span className="text-lg text-[#FA8922]">
          <PiClockCountdownFill />
        </span>
        <span className="text-lg font-medium">Reward unlocks in</span>
      </div>
      <div className="w-full space-x-1 flex">
        {Array.from({ length: 37 }).map((_, index) => (
          <div key={index} className="w-1 h-[1.5px] bg-[#373737]" />
        ))}
      </div>
      <div className="border-2 border-[#242424] w-72 h-24 rounded-xl relative">
        <Image
          src="/assets/dotBg.png"
          alt="bg"
          width={1200}
          height={1200}
          className="w-full h-full object-cover"
        />
        <div className="flex space-x-4 text-center absolute inset-0 justify-center items-center">
          <div>
            <span className="block text-4xl text-[#9C9C9C] font-medium ">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-base text-[#383838] font-medium ">Days</span>
          </div>
          <div>
            <span className="block text-4xl text-[#9C9C9C] font-medium ">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-base text-[#383838] font-medium ">Hrs</span>
          </div>
          <div>
            <span className="block text-4xl text-[#9C9C9C] font-medium ">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-base text-[#383838] font-medium ">Mins</span>
          </div>
          <div>
            <span className="block text-4xl text-[#9C9C9C] font-medium ">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-base text-[#383838] font-medium ">Sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
