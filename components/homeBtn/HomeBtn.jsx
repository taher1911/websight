import Image from "next/image";

import classes from "./HomeBtn.module.scss";
const HomeBtn = ({ href, text, padding }) => {
  return (
    <a href={href} className={classes.btn}>
      <span
        className={classes.text}
        style={{
          padding: padding ? "0 45px" : "0 20px",
        }}
      >
        {text}
      </span>
      <span className={classes.arrow}>
        <Image
          src="/Mask group.svg"
          alt="arrow"
          width={33}
          height={23}
          priority
        />
      </span>
      <span className={classes.hidden}>
        <Image
          src="/Mask white.svg"
          alt="arrow"
          width={33}
          height={23}
          priority
        />
      </span>
    </a>
  );
};
export default HomeBtn;
