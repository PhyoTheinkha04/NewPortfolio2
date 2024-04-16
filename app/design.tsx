"use client";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Design = () => {
  useGSAP(() => {
     gsap.registerPlugin(ScrollTrigger);
     gsap.from(".design", {
       scrollTrigger: {
         trigger: ".design",
         start: "-150px center",
         end: "top center",
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
    gsap.from(".img", {
      scrollTrigger: {
        trigger: ".design",
        start: "-150px center",
        end: "top center",
        markers: true,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "slow",
      stagger: 0.2,
      delay: 0.1,
    });
  });
  return (
    <div>
      <section className="">
        <div  data-scroll data-scroll-speed="0.3" className="">
          <p className="text-white font-neutral-bold text-[135px] text-left design">
            DESIGNS
          </p>
          <div className="grid grid-cols-4 gap-3 border-[3px] border-white p-[7px] design">
            <div className="img">
              <Image
                src="/1.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/2.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/3.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/4.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/5.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/6.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/7.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/8.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/9.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/10.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/11.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
            <div className="img">
              <Image
                src="/12.jpg"
                alt="image"
                width={1000}
                height={200}
                className="w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Design;
