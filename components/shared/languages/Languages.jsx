"use client";
import { useState } from "react";

import classes from "./Style.module.scss";
import { useEffect } from "react";
export default function Languages() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const language = localStorage?.getItem("WebsightLanguage");
    if (language == null || language == "en" || language == undefined) {
      setLang("en");
    } else {
      setLang("ar");
    }
  }, [lang]);

  const languageHandler = (lan) => {
    localStorage.setItem("WebsightLanguage", lan);
    setLang(lan);
    window.location.reload();
  };
  return (
    <div className={classes.lang}>
      <button
        className={`${lang == "en" ? "text-white" : `${classes.gray}`}`}
        onClick={() => {
          languageHandler("en");
        }}
      >
        Eng
      </button>
      <button
        className={`${lang == "ar" ? "text-white" : `${classes.gray}`}`}
        onClick={() => {
          languageHandler("ar");
        }}
      >
        AR
      </button>
    </div>
  );
}
