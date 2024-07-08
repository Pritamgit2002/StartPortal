import { Content } from "@/components/Content";
import CryptoCreates from "@/components/Crypto-Creators";
import { Dictonary } from "@/components/Dictonary";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" bg-black h-full w-full relative overflow-hidden ">
      <Navbar />
      <Hero />
      <div className=" w-full border-b-2 border-[#1B1B1B] ">
        <Content />
      </div>
      <CryptoCreates />
      <Dictonary />
      <Footer />
    </main>
  );
}
