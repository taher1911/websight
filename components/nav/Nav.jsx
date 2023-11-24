"use client";
import { useState } from "react";

import Burger from "./ui/mobile-menu/Burger";
import Menu from "./ui/mobile-menu/Menu";

export default function Nav() {
  const [clicked, setClicked] = useState(false);
  const setClickedHandler = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between items-center my-[33px] mx-[30px]">
        <a href="/">
          <img src="./logo.png" alt="logo" className="w-[81px]" />
        </a>
        <div>
          <Burger clicked={clicked} setClicked={setClickedHandler} />
        </div>
      </nav>
      {/* mobile menu  */}
      <Menu clicked={clicked} setClicked={setClickedHandler} />
    </>
  );
}
