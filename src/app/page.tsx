import { Content } from "@/components/Content";
import { Dictonary } from "@/components/Dictonary";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className=" bg-black h-full ">
      <Hero />
      <Content />
      <Dictonary />
    </main>
  );
}
