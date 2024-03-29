"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import MainSVG from "@/components/shared/icons/MainSvg";
import HomeBtn from "@/components/homeBtn/HomeBtn";
import StarSVG from "@/components/shared/icons/Star";

// import ImageComponent from "@/components/shared/image/Image";

import classes from "../Style.module.scss";
import ProjectNameSVG from "@/components/shared/icons/ProjectNameSvg";
export default function ProjectComponent({ project, projects }) {
  return (
    <section className="my-[3rem] lg:mt-[4rem] overflow-x-hidden">
      <div className="lg:border-[1px] border-solid border-[#1C1F27]  lg:rounded-[30px] lg:bg-[#E6F3F9] lg:px-[30px] lg:py-[60px]">
        <div className="flex flex-col justify-center items-center lg:justify-start  ">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:w-full lg:flex-row lg:gap-[40px]">
            <MainSVG />
            <div className="flex w-full justify-between items-center">
              <h2 className="text-[24px] font-[600] w-[232px]   text-center lg:w-full lg:text-left leading-7 mt-3 lg:text-[64px]">
                {project.title}
              </h2>
              <div className="hidden lg:block w-[265px]">
                <HomeBtn
                  text={"View website"}
                  href={project.link}
                  padding={false}
                />
              </div>
            </div>
          </div>
          <div
            className="flex justify-start  gap-2 w-full mt-4 lg:ml-[260px]"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            {project.tags.map((el, i) => (
              <Link
                href={"/projects"}
                key={i}
                className="px-[10px] h-[32px] flex justify-center items-center rounded-[96px] border-[1px] border-solid border-[#B889D8]"
              >
                {el}
              </Link>
            ))}
            <span className="px-[10px]  h-[32px] flex justify-center items-center rounded-[96px] border-[1px] border-solid border-[#B889D8]">
              {project.date}
            </span>
          </div>
        </div>

        {/* slider  */}

        <div className=" flex flex-col  mt-[30px]">
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                nextEl: ".next3",
                prevEl: ".prev3",
              }}
              loop={true}
            >
              {project.images.map((p, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full lg:max-w-[1134px] lg:mx-auto">
                    {/* <ImageComponent src={p} className="w-full" /> */}
                    <Image
                      src={p}
                      alt="project-image"
                      className="w-full "
                      width={1135}
                      height={629}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <SwiperSlide className="my-auto">
                <div className="flex flex-col justify-center items-center min-h-[185px]  rounded-[7px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] lg:shadow-none bg-[#E6F3F9] lg:min-h-[75vh] lg:bg-white">
                  <div className="flex flex-col justify-center items-center lg:p-[30px] lg:rounded-[30px] lg:bg-[#E6F3F9] lg:w-[90%] lg:max-w-[913px] lg:border-[1px] border-solid border-[#1C1F27]  lg:shadow-[2px_2px_0px_0px_#1C1F27]">
                    <div className="flex w-[70%] gap-4 lg:gap-10">
                      <MainSVG />
                      <p className="text-[24px] font-[600] lg:text-[2.8vw]">
                        Do you want to see more?
                      </p>
                    </div>
                    <div className="text-center mt-[10px] lg:flex lg:justify-end lg:w-full">
                      <HomeBtn
                        text={"View website"}
                        href={project.link}
                        padding={false}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex justify-center items-end lg:w-full lg:justify-end lg:pr-[3rem] gap-4 my-4 mt-8">
            <span className="hover:scale-110 transition-all duration-300 prev3 cursor-pointer">
              {" "}
              <img
                src="https://res.cloudinary.com/freelancer3223/image/upload/v1700989890/websight/leftar_gkgins.svg"
                alt="left"
              />
            </span>

            <span className="hover:scale-110 transition-all duration-300 next3 cursor-pointer">
              <img
                src="https://res.cloudinary.com/freelancer3223/image/upload/v1700989922/websight/rightar_fzdg6t.svg"
                alt="right"
              />
            </span>
          </div>
          <div className="flex lg:hidden flex-col justify-center items-center my-10">
            <HomeBtn text={"View website"} url={project.link} padding={false} />
          </div>
        </div>
      </div>

      {/* other projects section  */}
      <div className="mt-10 lg:rounded-[30px] lg:p-[30px] lg:border-[1px] border-solid border-[#1C1F27]  lg:my-[7rem]">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:gap-2 ">
          <StarSVG />
          <h2 className="text-[24px] font-[600] w-[232px] text-center leading-7 mt-3 lg:mt-0 lg:text-[30px]">
            Other projects
          </h2>
        </div>

        {/* pc version  */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mt-10 mb-[6rem] lg:mb-10">
          {projects.map((p) => (
            <div
              key={p._id}
              className={`${classes.sliderElement} ${classes.other} w-[335px] bg-[image:var(--image-url)]  relative`}
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
                  <ProjectNameSVG width={25} height={25} />
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
          ))}
        </div>
        {/* mobile version  */}
        <div className="relative lg:hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            lazy={true}
            speed={600}
            autoplay={true}
            className="mt-8 projects-swiper"
            navigation
            pagination={{ clickable: true }}
          >
            {projects.map((p) => (
              <SwiperSlide key={p._id}>
                <div
                  key={p._id}
                  className={`${classes.sliderElement} bg-[image:var(--image-url)]  relative`}
                  style={{
                    boxShadow: "none",
                    "--image-url": `url(${p.cover})`,
                  }}
                >
                  <Link
                    href={`/projects/${p._id}`}
                    className="absolute w-full h-full left-0 top-0 rounded-[30px]"
                  ></Link>
                  <div
                    className={`flex justify-between items-center ${classes.container} z-2`}
                  >
                    <div className={`flex items-center gap-2 ${classes.head}`}>
                      <ProjectNameSVG width={20} height={20} />
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-3"></div>
      </div>
    </section>
  );
}
