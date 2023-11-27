"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import classes from "./Projects.module.scss";
import StarSVG from "@/components/shared/icons/Star";
import ProjectNameSVG from "@/components/shared/icons/ProjectNameSvg";
import HomeBtn from "@/components/homeBtn/HomeBtn";
import Link from "next/link";
export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Cycle",
      label: "#UX/UI design",
      href: "/projects/1",
      img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701002607/websight/Rectangle_18211_8_f2vwao.png",
    },
    {
      id: 2,
      name: "Chameleon",
      label: "#UX/UI design",
      href: "/projects/2",
      img: "https://res.cloudinary.com/freelancer3223/image/upload/v1700990811/websight/Rectangle_18211_2_rwr1ac.png",
    },
    {
      id: 3,
      name: "Studio 4T",
      label: "#UX/UI design",
      href: "/projects/3",
      img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701002170/websight/Rectangle_18211_6_piielz.png",
    },
    {
      id: 4,
      name: "Yogi",
      label: "#UX/UI design",
      href: "/projects/4",
      img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701001422/websight/Rectangle_18211_4_unyf9p.png",
    },
  ];
  return (
    <section className={classes.projects}>
      <div className={classes.title}>
        <StarSVG /> <span>Recent projects</span>
      </div>

      {/* pc projects  */}
      <div className="hidden lg:grid grid-cols-2 gap-8 my-10">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`${classes.sliderElement} ${classes.pc_projcet} h-[500px]  flex flex-col justify-between`}
            style={{ boxShadow: "none" }}
          >
            <div className="px-6 pt-4">
              <div
                className={`flex justify-between items-center ${classes.container} z-2`}
              >
                <div className={`flex items-center gap-2 ${classes.head}`}>
                  <ProjectNameSVG />
                  <span className="text-[16px] font-[600]">{p.name}</span>
                </div>
                <Link href={p.href} className={classes.link}>
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
                </Link>
              </div>
              <span className={`text-[16px]  ${classes.label}`}>{p.label}</span>
            </div>
            <div>
              {" "}
              <Image
                src={p.img}
                alt={p.label}
                className="mt-8"
                width={1000}
                height={200}
              />
            </div>

            {/* <img src={p.img} alt={p.label} className="mt-8" /> */}
          </div>
        ))}
      </div>

      {/* mobile projects slider  */}
      <div className="w-[100%] my-2 mt-6 lg:hidden">
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
              <div
                // key={p.id}
                className={`${classes.sliderElement}`}
                style={{ boxShadow: "none" }}
              >
                <div
                  className={`flex justify-between items-center ${classes.container} z-2`}
                >
                  <div className={`flex items-center gap-2 ${classes.head}`}>
                    <ProjectNameSVG width={24} height={24} />
                    <span className="text-[16px] font-[600]">{p.name}</span>
                  </div>
                  <Link href={p.href} className={classes.link}>
                    <span className={classes.arrow}>
                      <img src="/Mask group.svg" alt="arrow" />
                    </span>
                    <span className={classes.hidden}>
                      <img src="/Mask white.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>
                <span className={`text-[16px]  ${classes.label}`}>
                  {p.label}
                </span>
                <Image
                  src={p.img}
                  alt={p.label}
                  className="mt-8"
                  width={1000}
                  height={200}
                />
                {/* <img src={p.img} alt={p.label} className="mt-8" /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-end gap-4 my-4 mt-8 lg:hidden">
          <span className="hover:scale-110 transition-all duration-300 prev2 cursor-pointer">
            {" "}
            <img src="./leftar.svg" alt="left" />
          </span>

          <span className="hover:scale-110 transition-all duration-300 next2 cursor-pointer">
            <img src="./rightar.svg" alt="right" />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start">
        <HomeBtn text={"View all"} href="/projects" padding={true} />
      </div>
    </section>
  );
}
