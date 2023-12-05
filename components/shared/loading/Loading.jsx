import React, { useState } from "react";

const Loading = () => {
  const [num, setNum] = useState(0);
  const data = ["Design.", "Deploy.", "Code. "];
  const intervel = setInterval(() => {
    if (num == 2) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
    return clearInterval(intervel);
  }, 250);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-white flex justify-center items-center text-[36px] font-[600]">
      {data[num]}
    </div>
  );
};

export default Loading;
