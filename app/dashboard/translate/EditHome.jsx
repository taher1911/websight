import React from "react";
import { useState } from "react";

const EditHome = ({
  onClose,
  homeText,
  changeHandler,
  saveHandler,
  saving,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)]">
      <div
        className="absolute z-0 top-0 left-0 w-full h-full bg-transparent"
        onClick={onClose}
      ></div>
      <div className="z-10 w-[60vw] h-[70vh] overflow-y-auto p-[2rem] service-container rounded-lg bg-dashBg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-[1.2vw] tracking-[2px] font-[600]">Home Text.</h3>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-[.9vw]">
              Title
            </label>
            <textarea
              name="mainTitle"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.mainTitle}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-[.9vw]">
              Translation
            </label>
            <textarea
              name="mainTitleAr"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.mainTitleAr}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <textarea
              name="mainDescription"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.mainDescription}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="mainDescriptionAr"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.mainDescriptionAr}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <textarea
              name="mainTitle1"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.mainTitle1}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="mainTitle1Ar"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.mainTitle1Ar}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <textarea
              name="mainTitle2"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.mainTitle2}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="mainTitle2Ar"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.mainTitle2Ar}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <textarea
              name="mainTitle3"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.mainTitle3}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="mainTitle3Ar"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.mainTitle3Ar}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <textarea
              name="brandTitle"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.brandTitle}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="brandTitleAr"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.brandTitleAr}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <textarea
              name="achievementTitle"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.achievementTitle}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="achievementTitleAr"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.achievementTitleAr}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <textarea
              name="serviceTitle"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.serviceTitle}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="serviceTitleAr"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.serviceTitleAr}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <textarea
              name="serviceDescription"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.serviceDescription}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="serviceDescriptionAr"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.serviceDescriptionAr}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <textarea
              name="projectsTitle"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={homeText.projectsTitle}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="projectsTitleAr"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={homeText.projectsTitleAr}
              onChange={changeHandler}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <button
          className="w-full bg-secColor rounded-lg p-3 my-6 hover:opacity-80 tracking-[2px] font-[600] disabled:opacity-70 disabled:cursor-not-allowed"
          title={`please complete all fields and save`}
          onClick={saveHandler}
          disabled={saving}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditHome;
