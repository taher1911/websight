"use client";
import React, { useState } from "react";
import Image from "next/image";

import { MdDelete } from "react-icons/md";

const Add = ({
  onClose,
  name,
  setName,
  link,
  setLink,
  category,
  setCategory,
  date,
  setDate,
  dates,
  uploading,
  handleCoverChange,
  cover,
  projectImages,
  setProjectImages,
  deleteImageFromImagesHandler,
  categoriesData,
  saveHandler,
}) => {
  const [step, setStep] = useState(1);
  const [project, setPorject] = useState("");
  const nexthandler = () => {
    let currentData = {};
    if (!name.length <= 0 && !link.length <= 0 && step == 1) {
      currentData = { name, link, category, date };
      setStep(2);
    }
    if (!cover.length <= 0 && step == 2) {
      currentData = { name, link, category, date, cover };
      setStep(3);
    }
    if (!projectImages.length <= 0 && step == 3) {
      currentData = {
        name,
        link,
        category,
        date,
        cover,
        images: projectImages,
      };
      setStep(4);
      setPorject(currentData);
    }
  };

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)] tracking-[2px]">
      <div
        className="fixed z-0 top-0 left-0 w-full h-full bg-transparent"
        onClick={onClose}
      >
        {" "}
      </div>
      <div className="z-10 w-[65vw] h-[80vh] overflow-y-auto p-[2rem] service-container rounded-lg bg-dashBg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col">
        <h3
          className="tracking-[2px] font-[600] mb-8 text-[1.1vw] "
          id="add-project-popup"
        >
          Add Project
        </h3>
        <div className="flex flex-col justify-between gap-6 h-full">
          {step == 1 && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[.9vw]">
                  Project Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={setName}
                  className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[.9vw]">
                  Project Link
                </label>
                <input
                  type="text"
                  value={link}
                  onChange={setLink}
                  className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-[.9vw]">
                  Project Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
                  value={category}
                  onChange={setCategory}
                >
                  {categoriesData.map((el) => (
                    <option
                      value={el.title}
                      key={el._id}
                      className="text-black tracking-[2px] h-[10px]"
                    >
                      {el.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-[.9vw]">
                  Date
                </label>
                <select
                  name="category"
                  id="category"
                  className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
                  value={date}
                  onChange={setDate}
                >
                  {dates.map((el, i) => (
                    <option
                      value={el}
                      key={el}
                      className="text-black tracking-[2px] h-[10px]"
                    >
                      {el}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {step == 2 && (
            <div className="text-[.8vw] tracking-[2px] text-[#999] grid grid-cols-2 max-h-[80%] overflow-auto">
              <div>
                <label htmlFor="coverImage">project cover (image)</label>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  className="w-full p-4 border-[1px] border-secColor border-solid mt-2 mb-2"
                  onChange={handleCoverChange}
                />
              </div>

              <div className=" ">
                {cover == "" || cover == null ? (
                  ""
                ) : (
                  <Image
                    src={cover}
                    alt="project-cover"
                    width={200}
                    height={200}
                    className="w-auto max-w-[22vw] mx-auto"
                  />
                )}
              </div>
            </div>
          )}
          {step == 3 && (
            <div className="text-[.8vw] tracking-[2px] text-[#999] grid grid-cols-1 gap-4 max-h-[80%] overflow-auto ">
              <div>
                <label htmlFor="coverImage">project images</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  name="image"
                  id="image"
                  className="w-full p-4 border-[1px] border-secColor border-solid mt-2 mb-2"
                  onChange={setProjectImages}
                />
              </div>

              <div>
                {projectImages?.length <= 0 ? (
                  ""
                ) : (
                  <div className="grid grid-cols-3 gap-4">
                    {projectImages?.map((img, i) => (
                      <div key={i}>
                        <div className="flex gap-2 mb-2">
                          <span>{i + 1}</span>
                          <button
                            onClick={() => deleteImageFromImagesHandler(img)}
                            className="text-xl"
                          >
                            <MdDelete />
                          </button>
                        </div>

                        <Image
                          src={img}
                          alt="project-cover"
                          width={150}
                          height={150}
                          className="w-auto max-w-[18vw] "
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {step == 4 && (
            <div className="flex justify-center items-center">
              <button
                className="py-4 px-8 rounded-lg bg-green-500 tracking-[2px] text-[1vw] hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed"
                onClick={() => saveHandler(project)}
                disabled={uploading}
              >
                {uploading ? "Creating the project..." : "Add The Project"}
              </button>
            </div>
          )}

          <div className="flex justify-between font-[600] ">
            {step !== 1 && !uploading && (
              <button
                className="py-3 px-5 rounded-lg bg-secColor tracking-[2px] text-[.8vw] hover:opacity-80"
                onClick={() => setStep(step - 1)}
              >
                Previous
              </button>
            )}

            {step != 4 && (
              <button
                className="py-3 px-5 rounded-lg bg-secColor tracking-[2px] text-[.8vw]  hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed"
                title={`Next Step`}
                onClick={nexthandler}
                disabled={
                  ((name.length <= 0 || link.length <= 0) && step == 1) ||
                  ((cover == "" || cover == null) && step == 2) ||
                  (projectImages.length <= 0 && step == 3)
                }
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
