import classes from "./Item.module.scss";
export default function Item1({ data, lang }) {
  return (
    <div className={classes.item}>
      <div
        className={classes.title}
        style={{
          flexDirection: lang == "en" ? "row" : "row-reverse",
        }}
      >
        <div className={classes.svg}>
          <img
            src="https://res.cloudinary.com/freelancer3223/image/upload/v1701129021/websight/Component_6_hcdx3g.svg"
            alt="svg"
          />
        </div>
        <p>{lang == "en" ? data?.title : data.title_ar}</p>
      </div>
      <div className={classes.titles}>
        <div className={`${classes.el1}`}>
          {lang == "en" ? data?.services[0].name : data?.services[0].name_ar}
        </div>
        <div className={classes.el2}>
          {lang == "en" ? data?.services[1].name : data?.services[1].name_ar}
        </div>
        <div className={` ${classes.el3}`}>
          {lang == "en" ? data?.services[2].name : data?.services[2].name_ar}
        </div>
        <div className={`${classes.el4}`}>
          {lang == "en" ? data?.services[3].name : data?.services[3].name_ar}
        </div>
        <div className={`${classes.el5}`}>
          {lang == "en" ? data?.services[4].name : data?.services[4].name_ar}
        </div>
      </div>
    </div>
  );
}
