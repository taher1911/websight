import React from "react";

const InputGroup = ({ value, setValue, valueAr, setValueAr }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 tracking-[2px]">
      <div className="flex flex-col gap-2">
        <textarea
          name="title"
          id="title"
          className="bg-transparent border-[1px] border-solid border-secColor p-2"
          value={value}
          onChange={setValue}
        ></textarea>
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          name="title"
          id="title"
          className="bg-transparent border-[1px] border-solid border-secColor p-2 "
          value={valueAr}
          onChange={setValueAr}
          style={{ direction: "rtl" }}
        ></textarea>
      </div>
    </div>
  );
};

export default InputGroup;
