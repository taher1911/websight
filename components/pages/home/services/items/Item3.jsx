import StarSVG from "@/components/shared/icons/Star";
import classes from "./Item3.module.scss";
export default function Item3() {
  return (
    <div className={classes.item}>
      <div className={classes.title}>
        <div className={classes.svg}>
          <StarSVG />
        </div>
        <p className="w-[170px]">Mobile App</p>
      </div>
      <div className={classes.titles}>
        <div className={`${classes.el1}`}>Intuitive User Interface</div>
        <div className={classes.el2}>Platform Compatibility</div>
        <div className={` ${classes.el3}`}>Security and Data Protection</div>
        <div className={`${classes.el4}`}>Offline Functionality</div>
      </div>
    </div>
  );
}
