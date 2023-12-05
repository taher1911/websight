"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

import Editor from "./Ckeditor";

const Compose = () => {
  const [sendTo, setSendTo] = useState("");
  const [title, setTitle] = useState("");
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  //fetch email from query param
  const searchParams = useSearchParams();
  const email = searchParams.get("to");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    if (email) {
      setSendTo(email);
    }
  }, []);

  const sendHandler = async () => {
    if (sendTo.length > 0) {
      const res = await fetch("http://localhost:3000/api/sendEmail", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email: sendTo, title, content: data }),
      });
      if (res.ok) {
        console.log("email send successfully");
      } else {
        console.log("sending email faild");
      }
    }
    // console.log(sendTo);
    // console.log(title);
    // console.log(data);
  };

  return (
    <div
      className={`bg-bgSoft rounded-lg p-[30px] mt-8 text-gray-300 trcking-[2px] py-[3rem] flex flex-col gap-6`}
    >
      <div className={`flex items-center justify-between gap-2`}>
        <label htmlFor="email" className="w-[10%] tracking-[2px]">
          To
        </label>
        <input
          type="text"
          value={sendTo}
          onChange={(e) => {
            setSendTo(e.target.value);
          }}
          className={`w-[90%] ml-2 bg-dashBg p-[10px] text-white text-[1vw] rounded-lg outline-none border-[1px] border-solid border-secColor tracking-[2px]`}
        />
      </div>
      <div className={`flex items-center justify-between gap-2`}>
        <label htmlFor="email" className="w-[10%] tracking-[2px]">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className={`w-[90%] ml-2 bg-dashBg p-[10px] text-white text-[1vw] rounded-lg outline-none border-[1px] border-solid border-secColor tracking-[2px]`}
        />
      </div>
      <div>
        <Editor
          name="description"
          onChange={(data) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        />
      </div>

      <div>
        <button
          className={`py-[12px] tracking-[2px] font-[600] bg-secColor transition-all duration-300 hover:opacity-80 rounded-lg w-full`}
          onClick={sendHandler}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Compose;
