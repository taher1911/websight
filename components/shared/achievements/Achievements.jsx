"use client";
import { useState } from "react";

import PlusSVG from "../icons/PlusSvg";
import HomeBtn from "@/components/homeBtn/HomeBtn";
import classes from "./Style.module.scss";
export default function Achievements({ linkTXT, linkURL }) {
  const [active, setActive] = useState(1);
  const interval = setInterval(() => {
    if (active == 3) {
      setActive(1);
    } else {
      setActive(active + 1);
    }
    clearInterval(interval);
  }, 2000);
  return (
    <div className={classes.achievements}>
      <p>Achievements we take pride in</p>
      <div className={classes.cards}>
        <div className={active == 1 ? classes.animate : ""}>
          <span className={classes.head}>
            <span>48</span>
            <PlusSVG />
          </span>
          <p className={classes.title}>Projects</p>
        </div>
        <div className={active == 2 ? classes.animate : ""}>
          <span className={classes.head}>
            <span>48</span>
            <PlusSVG />
          </span>
          <p className={classes.title}>Projects</p>
        </div>
        <div className={active == 3 ? classes.animate : ""}>
          <span className={classes.head}>
            <span>48</span>
            <PlusSVG />
          </span>
          <p className={classes.title}>Projects</p>
        </div>
        {/* <div></div>
      <div></div> */}
      </div>
      <div>
        <HomeBtn text={linkTXT} href={linkURL} padding={false} />
      </div>
    </div>
  );
}
