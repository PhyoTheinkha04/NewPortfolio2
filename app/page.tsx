'use client';
import Image from "next/image";
import Intro from "./intro"; 
import Tools from "./tools";
import Projects from "./projects";
import Design from "./design";
import { useEffect } from "react";
export default function Home() {
 useEffect(() => {
   (
     async () => {
       const locomotiveScroll = (await import("locomotive-scroll")).default;
       const locomotiveScrollInstance = new locomotiveScroll();
     }
   )()
 },[])
  return (
    <main className="w-[73%] mx-auto">   
      <Intro />
      <Projects />
      <Design />
      <Tools />
    </main>
  );
}
