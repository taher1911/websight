import classes from "./Item2.module.scss";
export default function Item2() {
  return (
    <div className={classes.item}>
      <div className={classes.title}>
        <div className={classes.svg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path d="M18 18L20 36H16L18 18Z" fill="#1C1F27" />
            <path
              d="M18.1422 18.1422L32.2844 29.4559L29.4559 32.2843L18.1422 18.1422Z"
              fill="#1C1F27"
            />
            <path d="M18 18L-1.74846e-07 20L0 16L18 18Z" fill="#1C1F27" />
            <path
              d="M18.1422 18.1422L6.82853 32.2844L4.00011 29.4559L18.1422 18.1422Z"
              fill="#1C1F27"
            />
            <path d="M18 18L20 0H16L18 18Z" fill="#1C1F27" />
            <path
              d="M18.1422 18.1422L6.82853 4.00005L4.00011 6.82847L18.1422 18.1422Z"
              fill="#1C1F27"
            />
            <path d="M18 18L36 20L36 16L18 18Z" fill="#1C1F27" />
            <path
              d="M18.1422 18.1422L32.2844 6.82853L29.4559 4.00011L18.1422 18.1422Z"
              fill="#1C1F27"
            />
          </svg>
        </div>
        <p className="w-[170px]">Web Development</p>
      </div>
      <div className={classes.titles}>
        <div className={`${classes.el1}`}>Front-End Development</div>
        <div className={classes.el2}>Back-End Development</div>
        <div className={` ${classes.el3}`}>Responsive Design</div>
        <div className={`${classes.el4}`}>Content Management System</div>
      </div>
    </div>
  );
}
