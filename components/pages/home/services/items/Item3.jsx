import StarSVG from "@/components/shared/icons/Star";
import classes from "./Item3.module.scss";
export default function Item3({ data, lang, homeText }) {
  return (
    <div className={classes.item}>
      <div
        className={classes.title}
        style={{
          flexDirection: lang == "en" ? "row" : "row-reverse",
        }}
      >
        <div className={classes.svg}>
          <StarSVG />
        </div>
        <p
          className="w-[170px]"
          style={{
            textAlign: lang == "en" ? "left" : "right",
            width: lang == "en" ? "170px" : "auto",
          }}
        >
          {lang == "en" ? data?.title : data.title_ar}
        </p>
      </div>
      <div className={classes.titles}>
        <div className={`${classes.el1}`}>
          {" "}
          {lang == "en" ? data?.services[0].name : data?.services[0].name_ar}
        </div>
        <div className={classes.el2}>
          {" "}
          {lang == "en" ? data?.services[1].name : data?.services[1].name_ar}
        </div>
        <div className={` ${classes.el3}`}>
          {" "}
          {lang == "en" ? data?.services[2].name : data?.services[2].name_ar}
        </div>
        <div className={`${classes.el4}`}>
          {" "}
          {lang == "en" ? data?.services[3].name : data?.services[3].name_ar}
        </div>
      </div>
    </div>
  );
}
