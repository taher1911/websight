import Image from "next/image";

import MainSVG from "@/components/shared/icons/MainSvg";
import ProjectNameSVG from "@/components/shared/icons/ProjectNameSvg";

import classes from "./Style.module.scss";
export default function ProjectsComp() {
  const projects = [
    {
      id: 1,
      name: "Cycle",
      label: "#UX/UI design",
      href: "/",
      img: "p1.png",
    },
    {
      id: 2,
      name: "Chameleon",
      label: "#UX/UI design",
      href: "/",
      img: "p2.png",
    },
    {
      id: 3,
      name: "Studio 4T",
      label: "#UX/UI design",
      href: "/",
      img: "p4.png",
    },
    {
      id: 4,
      name: "Yogi",
      label: "#UX/UI design",
      href: "/",
      img: "p3.png",
    },
  ];
  return (
    <section className="my-[3rem]">
      <div className="flex flex-col justify-center items-center ">
        <MainSVG />
        <h2 className="text-[24px] font-[600] w-[232px] text-center leading-7 mt-3">
          Our projects
        </h2>
      </div>

      <div className="min-w-[100%]">
        {/* <ul
          className=" flex flex-row gap-3  mt-[28px] overflow-x-auto projects-tabs"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          <li className="p-[10px] rounded-[30px] bg-[#B889D8]  text-white ">
            Featured
          </li>
          <li className="p-[10px] rounded-[30px] bg-[#B889D8]  text-white w-[250px]">
            Online Retail Solutions
          </li>
          <li className="p-[10px] rounded-[30px] bg-[#B889D8] text-white ">
            Featured
          </li>
          <li className="p-[10px] rounded-[30px] bg-[#B889D8] text-white ">
            Online Retail Solutions
          </li>
          <li className="p-[10px] rounded">Featured</li>
          <li className="p-[10px] rounded-[30px] bg-[#B889D8] text-white ">
            Online Retail Solutions
          </li>
          <li className="p-[10px] rounded-[30px] bg-[#B889D8] text-white">
            Featured
          </li>
        </ul> */}
        <div className="grid grid-cols-1 gap-6 mt-10 mb-[6rem]">
          {projects.map((p) => (
            <div key={p.id} className={classes.sliderElement}>
              <div
                className={`flex justify-between items-center ${classes.container} z-2`}
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
              <span className={`text-[16px]  ${classes.label}`}>{p.label}</span>
              <img src={p.img} alt={p.label} className="mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}