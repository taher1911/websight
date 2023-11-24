import classes from "./Footer.module.scss";
import Socials from "../shared/socials/Socials";
import Languages from "../shared/languages/Languages";
export default function Footer() {
  return (
    <footer
      className={`flex flex-col justify-between items-center my-[33px] mx-[30px] pt-[2rem] ${classes.footer}`}
    >
      <div className="flex flex-col justify-between items-center">
        <a href="/">
          <img src="/footerLogo.svg" alt="logo" />
        </a>
        <ul className={classes.links}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        {/* social links*/}
        <Socials />
      </div>
      <div className={classes.copy}>
        <Languages />
        <p className="text-[12px] font-[300] my-[15px]">
          Websight 2023 © All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
