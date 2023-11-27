"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Item1 from "./items/Item1";
import Item2 from "./items/Item2";
import Item3 from "./items/Item3";
import HomeBtn from "@/components/homeBtn/HomeBtn";

// Import Swiper styles
import "swiper/css";
import classes from "./Mobile.module.scss";
import MainSVG from "@/components/shared/icons/MainSvg";

export default function Mobile({ link }) {
  return (
    <div className={classes.mobile}>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="44"
        viewBox="0 0 45 44"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 19.4146H17.5637L6.15576 8.00669L9.6913 4.47116L20.5933 15.3732V0H25.5933V15.6908L36.8129 4.47116L40.3485 8.0067L28.9405 19.4146H44.5V24.4146H29.6348L40.804 35.5839L37.2685 39.1194L25.5933 27.4443V44H20.5933V27.7618L9.23576 39.1194L5.70023 35.5839L16.8695 24.4146H0.5V19.4146Z"
          fill="#1C1F27"
        />
      </svg> */}
      <MainSVG />
      <p className={classes.title}>Our services</p>
      <p className={classes.desc}>Get started with a Free Consultation</p>

      <div className="w-[100%]  mt-4">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next1",
            prevEl: ".prev1",
          }}
          loop={true}
        >
          <SwiperSlide>
            <Item1 />
          </SwiperSlide>
          <SwiperSlide>
            <Item2 />
          </SwiperSlide>
          <SwiperSlide>
            <Item3 />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center items-end gap-4 my-4 ">
        <span className="hover:scale-110 transition-all duration-300 prev1">
          {" "}
          <img src="./leftar.svg" alt="left" />
        </span>

        <span className="hover:scale-110 transition-all duration-300 next1">
          <img src="./rightar.svg" alt="right" />
        </span>
      </div>
      {link && <HomeBtn text="Book consultation" href="/" padding={false} />}
    </div>
  );
}
