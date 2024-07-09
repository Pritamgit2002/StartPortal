"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import localFont from "next/font/local";

let tabs = [
  { id: "world", label: "Essentials" },
  { id: "ny", label: "Alpha Hub" },
];
const outfit = localFont({
  src: "../../../public/font/Outfit-VariableFont_wght.ttf",
});
export function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div
      className=" w-max flex space-x-1 z-50 border-[1.2px] border-white/25  rounded-full backdrop-blur-md  "
      style={outfit.style}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? " text-gray-100 " : "hover:text-[#707070]"
          } relative rounded-full px-6 py-1.5 text-base font-medium text-[#707070]/65 outline-sky-400 transition focus-visible:outline-2  `}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-[#404040] mix-blend-difference text-white "
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
