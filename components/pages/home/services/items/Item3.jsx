import classes from "./Item3.module.scss";
export default function Item3() {
  return (
    <div className={classes.item}>
      <div className={classes.title}>
        <div className={classes.svg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <path
              d="M18.5 1C18.5 1 23.5 5.02946 23.5 10C23.5 14.9706 18.5 19 18.5 19C18.5 19 13.5 14.9706 13.5 10C13.5 5.02945 18.5 1 18.5 1Z"
              fill="#1C1F27"
            />
            <path
              d="M36.5 19C36.5 19 32.4705 24 27.5 24C22.5294 24 18.5 19 18.5 19C18.5 19 22.5294 14 27.5 14C32.4706 14 36.5 19 36.5 19Z"
              fill="#1C1F27"
            />
            <path
              d="M18.5 19C18.5 19 23.5 23.0295 23.5 28C23.5 32.9706 18.5 37 18.5 37C18.5 37 13.5 32.9706 13.5 28C13.5 23.0294 18.5 19 18.5 19Z"
              fill="#1C1F27"
            />
            <path
              d="M18.5 19C18.5 19 14.4705 24 9.49998 24C4.52941 24 0.5 19 0.5 19C0.5 19 4.52943 14 9.49999 14C14.4706 14 18.5 19 18.5 19Z"
              fill="#1C1F27"
            />
          </svg>
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
