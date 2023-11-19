"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import classes from "./Projects.module.scss";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
        >
          <path
            d="M18 1C18 1 23 5.02946 23 10C23 14.9706 18 19 18 19C18 19 13 14.9706 13 10C13 5.02945 18 1 18 1Z"
            fill="#1C1F27"
          />
          <path
            d="M36 19C36 19 31.9705 24 27 24C22.0294 24 18 19 18 19C18 19 22.0294 14 27 14C31.9706 14 36 19 36 19Z"
            fill="#1C1F27"
          />
          <path
            d="M18 19C18 19 23 23.0295 23 28C23 32.9706 18 37 18 37C18 37 13 32.9706 13 28C13 23.0294 18 19 18 19Z"
            fill="#1C1F27"
          />
          <path
            d="M18 19C18 19 13.9705 24 8.99998 24C4.02941 24 -2.18558e-07 19 -2.18558e-07 19C-2.18558e-07 19 4.02943 14 8.99999 14C13.9706 14 18 19 18 19Z"
            fill="#1C1F27"
          />
        </svg>
        <span>Recent projects</span>
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className={classes.sliderElement}>
                <div
                  className={`flex justify-between items-center ${classes.container}`}
                >
                  <div className={`flex items-center gap-2 ${classes.head}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path d="M18 18L20 36H16L18 18Z" fill="#1C1F27" />
                      <path
                        d="M18.1422 18.1422L32.2844 29.4559L29.4559 32.2843L18.1422 18.1422Z"
                        fill="#1C1F27"
                      />
                      <path
                        d="M18 18L-1.74846e-07 20L0 16L18 18Z"
                        fill="#1C1F27"
                      />
                      <path
                        d="M18.1422 18.1422L6.82853 32.2844L4.00011 29.4559L18.1422 18.1422Z"
                        fill="#1C1F27"
                      />
                      <path d="M18 18L20 0H16L18 18Z" fill="#1C1F27" />
                      <path
                        d="M18.1422 18.1422L6.82853 4.00005L4.00011 6.82847L18.1422 18.1422Z"
                        fill="#1C1F27"
                      />
                      <path d="M18 18L36 20L36 16L18 18Z" fill="#1C1F27" />
                      <path
                        d="M18.1422 18.1422L32.2844 6.82853L29.4559 4.00011L18.1422 18.1422Z"
                        fill="#1C1F27"
                      />
                    </svg>{" "}
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
