"use client";
import { useState } from "react";
import Image from "next/image";
import MainSVG from "@/components/shared/icons/MainSvg";
import StarSVG from "@/components/shared/icons/Star";

import classes from "./Style.module.scss";
import BtnClass from "../../homeBtn/HomeBtn.module.scss";

import ContactCards from "./Cards";
export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    //check name is valid
    if (name.length <= 0) {
      setError("please enter your name");
      return;
    }
    //check email is valid
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      setError("please enter a valid email");

      return;
    } else {
      setError("");
      setLoading(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
        setLoading(false);
        if (res.ok) {
          setName("");
          setEmail("");
          setMessage("");
          //popup
        } else {
          throw new Error("Failed to send the Message.");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <section className="my-[3rem] grid grid-cols-1 lg:grid-cols-2 lg:gap-[70px] lg:my-[14vh]">
      <div className="flex flex-col justify-center items-center lg:justify-between lg:items-start ">
        <div className="flex flex-col justify-center items-center lg:w-full lg:justify-start lg:items-start">
          <MainSVG />
          <h2 className="text-[24px] lg:text-[3.8vw] font-[600] w-[232px] text-center leading-7 lg:leading-[120%] mt-3  lg:text-left lg:w-[84%]">
            We are ready to help you
          </h2>
        </div>
        <div className="hidden lg:block">
          <ContactCards />
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        className="p-[30px]  flex flex-col  items-center lg:justify-center gap-[20px] bg-[#E6F3F9] rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] mt-6 mb-10 lg:my-0 lg:gap-[33px] "
      >
        <div className="input-group w-full lg:mt-[10px]">
          <label htmlFor="name" className="flex items-center gap-3">
            <StarSVG />
            <span className="text-[20px] font-[600] leading-[130%] lg:text-[28px]">
              Your name
            </span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-[20px] py-[10px] w-full bg-[#E0C6E4] rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] mt-[15px] outline-none font-[600] lg:h-[73px] lg:text-[20px]"
          />
        </div>
        <div className="input-group w-full">
          <label htmlFor="email" className="flex items-center gap-3">
            <StarSVG />
            <span className="text-[20px] font-[600] leading-[130%]  lg:text-[28px]">
              Your email address
            </span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-[20px] py-[10px] w-full bg-[#E0C6E4] rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] mt-[15px] outline-none font-[600] lg:h-[73px] lg:text-[20px]"
          />
        </div>
        <div className="input-group w-full ">
          <label htmlFor="message" className="flex items-center gap-3">
            <StarSVG />
            <span className="text-[20px] font-[600] leading-[130%]  lg:text-[28px]">
              Tell us about your project
            </span>
          </label>

          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-[20px] py-[10px] w-full bg-[#E0C6E4] rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] mt-[15px] outline-none font-[600] lg:h-[150px] lg:text-[20px]"
          ></textarea>
        </div>

        <div className="w-full flex flex-col items-center lg:items-end lg:-translate-y-4">
          <p className="text-red-400 w-full capitalize text-center font-[600] tracking-[2px]">
            {error}
          </p>
          {loading && (
            <p className="text-green-400 w-full capitalize text-center font-[600] tracking-[2px]">
              Sending...
            </p>
          )}

          <button
            type="submit"
            className={`${BtnClass.btn} w-[202px]`}
            disabled={loading}
          >
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
        </div>
      </form>
      <div className="lg:hidden">
        <ContactCards />
      </div>
    </section>
  );
}
