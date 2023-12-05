import React from "react";

const Add = ({
  onClose,
  uploading,
  title,
  title_ar,
  description,
  description_ar,
  setTitle,
  setTitleAr,
  setDescription,
  setDescriptionAr,
  saveHandler,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)] tracking-[2px]">
      <div
        className="fixed z-0 top-0 left-0 w-full h-full bg-transparent"
        onClick={onClose}
      >
        {" "}
      </div>
      <div className="z-10 w-[50vw] h-[60vh] overflow-y-auto p-[2rem] service-container rounded-lg bg-dashBg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col ">
        <h3 className="tracking-[2px] font-[600] mb-6 text-xl">Add Category</h3>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <textarea
              name="title"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px]"
              value={title}
              onChange={setTitle}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Translation</label>
            <textarea
              name="title"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 h-[50px] "
              value={title_ar}
              onChange={setTitleAr}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
            <p>Description</p>
            <p>Translation</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
            <textarea
              name="title"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 min-h-[100px]"
              value={description}
              onChange={setDescription}
            ></textarea>
            <textarea
              name="title"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 "
              value={description_ar}
              onChange={setDescriptionAr}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <button
          className="w-full bg-secColor rounded-lg p-3 my-6 hover:opacity-80 tracking-[2px] font-[600] disabled:opacity-70 disabled:cursor-not-allowed mt-10"
          title={`${
            !title || !title_ar || !description || !description_ar
              ? "Please complete all fields."
              : "Save"
          }`}
          onClick={saveHandler}
          disabled={
            uploading || !title || !title_ar || !description || !description_ar
          }
        >
          {uploading ? "Uploading..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default Add;
