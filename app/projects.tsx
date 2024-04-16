'use client';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";


const Projects = () => {
useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".name", {
      scrollTrigger: { 
        trigger: ".name",
        start: "-60% center",
        end: "center center",
        markers: false,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "slow",
      stagger: 0.3,
      delay: 0.1,
    });
  gsap.from(".info", {
    scrollTrigger: {
      trigger: ".info",
      start: "-200% center",
      end: "center center",
      markers: false,
      toggleActions: "restart none none reverse",
    },
    opacity: 0,
    y:60,
    duration: 1,
    ease: "slow",
    stagger: 0.3,
    delay: 0.1,
  });
  
})
return (
  <div>
    <section className="h-screen">
      <div data-scroll data-scroll-speed="0.5" className="">
        <p className="text-white font-neutral-bold text-[135px] text-left name">
          PROJECTS
        </p>
        <div className="grid grid-rows-3 gap-5 border-[3px] border-white p-[7px] name">
          <div className="w-[73%}">
            <div className="flex info">
              <Image
                src="/Pkt.png"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px] object-contain"
              />
              <div className="pl-[10px]">
                <p className="leading-[70px] text-white font-neutral-bold text-[60px] text-left info">
                  PKT INSTITUTE
                </p>
                <p className="text-white font-neutral text-[16px] text-wrap info">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore nesciunt doloremque sed odio accusantium animi sit eos
                  quo, a facilis aspernatur laborum quis, exercitationem
                  explicabo odit facilis aspernatur laborum quis, exercitationem
                  explicabo odit facilis aspernatur laborum quis, exercitationem
                  explicabo odit
                </p>
              </div>
            </div>
          </div>
          <div className="w-[73%}">
            <div className="flex info">
              <Image
                src="/Pkt.png"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px] object-contain"
              />
              <div className="pl-[10px]">
                <p className="leading-[70px] text-white font-neutral-bold text-[50px] text-left info">
                 School management
                </p>
                <p className="text-white font-neutral text-[16px] text-wrapx info">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore nesciunt doloremque sed odio accusantium animi sit eos
                  quo, a facilis aspernatur laborum quis, exercitationem
                  explicabo oditx info facilis aspernatur laborum quis,
                  exercitationem explicabo odit facilis aspernatur laborum quis,
                  exercitationem explicabo odit
                </p>
              </div>
            </div>
          </div>
          <div className="w-[73%}">
            <div className="flex info">
              <Image
                src="/Pkt.png"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px] object-contain"
              />
              <div className="pl-[10px]">
                <p className="leading-[70px] text-white font-neutral-bold text-[50px] text-left info">
                  simple blog system
                </p>
                <p className="text-white font-neutral text-[16px] text-wrapx info">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore nesciunt doloremque sed odio accusantium animi sit eos
                  quo, a facilis aspernatur laborum quis, exercitationem
                  explicabo odit facilis aspernatur laborum quis, exercitationem
                  explicabo odit facilis aspernatur laborum quis, exercitationem
                  explicabo odit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};
export default Projects;
