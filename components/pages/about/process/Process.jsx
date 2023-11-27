"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Achievements from "@/components/shared/achievements/Achievements";
// Import Swiper styles
import "swiper/css";
import ProjectNameSVG from "@/components/shared/icons/ProjectNameSvg";
export default function Process() {
  const process = [
    {
      id: 1,
      title: "Research & Discovery",
      description:
        "Our experienced team uncovers valuable insights, charts effective paths, reviews data, analyzes trends, and crafts success-driven strategies for your goals.",
    },
    {
      id: 2,
      title: "Strategy & Creative Direction",
      description:
        "Our strategists and creative directors partner with you to craft intelligent, impactful web content, ensuring your website drives growth.",
    },
    {
      id: 3,
      title: "Design & Development",
      description:
        "Our team creates beautiful, user-friendly websites using modern technologies to reflect your brand, convey your message, and meet user expectations.",
    },
    {
      id: 4,
      title: "Quality Control",
      description:
        "Our quality assurance team ensures the highest website standards through comprehensive testing and validation, guaranteeing a bug-free experience.",
    },
  ];
  return (
    <section className="mt-[20px] mb-[60px] flex flex-col gap-[60px] lg:gap-[30px] lg:flex-row-reverse lg:items-stretch lg:my-[5em]">
      <Achievements linkTXT={"Contact us"} linkURL={"/contact"} />
      <div className="lg:w-[40%]">
        <div className="flex justify-center lg:justify-start items-center gap-3">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path d="M18 18L20 36H16L18 18Z" fill="#1C1F27" />
            <path
              d="M18.1422 18.1424L32.2844 29.4561L29.4559 32.2846L18.1422 18.1424Z"
              fill="#1C1F27"
            />
            <path d="M18 18L-1.74846e-07 20L0 16L18 18Z" fill="#1C1F27" />
            <path
              d="M18.1422 18.1422L6.82853 32.2844L4.00011 29.4559L18.1422 18.1422Z"
              fill="#1C1F27"
            />
            <path d="M18 18L20 0H16L18 18Z" fill="#1C1F27" />
            <path
              d="M18.1422 18.1424L6.82853 4.00029L4.00011 6.82872L18.1422 18.1424Z"
              fill="#1C1F27"
            />
            <path d="M18 18L36 20L36 16L18 18Z" fill="#1C1F27" />
            <path
              d="M18.1422 18.1422L32.2844 6.82853L29.4559 4.00011L18.1422 18.1422Z"
              fill="#1C1F27"
            />
          </svg> */}
          <ProjectNameSVG width={36} height={36} />
          <span className="text-[24px] font-[600] leading-[130%] lg:text-[36px]">
            Our process
          </span>
        </div>
        <div className="p-[21px]  flex flex-col  rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] mt-[30px]">
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
              {process.map((p) => (
                <SwiperSlide key={p.id}>
                  <div className="w-[100%]   text-center flex flex-col  justify-center items-center lg:items-start lg:justify-start lg:text-left gap-[20px]">
                    <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-start gap-[20px] lg:gap-[10px]">
                      <span className="w-[34px] lg:w-[44px] h-[34px] rounded-full bg-[#1C1F27] text-[#fff] text-[20px] font-[600] flex justify-center items-center">
                        {p.id}
                      </span>
                      <h3 className="text-[24px] font-[600] leading-[130%] w-[270px] lg:w-[100%]">
                        {p.title}
                      </h3>
                    </div>
                    <p
                      className="text-[18px] font-[400] leading-[130%]"
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      {p.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center lg:justify-end items-end gap-4 my-4 mt-8">
            <span className="hover:scale-110 transition-all duration-300 prev3 cursor-pointer">
              {" "}
              <img src="./leftar.svg" alt="left" />
            </span>

            <span className="hover:scale-110 transition-all duration-300 next3 cursor-pointer">
              <img src="./rightar.svg" alt="right" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
