"use client";
import { useState } from "react";
import classes from "./Footer.module.scss";
export default function Footer() {
  const [lang, setLang] = useState("en");
  return (
    <footer
      className={`flex flex-col justify-between items-center my-[33px] mx-[30px] pt-[2rem] ${classes.footer}`}
    >
      <div className="flex flex-col justify-between items-center">
        <a href="/">
          <img src="/footerLogo.svg" alt="logo" />
        </a>
        <ul className={classes.links}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className={classes.social}>
          <p>Our socials</p>
          <ul className="flex justify-center items-center gap-4">
            <li>
              <a
                href="/"
                aria-label="click to vist"
                className="flex justify-center items-center p-[4px] w-[28px] h-[28px] rounded-full bg-black "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M4.06 0H9.94C12.18 0 14 1.82 14 4.06V9.94C14 11.0168 13.5723 12.0495 12.8109 12.8109C12.0495 13.5723 11.0168 14 9.94 14H4.06C1.82 14 0 12.18 0 9.94V4.06C0 2.98322 0.427749 1.95054 1.18915 1.18915C1.95054 0.427749 2.98322 0 4.06 0ZM3.92 1.4C3.25165 1.4 2.61068 1.6655 2.13809 2.13809C1.6655 2.61068 1.4 3.25165 1.4 3.92V10.08C1.4 11.473 2.527 12.6 3.92 12.6H10.08C10.7483 12.6 11.3893 12.3345 11.8619 11.8619C12.3345 11.3893 12.6 10.7483 12.6 10.08V3.92C12.6 2.527 11.473 1.4 10.08 1.4H3.92ZM10.675 2.45C10.9071 2.45 11.1296 2.54219 11.2937 2.70628C11.4578 2.87038 11.55 3.09294 11.55 3.325C11.55 3.55706 11.4578 3.77962 11.2937 3.94372C11.1296 4.10781 10.9071 4.2 10.675 4.2C10.4429 4.2 10.2204 4.10781 10.0563 3.94372C9.89219 3.77962 9.8 3.55706 9.8 3.325C9.8 3.09294 9.89219 2.87038 10.0563 2.70628C10.2204 2.54219 10.4429 2.45 10.675 2.45ZM7 3.5C7.92826 3.5 8.8185 3.86875 9.47487 4.52513C10.1313 5.1815 10.5 6.07174 10.5 7C10.5 7.92826 10.1313 8.8185 9.47487 9.47487C8.8185 10.1313 7.92826 10.5 7 10.5C6.07174 10.5 5.1815 10.1313 4.52513 9.47487C3.86875 8.8185 3.5 7.92826 3.5 7C3.5 6.07174 3.86875 5.1815 4.52513 4.52513C5.1815 3.86875 6.07174 3.5 7 3.5ZM7 4.9C6.44305 4.9 5.9089 5.12125 5.51508 5.51508C5.12125 5.9089 4.9 6.44305 4.9 7C4.9 7.55695 5.12125 8.0911 5.51508 8.48492C5.9089 8.87875 6.44305 9.1 7 9.1C7.55695 9.1 8.0911 8.87875 8.48492 8.48492C8.87875 8.0911 9.1 7.55695 9.1 7C9.1 6.44305 8.87875 5.9089 8.48492 5.51508C8.0911 5.12125 7.55695 4.9 7 4.9Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="click to vist"
                className="flex justify-center items-center p-[4px] w-[28px] h-[28px]  rounded-full bg-black "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M7.14167 5.08125L11.6089 0H10.5502L6.67144 4.41188L3.57333 0H0L4.68491 6.67163L0 12H1.0587L5.15496 7.34091L8.42667 12H12L7.14138 5.08125H7.14167ZM5.69168 6.73031L5.21695 6.066L1.44012 0.779812H3.0662L6.11401 5.046L6.58866 5.71031L10.5507 11.2556H8.92479L5.69168 6.73059V6.73031Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="click to vist"
                className="flex justify-center items-center p-[4px] w-[28px] h-[28px]  rounded-full bg-black "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9.06665 1.88C8.61093 1.35975 8.35979 0.691622 8.35998 0H6.29998V8.26667C6.28409 8.71402 6.09523 9.13775 5.77316 9.44863C5.45109 9.7595 5.02095 9.93327 4.57332 9.93333C3.62665 9.93333 2.83998 9.16 2.83998 8.2C2.83998 7.05333 3.94665 6.19333 5.08665 6.54667V4.44C2.78665 4.13333 0.773315 5.92 0.773315 8.2C0.773315 10.42 2.61332 12 4.56665 12C6.65998 12 8.35998 10.3 8.35998 8.2V4.00667C9.19531 4.60657 10.1982 4.92843 11.2266 4.92667V2.86667C11.2266 2.86667 9.97332 2.92667 9.06665 1.88Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.copy}>
        <div className={classes.lang}>
          <button
            className={`${lang == "en" ? "text-white" : `${classes.gray}`}`}
          >
            Eng
          </button>
          <button
            className={`${lang == "ar" ? "text-white" : `${classes.gray}`}`}
          >
            AR
          </button>
        </div>
        <p className="text-[12px] font-[300] my-[15px]">
          Websight 2023 © All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
