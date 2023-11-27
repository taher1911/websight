"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Burger from "./ui/mobile-menu/Burger";
import Menu from "./ui/mobile-menu/Menu";
import HomeBtn from "../homeBtn/HomeBtn";

export default function Nav() {
  const [clicked, setClicked] = useState(false);
  const pathname = usePathname();

  const setClickedHandler = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between items-center my-[33px] mx-[30px] lg:mx-auto lg:w-[90%] max-w-[1250px] ">
        <a href="/">
          <Image
            src="https://res.cloudinary.com/freelancer3223/image/upload/v1701032156/websight/WebSight_Logo_copy_1_c0dsoy.png"
            alt="logo"
            width={177}
            height={41}
            className="w-[81px] lg:w-[177px]"
          />
        </a>
        <ul
          className="hidden lg:flex gap-[45px] h-[70px] justify-center items-center rounded-[78px] border-[1px] border-solid border-[#1c1f27] px-[25px]"
          style={{
            fontFamily: '"Roboto",sans-serif',
          }}
        >
          <li
            className={`p-[10px] rounded-[83px] transition-all duration-300 ease-in-out hover:bg-[#1C1F27] hover:text-white ${
              pathname === "/" ? "bg-[#1C1F27] text-white" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`p-[10px] rounded-[83px] transition-all duration-300 ease-in-out hover:bg-[#1C1F27] hover:text-white ${
              pathname === "/about" ? "bg-[#1C1F27] text-white" : ""
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`p-[10px] rounded-[83px] transition-all duration-300 ease-in-out hover:bg-[#1C1F27] hover:text-white ${
              pathname === "/projects" ? "bg-[#1C1F27] text-white" : ""
            }`}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={`p-[10px] rounded-[83px] transition-all duration-300 ease-in-out hover:bg-[#1C1F27] hover:text-white ${
              pathname === "/contact" ? "bg-[#1C1F27] text-white" : ""
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hidden lg:block -mt-[16px]">
          <HomeBtn text={"Contact us"} href={"/contact"} padding={false} />
        </div>
        <div className="lg:hidden">
          <Burger clicked={clicked} setClicked={setClickedHandler} />
        </div>
      </nav>
      {/* mobile menu  */}
      <Menu clicked={clicked} setClicked={setClickedHandler} />
    </>
  );
}
