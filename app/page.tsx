
import Image from "next/image";
import Intro from "./intro";
import Projects from "./projects";
import Design from "./design";

export default function Home() {
 
  return (
    <main className="w-[73%] mx-auto">   
      <Intro />
      <Projects />
      <Design />
    </main>
  );
}
