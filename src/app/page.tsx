import Image from "next/image";
import hero from "../../components/hero"
import { div } from "framer-motion/client";
import Hero from "../../components/hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
