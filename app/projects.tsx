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
        end: "bottom center",
        markers: true,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "slow",
      stagger: 0.3,
      delay: 0.1,
    });
})
return (
  <div className="flex justify-center items-center ">
    <div>
      <p className="text-white font-neutral-bold text-[135px] text-left name">
        PROJECTS
      </p>
      <div className="grid grid-rows-3 gap-5">
        <div className="name">
          <div className="flex border-[3px] border-white p-[7px]">
            <Image
              src="/Pkt.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[500px]     "
            />
            <div className="pl-[10px]">
              <p className="leading-[70px] text-white font-neutral-bold text-[60px] text-left">
                PKT INSTITUTE
              </p>
              <p className="text-white font-neutral text-[16px] text-wrap">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                nesciunt doloremque sed odio accusantium animi sit eos quo, a
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit

              </p>
            </div>
          </div>
        </div>
        <div className="name">
          <div className="flex border-[3px] border-white p-[7px]">
            <Image
              src="/Pkt.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[500px]     "
            />
            <div className="pl-[10px]">
              <p className="leading-[70px] text-white font-neutral-bold text-[60px] text-left">
                PKT INSTITUTE
              </p>
              <p className="text-white font-neutral text-[16px] text-wrap">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                nesciunt doloremque sed odio accusantium animi sit eos quo, a
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
              </p>
            </div>
          </div>
        </div>
        <div className="name">
          <div className="flex border-[3px] border-white p-[7px]">
            <Image
              src="/Pkt.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[500px]     "
            />
            <div className="pl-[10px]">
              <p className="leading-[70px] text-white font-neutral-bold text-[60px] text-left">
                PKT INSTITUTE
              </p>
              <p className="text-white font-neutral text-[16px] text-wrap">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                nesciunt doloremque sed odio accusantium animi sit eos quo, a
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
              </p>
            </div>
          </div>
        </div>
        <div className="name">
          <div className="flex border-[3px] border-white p-[7px]">
            <Image
              src="/Pkt.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[500px]     "
            />
            <div className="pl-[10px]">
              <p className="leading-[70px] text-white font-neutral-bold text-[60px] text-left">
                PKT INSTITUTE
              </p>
              <p className="text-white font-neutral text-[16px] text-wrap">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                nesciunt doloremque sed odio accusantium animi sit eos quo, a
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
                facilis aspernatur laborum quis, exercitationem explicabo odit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default Projects;
