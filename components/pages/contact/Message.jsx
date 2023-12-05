import HomeBtn from "@/components/homeBtn/HomeBtn";
import Image from "next/image";
import React from "react";

const Message = ({ close }) => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full bg-[#1C1F2791] tracking-[2px] flex justify-center items-center">
      <div className="w-[85%] max-w-[548px] py-[30px] flex flex-col justify-center items-center gap-2 lg:gap-[33px] rounded-[30px] border-[1px] border-solid border-[#1C1F27] bg-[#E6F3F9] shadow-[2px_2px_0px_0px_#1C1F27]">
        <div className="w-full flex flex-col justify-center items-center">
          <div className=" w-full flex justify-end">
            <button onClick={close} className="mr-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <path
                  d="M1 0.5L27.7516 27.2516"
                  stroke="#1C1F27"
                  stroke-linecap="round"
                />
                <path
                  d="M1 27.2518L27.7516 0.500204"
                  stroke="#1C1F27"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <Image src="/check.svg" width={83} height={83} />
        </div>
        <div className="px-[15px] py-[20px] lg:px-0 lg:py-0">
          {" "}
          <h3 className="max-w-[419px] mx-auto text-center text-[24px] lg:text-[36px] font-[600]">
            Thank you for your message!
          </h3>
          <p
            className="max-w-[419px] mx-auto text-center text-[18px] leading-[130%] tracking-normal mt-[12px]"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            We have received your message and will review it promptly. Our team
            will get in touch with you as soon as possible.
          </p>
        </div>
        <div className="mb-[30px]">
          <HomeBtn text="Back to site" padding={false} href={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default Message;
