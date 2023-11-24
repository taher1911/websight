"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import classes from "./Projects.module.scss";
import StarSVG from "@/components/shared/icons/Star";
import ProjectNameSVG from "@/components/shared/icons/ProjectNameSvg";
export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Cycle",
      label: "#UX/UI design",
      href: "/",
    },
    {
      id: 2,
      name: "Chameleon",
      label: "#UX/UI design",
      href: "/",
    },
    {
      id: 3,
      name: "Studio 4T",
      label: "#UX/UI design",
      href: "/",
    },
    {
      id: 4,
      name: "Yogi",
      label: "#UX/UI design",
      href: "/",
    },
  ];
  return (
    <section className={classes.projects}>
      <div className={classes.title}>
        <StarSVG /> <span>Recent projects</span>
      </div>
      <div className="w-[100%] my-2 mt-6">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next2",
            prevEl: ".prev2",
          }}
          loop={true}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className={classes.sliderElement}>
                <div
                  className={`flex justify-between items-center ${classes.container}`}
                >
                  <div className={`flex items-center gap-2 ${classes.head}`}>
                    <ProjectNameSVG />
                    <span className="text-[16px] font-[600]">{p.name}</span>
                  </div>
                  <a href={p.href} className={classes.link}>
                    <span className={classes.arrow}>
                      <Image
                        src="/Mask group.svg"
                        alt="arrow"
                        width={20}
                        height={18}
                        priority
                      />
                    </span>
                    <span className={classes.hidden}>
                      <Image
                        src="/Mask white.svg"
                        alt="arrow"
                        width={20}
                        height={18}
                        priority
                      />
                    </span>
                  </a>
                </div>
                <span className={`text-[16px]  ${classes.label}`}>
                  {p.label}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-end gap-4 my-4 mt-8">
          <span className="hover:scale-110 transition-all duration-300 prev2">
            {" "}
            <img src="./leftar.svg" alt="left" />
          </span>

          <span className="hover:scale-110 transition-all duration-300 next2">
            <img src="./rightar.svg" alt="right" />
          </span>
        </div>
      </div>
    </section>
  );
}
