import classes from "./Styles.module.scss";
export default function StarSVG() {
  return (
    <div className={classes.starSvg}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="37"
        viewBox="0 0 36 37"
        fill="none"
      >
        <path
          d="M18 1C18 1 23 5.02946 23 10C23 14.9706 18 19 18 19C18 19 13 14.9706 13 10C13 5.02945 18 1 18 1Z"
          fill="#1C1F27"
          className={classes.path1}
        />
        <path
          d="M36 19C36 19 31.9705 24 27 24C22.0294 24 18 19 18 19C18 19 22.0294 14 27 14C31.9706 14 36 19 36 19Z"
          fill="#1C1F27"
          className={classes.path2}
        />
        <path
          d="M18 19C18 19 23 23.0295 23 28C23 32.9706 18 37 18 37C18 37 13 32.9706 13 28C13 23.0294 18 19 18 19Z"
          fill="#1C1F27"
          className={classes.path3}
        />
        <path
          d="M18 19C18 19 13.9705 24 8.99998 24C4.02941 24 -2.18558e-07 19 -2.18558e-07 19C-2.18558e-07 19 4.02943 14 8.99999 14C13.9706 14 18 19 18 19Z"
          fill="#1C1F27"
          className={classes.path4}
        />
      </svg>
    </div>
  );
}
