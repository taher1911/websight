import HomeBtn from "@/components/homeBtn/HomeBtn";
import classes from "./Style.module.scss";
import MainSVG from "@/components/shared/icons/MainSvg";

export default function Landing() {
  return (
    <section className={classes.landing}>
      <div className={classes.box1}>
        <div className="lg:hidden">
          <MainSVG />
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
