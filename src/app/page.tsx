import Image from "next/image";
import { div } from "framer-motion/client";
import Hero from "../../components/hero";
import { FloatingNav } from "../../components/ui/floatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "../../components/grid";
import RecentProjects from "../../components/recentProjects";
import { navItems } from "../../data";
import Clients from "../../components/clients";
import Experience from "../../components/ui/myExperience";

export default function Home() {
  return (
    <main className="relative bg-white justify-center items-center flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems= {navItems}/>
        <Hero />
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
      </div>
    </main>
  );
}
