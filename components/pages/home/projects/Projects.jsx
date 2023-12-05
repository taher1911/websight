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
export default function Projects({ projectsData, lang, homeText }) {
  return (
    <section className={classes.projects}>
      <div
        className={classes.title}
        style={{
          flexDirection: lang == "en" ? "row" : "row-reverse",
        }}
      >
        <StarSVG />{" "}
        <span>
          {lang == "en" ? homeText.projectsTitle : homeText.projectsTitleAr}
        </span>
      </div>

      {/* pc projects  */}
      <div className="hidden lg:grid grid-cols-2 gap-8 my-10">
        {projectsData.map((p) => (
          <div
            key={p._id}
            className={`${classes.sliderElement} ${classes.pc_projcet} h-[500px]   flex flex-col justify-between bg-[image:var(--image-url)] relative`}
            style={{
              boxShadow: "none",
              "--image-url": `url(${p.cover})`,
            }}
          >
            <Link
              href={`/projects/${p._id}`}
              className="absolute w-full h-full left-0 top-0 rounded-[30px]"
            ></Link>
            <div className="px-6 pt-4 ">
              <div
                className={`flex justify-between items-center ${classes.container} z-2`}
              >
                <div className={`flex items-center gap-2 ${classes.head}`}>
                  <ProjectNameSVG width={30} height={30} />
                  <span className="text-[16px] font-[600]">{p.title}</span>
                </div>
                <Link href={`/projects/${p._id}`} className={classes.link}>
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
              <span className={`text-[16px]  ${classes.label}`}>
                #{p.tags[0]}
              </span>
            </div>

            <div>
              {" "}
              {/* <Image
                src={p.img}
                alt={p.label}
                className="mt-8"
                width={1000}
                height={200}
              /> */}
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
          {projectsData.map((p) => (
            <SwiperSlide key={p._id}>
              <div
                // key={p.id}
                className={`${classes.sliderElement} bg-[image:var(--image-url)] relative`}
                style={{ boxShadow: "none", "--image-url": `url(${p.cover})` }}
              >
                <Link
                  href={`/projects/${p._id}`}
                  className="absolute w-full h-full left-0 top-0 rounded-[30px]"
                ></Link>
                <div
                  className={`flex justify-between items-center ${classes.container} z-2`}
                >
                  <div className={`flex items-center gap-2 ${classes.head}`}>
                    <ProjectNameSVG width={24} height={24} />
                    <span className="text-[16px] font-[600]">{p.title}</span>
                  </div>
                  <Link href={`/projects/${p._id}`} className={classes.link}>
                    <span className={classes.arrow}>
                      <img src="/Mask group.svg" alt="arrow" />
                    </span>
                    <span className={classes.hidden}>
                      <img src="/Mask white.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>
                <span className={`text-[16px]  ${classes.label}`}>
                  {p.tags[0]}
                </span>
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
        <HomeBtn
          text={lang == "en" ? "View all" : "عرض الكل"}
          href="/projects"
          padding={true}
        />
      </div>
    </section>
  );
}
