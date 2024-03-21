"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
const Intro = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger,);
    gsap.to(".box", {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.2,
      ease: "slow",
      delay: 0.1,
      scrollTrigger: {
        trigger: ".box",
        start: "top top",
        end: "bottom top",
        // markers: true,
        toggleActions: "restart none none reverse", // Reverse the animation when scrolling up
      },
    });
    
    gsap.to(".box2", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.1,
      ease: "slow",
      delay: 0.1,
      scrollTrigger: {
        trigger: ".box2",
        start: "-30% top",
        end: "bottom top",
        markers: true,
        toggleActions: "restart none none reverse", // Reverse the animation when scrolling up
      },
    });
  });
  useGSAP(() => {
    gsap.from(".box", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "slow",
      delay: 0.6,
    });
    gsap.from(".box2", {
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.1,
      ease: "slow",
      delay: 1 ,
    });
  });
  return (
    <div className="flex justify-center items-center h-screen intro">
      <div>
        <p className="box text-white font-neutral-bold text-[180px] leading-[200px]">
          Hi .
        </p>
        <div className="flex">
          <div className="border-r-[6px] border-white pr-[30px] box">
            <p className="box leading-[136px] text-white font-neutral-bold text-[180px] w-full">
              MY
            </p>
            <p className="box leading-[136px] text-white font-neutral-bold text-[93px] w-full">
              NAME
            </p>
            <p className="box leading-[165px] text-white font-neutral-bold text-[209px] w-full">
              IS
            </p>
          </div>
          <div className="ml-[30px]">
            <p className="box2 leading-[107px] text-white font-neutral-bold text-[135px] mb-[30px]">
              PHYO
            </p>
            <p className="box2 leading-[107px] text-white font-neutral-bold text-[135px] ">
              THEINKHA
            </p>
            <div className="border-[4px] border-white flex justify-center items-center flex-col m-[30px] box2">
              <p className="box2 leading-[80px] text-white font-neutral font-regular text-[64px]">
                JUNIOR DEVELOPER
              </p>
              <p className="box2 leading-[80px] text-white font-neutral font-regular text-[64px]">
                GRAPHIC DESIGNER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
