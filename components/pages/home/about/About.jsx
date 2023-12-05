import classes from "./About.module.scss";
import Achievements from "@/components/shared/achievements/Achievements";
export default function About({ partners, lang, homeText }) {
  const element = document.getElementById("slider-images");
  console.log(element?.width);
  return (
    <section className={classes.about}>
      <div className={classes.working}>
        <div
          className={`${classes.text}`}
          style={{
            width: lang == "en" ? "90%" : "100%",
            justifyContent: lang == "en" ? "start" : "end",
            flexDirection: lang == "en" ? "row" : "row-reverse",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            style={{
              marginTop: "4px",
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.75 12L14.75 0H10.75L12.75 12ZM12.75 12L0.75 10V14L12.75 12ZM12.75 12L12.7584 11.9986L19.8254 2.10481L22.6538 4.93323L12.7635 11.9978L24.75 10V14L12.7584 12.0014L12.7543 12.0043L12.7566 12.0011L12.75 12ZM12.75 12L14.75 24H10.75L12.75 12ZM2.7502 4.82843L12.7481 11.998L5.57862 2.00001L2.7502 4.82843ZM5.57856 21.9914L12.7379 12.0036L2.75013 19.163L5.57856 21.9914ZM20.0068 22.0837L12.7577 12.0061L22.8353 19.2553L20.0068 22.0837Z"
              fill="#B889D8"
            />
          </svg>
          <p
            style={{
              direction: lang == "en" ? "ltr" : "rtl",
            }}
          >
            {" "}
            {lang == "en" ? homeText.brandTitle : homeText.brandTitleAr}
          </p>
        </div>
        <div className={classes.images}>
          <div className={classes.container} id="slider-images">
            {partners?.map((img) => (
              <img src={img.image} alt={`brand`} key={img._id} />
            ))}
          </div>
        </div>
      </div>
      <Achievements
        linkTXT={lang == "en" ? "About us" : "المزيد عنا"}
        linkURL={"/about"}
        lang={lang}
        title={homeText.achievementTitle}
        titleAr={homeText.achievementTitleAr}
      />
    </section>
  );
}
