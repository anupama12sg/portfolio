import Image from "next/image";
import { div } from "framer-motion/client";
import Hero from "../../components/hero";

export default function Home() {
  return (
    <main className="relative bg-white justify-center items-center flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
