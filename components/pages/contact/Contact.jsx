"use client";
import { useState } from "react";
import Image from "next/image";
import MainSVG from "@/components/shared/icons/MainSvg";
import StarSVG from "@/components/shared/icons/Star";

import classes from "./Style.module.scss";
import BtnClass from "../../homeBtn/HomeBtn.module.scss";
import {
  MessageSvg,
  MobileSvg,
  MeetingSvg,
  LocationSvg,
} from "@/components/shared/icons/ContactCardsIcons";
export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      `your name:${name}, your email:${email}, your message:${message}`
    );
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="my-[3rem] grid grid-cols-1 ">
      <div className="flex flex-col justify-center items-center ">
        <MainSVG />
        <h2 className="text-[24px] font-[600] w-[232px] text-center leading-7 mt-3">
          We are ready to help you
        </h2>
      </div>
      <form
        onSubmit={submitHandler}
        className="p-[30px]  flex flex-col  items-center gap-[20px] bg-[#E6F3F9] rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] mt-6 mb-10"
      >
        <div className="input-group w-full">
          <label htmlFor="name" className="flex items-center gap-3">
            <StarSVG />
            <span className="text-[20px] font-[600] leading-[130%]">
              Your name
            </span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-[20px] py-[10px] w-full bg-[#E0C6E4] rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] mt-[15px] outline-none font-[600]"
          />
        </div>
        <div className="input-group w-full">
          <label htmlFor="email" className="flex items-center gap-3">
            <StarSVG />
            <span className="text-[20px] font-[600] leading-[130%]">
              Your email address
            </span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-[20px] py-[10px] w-full bg-[#E0C6E4] rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] mt-[15px] outline-none font-[600]"
          />
        </div>
        <div className="input-group">
          <label htmlFor="message" className="flex items-center gap-3">
            <StarSVG />
            <span className="text-[20px] font-[600] leading-[130%]">
              Tell us about your project
            </span>
          </label>

          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-[20px] py-[10px] w-full bg-[#E0C6E4] rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] mt-[15px] outline-none font-[600]"
          ></textarea>
        </div>

        <button type="submit" className={`${BtnClass.btn} w-[202px]`}>
          <span
            className={BtnClass.text}
            style={{
              padding: "0 48px",
            }}
          >
            Send
          </span>
          <span className={BtnClass.arrow}>
            <Image
              src="/Mask group.svg"
              alt="arrow"
              width={33}
              height={23}
              priority
            />
          </span>
          <span className={BtnClass.hidden}>
            <Image
              src="/Mask white.svg"
              alt="arrow"
              width={33}
              height={23}
              priority
            />
          </span>
        </button>
      </form>
      <div className={`${classes.contact_cards}`}>
        <div className={`${classes.card}`}>
          <div className={`${classes.svg}`}>{MessageSvg}</div>
          <div className={`${classes.text}`}>
            <h3>Email Us</h3>
            <a href="mailto:info@trywebsight.com">info@trywebsight.com</a>
          </div>
        </div>

        <div className={`${classes.card}`}>
          <div className={`${classes.svg}`}>{MobileSvg}</div>
          <div className={`${classes.text}`}>
            <h3>Call Us</h3>
            <a href="tel:+96541004908">+965 4100 4908</a>
          </div>
        </div>

        <div className={`${classes.card}`}>
          <div className={`${classes.svg}`}>{MeetingSvg}</div>
          <div className={`${classes.text}`}>
            <h3>Meeting</h3>
            <p>Scheduling meeting</p>
          </div>
        </div>

        <div className={`${classes.card}`}>
          <div className={`${classes.svg}`}>{LocationSvg}</div>
          <div className={`${classes.text}`}>
            <h3>Our Location</h3>
            <span className="block">Burj Altujjar</span>
            <a
              href="https://www.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9+Websight+%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D9%88%D8%A8%D8%B1%D9%85%D8%AC%D8%A9+%D9%85%D9%88%D8%A7%D9%82%D8%B9+%D8%A7%D9%84%D9%88%D9%8A%D8%A8,+%D9%85%D9%83%D8%AA%D8%A8+7,+%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1,+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2+%D8%A7%D9%84%D8%B5%D9%82%D8%B1,+%D8%A7%D9%84%D8%B7%D8%A7%D8%A8%D9%82+%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A,+Kuwait&ftid=0x4d12f9d93d7e3851:0xc6f6398f8b1cfaad&hl=en-US&gl=us&entry=gps&lucs=47067413&g_ep=CAISBjYuNjQuMxgAIKzfASoINDcwNjc0MTNCAklR&g_st=ic"
              target="_blank"
              className={classes.splink}
            >
              Google Maps direction
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
