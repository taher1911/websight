import classes from "./About.module.scss";
import Achievements from "@/components/shared/achievements/Achievements";
export default function About() {
  const images = [
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003990/websight/w1_ohqqjj.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003988/websight/w2_ormpqc.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003988/websight/w3_k7c3ha.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003989/websight/w4_yrnx2u.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003988/websight/w5_lufcbh.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003989/websight/w6_it3e60.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003990/websight/w7_brd3ik.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003990/websight/w8_whziew.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003994/websight/w9_qauzl2.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003995/websight/w10_n6qffr.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003995/websight/w11_ro26au.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003996/websight/w12_tmsyne.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701003997/websight/w13_t67r9g.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701004001/websight/w14_lwymsl.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701004002/websight/w15_cnxbfj.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701004002/websight/w16_xmle3g.png",
    "https://res.cloudinary.com/freelancer3223/image/upload/v1701004005/websight/w17_cz5hdq.png",
  ];

  return (
    <section className={classes.about}>
      <div className={classes.working}>
        <div className={classes.text}>
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
          <p>Working on a worldwide level</p>
        </div>
        <div className={classes.images}>
          <div className={classes.container}>
            {images.map((img) => (
              <img src={`${img}`} alt={`brand`} key={img} />
            ))}
          </div>
        </div>
      </div>
      <Achievements linkTXT={"About us"} linkURL={"/about"} />
    </section>
  );
}
