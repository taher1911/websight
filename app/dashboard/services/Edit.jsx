import React from "react";
import InputGroup from "./InputGroup";

const EditSerive = ({
  onClose,
  title,
  titleAr,
  titleChange,
  titleArChange,
  value1,
  value2,
  value3,
  value4,
  value5,
  value1ar,
  value2ar,
  value3ar,
  value4ar,
  value5ar,
  value1Change,
  value2Change,
  value3Change,
  value4Change,
  value5Change,
  value1ArChange,
  value2ArChange,
  value3ArChange,
  value4ArChange,
  value5ArChange,
  saveHandler,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)]">
      <div
        className="absolute z-0 top-0 left-0 w-full h-full bg-transparent"
        onClick={onClose}
      ></div>
      <div className="z-10 w-[60vw] h-[70vh] overflow-y-auto p-[2rem] service-container rounded-lg bg-dashBg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="tracking-[2px] font-[600]">Edit Service</h3>
        <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <textarea
              name="title"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2"
              value={title}
              onChange={titleChange}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Translation</label>
            <textarea
              name="title"
              id="title"
              className="bg-transparent border-[1px] border-solid border-secColor p-2 "
              value={titleAr}
              onChange={titleArChange}
              style={{ direction: "rtl" }}
            ></textarea>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
            <p>Descriptions</p>
            <p>Translations</p>
          </div>
          <InputGroup
            value={value1}
            valueAr={value1ar}
            setValue={value1Change}
            setValueAr={value1ArChange}
          />
          <InputGroup
            value={value2}
            valueAr={value2ar}
            setValue={value2Change}
            setValueAr={value2ArChange}
          />
          <InputGroup
            value={value3}
            valueAr={value3ar}
            setValue={value3Change}
            setValueAr={value3ArChange}
          />
          <InputGroup
            value={value4}
            valueAr={value4ar}
            setValue={value4Change}
            setValueAr={value4ArChange}
          />
          {value5 && (
            <InputGroup
              value={value5}
              valueAr={value5ar}
              setValue={value5Change}
              setValueAr={value5ArChange}
            />
          )}
        </div>
        <button
          className="w-full bg-secColor rounded-lg p-3 my-6 hover:opacity-80 tracking-[2px] font-[600] disabled:opacity-70 disabled:cursor-not-allowed"
          title={`please complete all fields and save`}
          onClick={saveHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditSerive;
