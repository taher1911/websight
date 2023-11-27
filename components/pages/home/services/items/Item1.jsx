import classes from "./Item.module.scss";
export default function Item1() {
  return (
    <div className={classes.item}>
      <div className={classes.title}>
        <div className={classes.svg}>
          <img
            src="https://res.cloudinary.com/freelancer3223/image/upload/v1701129021/websight/Component_6_hcdx3g.svg"
            alt="svg"
          />
        </div>
        <p>UX/UI Design</p>
      </div>
      <div className={classes.titles}>
        <div className={`${classes.el1}`}>Wireframing and Prototyping</div>
        <div className={classes.el2}>User Research</div>
        <div className={` ${classes.el3}`}>Information Architecture</div>
        <div className={`${classes.el4}`}>Responsive Design</div>
        <div className={`${classes.el5}`}>Visual Design</div>
      </div>
    </div>
  );
}
