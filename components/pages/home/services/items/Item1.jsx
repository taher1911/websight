import classes from "./Item.module.scss";
export default function Item1() {
  return (
    <div className={classes.item}>
      <div className={classes.title}>
        <div className={classes.svg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
          >
            <path
              d="M19.5 0L21.0309 11.3038L26.771 1.44629L23.8596 12.4755L32.935 5.56497L26.0245 14.6404L37.0537 11.729L27.1962 17.4691L38.5 19L27.1962 20.5309L37.0537 26.271L26.0245 23.3596L32.935 32.435L23.8596 25.5245L26.771 36.5537L21.0309 26.6962L19.5 38L17.9691 26.6962L12.229 36.5537L15.1404 25.5245L6.06497 32.435L12.9755 23.3596L1.94629 26.271L11.8038 20.5309L0.5 19L11.8038 17.4691L1.94629 11.729L12.9755 14.6404L6.06497 5.56497L15.1404 12.4755L12.229 1.44629L17.9691 11.3038L19.5 0Z"
              fill="url(#paint0_radial_595_4480)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_595_4480"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(19.5 19) rotate(90) scale(19)"
              >
                <stop stopColor="#B889D8" stopOpacity="0" />
                <stop offset="0.536458" stopColor="#B889D8" />
              </radialGradient>
            </defs>
          </svg>
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
