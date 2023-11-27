import classes from "./Footer.module.scss";
import Socials from "../shared/socials/Socials";
import Languages from "../shared/languages/Languages";
import Link from "next/link";
export default function Footer() {
  return (
    <footer
      className={`flex flex-col justify-between items-center my-[33px] mx-[30px] pt-[2rem] ${classes.footer} lg:p-[30px] lg:pr-[4rem] `}
    >
      <div className="flex flex-col justify-between items-center lg:w-full lg:flex-row lg:items-start lg:pt-[2rem]">
        <a href="/">
          <img src="/footerLogo.svg" alt="logo" className="lg:w-[177px]" />
        </a>
        <ul className={classes.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* social links*/}
        <Socials />
      </div>
      <div className={classes.copy}>
        <Languages />
        <p className="text-[12px] font-[300] my-[15px] lg:text-[16px]">
          Websight 2023 © All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
