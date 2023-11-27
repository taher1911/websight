"use client";
import Image from "next/image";

import MainSVG from "@/components/shared/icons/MainSvg";
import ProjectNameSVG from "@/components/shared/icons/ProjectNameSvg";

import classes from "./Style.module.scss";
import Link from "next/link";
import { useState } from "react";
export default function ProjectsComp() {
  const [filterd, setFilterd] = useState({
    featured: false,
    online: false,
    tailored: false,
    philanthropic: false,
    interactive: false,
    reservation: false,
    uiux: false,
  });
  const projects = [
    {
      id: 1,
      name: "Cycle",
      label: "#UX/UI design",
      href: "/projects/1",
      img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701114247/websight/Rectangle_45_aflhpz.png",
    },
    {
      id: 2,
      name: "Chameleon",
      label: "#UX/UI design",
      href: "/projects/2",
      img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701114245/websight/Property_1_Default_c01jyx.png",
    },
    {
      id: 3,
      name: "Studio 4T",
      label: "#UX/UI design",
      href: "/projects/3",
      img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701114236/websight/Rectangle_45_1_rg5j4g.png",
    },
    {
      id: 4,
      name: "Yogi",
      label: "#UX/UI design",
      href: "/projects/4",
      img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701114236/websight/Rectangle_45_1_rg5j4g.png",
    },
  ];
  return (
    <section className="my-[3rem] lg:my-[10vh]">
      <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center ">
        <MainSVG />
        <h2 className="text-[24px] font-[600] w-[232px] lg:w-full lg:text-[3.6vw] text-center lg:text-left leading-7 mt-3 lg:mt-10">
          Our projects
        </h2>
      </div>

      <div className="min-w-[100%]  rounded-[30px] lg:border-[1px] border-solid border-[#1C1F27] lg:shadow-[2px_2px_0px_0px_#1C1F27] lg:p-[43px] lg:pt-[0] lg:mt-[3rem]">
        <ul
          className="hidden lg:flex flex-row flex-wrap gap-[20px]  mt-[28px] overflow-x-auto projects-tabs lg:mb-[100px]"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          <li
            className={`p-[10px] rounded-[30px]  cursor-pointer transition-all duration-300 ease-in-out`}
            style={{
              color: filterd.featured ? "#fff" : "#fff",
              background: filterd.featured ? "black" : "#B889D8",
            }}
            onClick={() =>
              setFilterd({ ...filterd, featured: !filterd.featured })
            }
          >
            Featured
          </li>
          <li
            className={`p-[10px] rounded-[30px] border-[1px] border-solid border-[#1C1F27]  cursor-pointer  transition-all duration-300 ease-in-out`}
            style={{
              color: filterd.online ? "#fff" : "#1C1F27",
              background: filterd.online ? "black" : "#E6F3F9",
            }}
            onClick={() => setFilterd({ ...filterd, online: !filterd.online })}
          >
            Online Retail Solutions
          </li>
          <li
            className="p-[10px] rounded-[30px] border-[1px] border-solid border-[#1C1F27] cursor-pointer transition-all duration-300 ease-in-out"
            style={{
              color: filterd.tailored ? "#fff" : "#1C1F27",
              background: filterd.tailored ? "black" : "#E0C6E4",
            }}
            onClick={() =>
              setFilterd({ ...filterd, tailored: !filterd.tailored })
            }
          >
            Tailored Web Experiences
          </li>
          <li
            className="p-[10px] rounded-[30px] border-[1px] border-solid border-[#1C1F27] cursor-pointer transition-all duration-300 ease-in-out"
            style={{
              color: filterd.philanthropic ? "#fff" : "#1C1F27",
              background: filterd.philanthropic ? "black" : "#fff",
            }}
            onClick={() =>
              setFilterd({ ...filterd, philanthropic: !filterd.philanthropic })
            }
          >
            Philanthropic Platforms
          </li>

          <li
            className="p-[10px] rounded-[30px] border-[1px] border-solid border-[#1C1F27] cursor-pointer transition-all duration-300 ease-in-out"
            style={{
              color: filterd.interactive ? "#fff" : "#E0C6E4",
              background: filterd.interactive ? "black" : "#1C1F27",
            }}
            onClick={() =>
              setFilterd({ ...filterd, interactive: !filterd.interactive })
            }
          >
            Interactive Menus
          </li>
          <li
            className="p-[10px] rounded-[30px] border-[1px] border-solid border-[#1C1F27] cursor-pointer transition-all duration-300 ease-in-out "
            style={{
              color: filterd.reservation ? "#fff" : "#fff",
              background: filterd.reservation ? "black" : "#B889D8",
            }}
            onClick={() =>
              setFilterd({ ...filterd, reservation: !filterd.reservation })
            }
          >
            Reservation & Scheduling Systems
          </li>
          <li
            className="p-[10px] rounded-[30px] border-[1px] border-solid border-[#1C1F27] cursor-pointer transition-all duration-300 ease-in-out"
            style={{
              color: filterd.uiux ? "#fff" : "#B889D8",
              background: filterd.uiux ? "black" : "#E6F3F9",
            }}
            onClick={() => setFilterd({ ...filterd, uiux: !filterd.uiux })}
          >
            UI/UX Design Studio
          </li>
        </ul>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-[6rem]">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`${classes.sliderElement} w-[545px] h-[545px]  bg-[image:var(--image-url)] relative px-6 pt-4 `}
              style={{ boxShadow: "none", "--image-url": `url(${p.img})` }}
            >
              <Link
                href={p.href}
                className="absolute w-full h-full left-0 top-0 rounded-[30px]"
              ></Link>
              <div
                className={`flex justify-between items-center ${classes.container} z-2 `}
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
              {/* <Image
                src={p.img}
                alt={p.label}
                className="w-full "
                width={1135}
                height={629}
              /> */}
              {/* <img src={p.img} alt={p.label} className="mt-4" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
