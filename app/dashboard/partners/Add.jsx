"use client";
import Image from "next/image";
import React from "react";

const Add = ({ onClose, image, handleChange, saveHandler, uploading }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)] tracking-[2px]">
      <div
        className="fixed z-0 top-0 left-0 w-full h-full bg-transparent"
        onClick={onClose}
      ></div>
      <div className="z-10 w-[50vw] h-[60vh] overflow-y-auto p-[2rem] service-container rounded-lg bg-dashBg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-between">
        <div className="flex flex-col justify-between  ">
          <h3 className="tracking-[2px] font-[600] mb-6 text-xl">
            Add Partner
          </h3>
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="font-[600]">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              className="w-full p-4 border-[1px] border-secColor border-solid"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center w-full mt-8">
            {image == "" || image == null ? (
              ""
            ) : (
              <Image
                src={image}
                alt="partner"
                width={200}
                height={200}
                className="w-auto"
              />
            )}
          </div>
        </div>

        <button
          className="w-full bg-secColor rounded-lg p-3 my-6 hover:opacity-80 tracking-[2px] font-[600] disabled:opacity-70 disabled:cursor-not-allowed"
          title={`${
            image == "" || image == null ? "please upload the image." : "Save"
          }`}
          onClick={saveHandler}
          disabled={image == "" || image == null || uploading}
        >
          {uploading ? "Uploading..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default Add;
