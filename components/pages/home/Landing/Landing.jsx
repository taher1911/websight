import HomeBtn from "@/components/homeBtn/HomeBtn";
import classes from "./Style.module.scss";
import MainSVG from "@/components/shared/icons/MainSvg";

export default function Landing({ lang, homeText }) {
  return (
    <section className={`${classes.landing} `}>
      <div className={classes.box1}>
        <div className="lg:hidden">
          <MainSVG />
        </div>
        <h2
          className={`${classes.welcome}`}
          style={{
            direction: lang == "en" ? "ltr" : "rtl",
          }}
        >
          {lang == "en" ? homeText.mainTitle : homeText.mainTitleAr}
        </h2>
        <p className={classes.p}>
          {" "}
          {lang == "en" ? homeText.mainDescription : homeText.mainDescriptionAr}
        </p>
        <div className="lg:w-full lg:flex justify-end items-end">
          <HomeBtn
            text={lang == "en" ? "Dive in" : "اكتشف اكثر"}
            href="/"
            padding={true}
          />
        </div>
      </div>
      <div className={classes.box2}>
        <div className={classes.gif}></div>
        <div className="flex justify-between items-center w-[47.5%] lg:w-[100%]">
          <div className="hidden lg:flex md:w-1/2  justify-center">
            <MainSVG />
          </div>
          <div className={classes.text}>
            <span>
              {" "}
              {lang == "en" ? homeText.mainTitle1 : homeText.mainTitle1Ar}
            </span>
            <span>
              {" "}
              {lang == "en" ? homeText.mainTitle2 : homeText.mainTitle2Ar}
            </span>
            <span>
              {" "}
              {lang == "en" ? homeText.mainTitle3 : homeText.mainTitle3Ar}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
