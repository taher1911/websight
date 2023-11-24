"use client";
import { useState } from "react";

import classes from "./Style.module.scss";
export default function Languages() {
  const [lang, setLang] = useState("en");
  return (
    <div className={classes.lang}>
      <button className={`${lang == "en" ? "text-white" : `${classes.gray}`}`}>
        Eng
      </button>
      <button className={`${lang == "ar" ? "text-white" : `${classes.gray}`}`}>
        AR
      </button>
    </div>
  );
}
