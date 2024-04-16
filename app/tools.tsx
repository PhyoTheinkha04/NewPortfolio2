import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
const Tools = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".t1", {
      scrollTrigger: {
        trigger: ".tools",
        start: "top center",
        end: "bottom center", 
        markers: true,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      ease: "slow",
    })
    gsap.from(".t2", {
      scrollTrigger: {
        trigger: ".tools",
        start: "top center",
        end: "bottom center",
        markers: true,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      ease: "slow",
    });
    gsap.from(".icon", {
      scrollTrigger: {
        trigger: ".tools",
        start: "top center",
        end: "bottom center",
        markers: true,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      ease: "slow",
    });
  })
  return (
    <div>
      <section className="h-screen">
        <div data-scroll data-scroll-speed="0.5" className="flex justify-evenly">
          <div className="border-r-[6px] border-white pr-[30px] tools t2">
            <p className="text-white font-neutral-bold text-[81px] leading-[85px] t1">
              LANGUAGES
            </p>
            <p className="text-white font-neutral-bold text-[234px] leading-[200px] t1">
              And
            </p>
            <p className="text-white font-neutral-bold text-[70px] leading-[86px] t1">
              TOOLS I USED
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[60px] content-center ">
            <Image
              src="/laravel.svg"
              alt="image"
              width={1000}
              height={200}
              className="w-[45px] icon"
            />
            <Image
              src="/php.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[45px] icon"
            />
            <Image
              src="/git.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[45px] icon"
            />
            <Image
              src="/livewire.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[45px] icon"
            />
            <Image
              src="/js.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[45px] icon"
            />
            <Image
              src="/react.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[45px] icon"
            />
            <Image
              src="/figma.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[30px] icon"
            />
            <Image
              src="/tailwind.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[50px] icon"
            />
            <Image
              src="/sql.png"
              alt="image"
              width={1000}
              height={200}
              className="w-[30px] icon"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Tools;
