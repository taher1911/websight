import HomeBtn from "@/components/homeBtn/HomeBtn";
import classes from "./Style.module.scss";
import MainSVG from "@/components/shared/icons/MainSvg";

export default function Landing() {
  return (
    <section className={classes.landing}>
      <div className={classes.box1}>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45 "
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
          </svg>
        </div>
        <h2 className={classes["welcome"]}>
          Welcome to Websight - Where Imagination Meets Innovation
        </h2>
        <p className={classes.p}>Where creativity knows no bounds</p>
        <div className="lg:w-full lg:flex justify-end items-end">
          <HomeBtn text="Dive in" href="/" padding={true} />
        </div>
      </div>
      <div className={classes.box2}>
        <div className={classes.gif}></div>
        <div className="flex justify-between items-center w-[47.5%] lg:w-[100%]">
          <div className="hidden lg:flex md:w-1/2  justify-center">
            <MainSVG />
          </div>
          <div className={classes.text}>
            <span>Code.</span>
            <span>Design.</span>
            <span>Deploy.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
