import {
  LocationSvg,
  MeetingSvg,
  MessageSvg,
  MobileSvg,
} from "@/components/shared/icons/ContactCardsIcons";

const data = [
  {
    id: 1,
    href: "mailto:info@trywebsight.com",
    title: "Email Us",
    link: "info@trywebsight.com",
    img: MessageSvg,
  },
  {
    id: 2,
    href: "tel:+96541004908",
    title: "Call Us",
    link: "+965 4100 4908",
    img: MobileSvg,
  },
  {
    id: 3,
    href: "/contact?meeting=true",
    title: "Meeting",
    link: "Scheduling meeting",
    img: MeetingSvg,
  },
  {
    id: 4,
    href: "https://www.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9+Websight+%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D9%88%D8%A8%D8%B1%D9%85%D8%AC%D8%A9+%D9%85%D9%88%D8%A7%D9%82%D8%B9+%D8%A7%D9%84%D9%88%D9%8A%D8%A8,+%D9%85%D9%83%D8%AA%D8%A8+7,+%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1,+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2+%D8%A7%D9%84%D8%B5%D9%82%D8%B1,+%D8%A7%D9%84%D8%B7%D8%A7%D8%A8%D9%82+%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A,+Kuwait&ftid=0x4d12f9d93d7e3851:0xc6f6398f8b1cfaad&hl=en-US&gl=us&entry=gps&lucs=47067413&g_ep=CAISBjYuNjQuMxgAIKzfASoINDcwNjc0MTNCAklR&g_st=ic",
    title: "Our Location",
    span: "Burj Altujjar",
    link: "Google Maps direction",
    img: LocationSvg,
  },
];

import classes from "./Style.module.scss";
export default function ContactCards() {
  return (
    <div className={`${classes.contact_cards}`}>
      {data.map((el, i) => (
        <a key={`${el.url}${i}`} href={el.href} className={`${classes.card}`}>
          <span className={`${classes.svg}`}>{el.img}</span>
          <span className={`${classes.text}`}>
            <h3>{el.title}</h3>
            {el.span && <span className="block">{el.span}</span>}
            <span className={classes.link}>{el.link}</span>
          </span>
        </a>
      ))}

      {/* <a href="tel:+96541004908" className={`${classes.card}`}>
        <p className={`${classes.svg}`}>{MobileSvg}</p>
        <p className={`${classes.text}`}>
          <h3>Call Us</h3>
          <a href="tel:+96541004908">+965 4100 4908</a>
        </p>
      </a>

      <a href="#" className={`${classes.card}`}>
        <p className={`${classes.svg}`}>{MeetingSvg}</p>
        <p className={`${classes.text}`}>
          <h3>Meeting</h3>
          <p>Scheduling meeting</p>
        </p>
      </a>

      <a
        href="https://www.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9+Websight+%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D9%88%D8%A8%D8%B1%D9%85%D8%AC%D8%A9+%D9%85%D9%88%D8%A7%D9%82%D8%B9+%D8%A7%D9%84%D9%88%D9%8A%D8%A8,+%D9%85%D9%83%D8%AA%D8%A8+7,+%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1,+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2+%D8%A7%D9%84%D8%B5%D9%82%D8%B1,+%D8%A7%D9%84%D8%B7%D8%A7%D8%A8%D9%82+%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A,+Kuwait&ftid=0x4d12f9d93d7e3851:0xc6f6398f8b1cfaad&hl=en-US&gl=us&entry=gps&lucs=47067413&g_ep=CAISBjYuNjQuMxgAIKzfASoINDcwNjc0MTNCAklR&g_st=ic"
        target="_blank"
        className={`${classes.card}`}
      >
        <p className={`${classes.svg}`}>{LocationSvg}</p>
        <p className={`${classes.text}`}>
          <h3>Our Location</h3>
          <span className="block">Burj Altujjar</span>
          <a
            href="https://www.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9+Websight+%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D9%88%D8%A8%D8%B1%D9%85%D8%AC%D8%A9+%D9%85%D9%88%D8%A7%D9%82%D8%B9+%D8%A7%D9%84%D9%88%D9%8A%D8%A8,+%D9%85%D9%83%D8%AA%D8%A8+7,+%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1,+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2+%D8%A7%D9%84%D8%B5%D9%82%D8%B1,+%D8%A7%D9%84%D8%B7%D8%A7%D8%A8%D9%82+%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A,+Kuwait&ftid=0x4d12f9d93d7e3851:0xc6f6398f8b1cfaad&hl=en-US&gl=us&entry=gps&lucs=47067413&g_ep=CAISBjYuNjQuMxgAIKzfASoINDcwNjc0MTNCAklR&g_st=ic"
            target="_blank"
            className={classes.splink}
          >
            Google Maps direction
          </a>
        </p>
      </a> */}
    </div>
  );
}
