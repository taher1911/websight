import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-dashBg">
      <form
        action=""
        className=" bg-bgSoft p-[50px] rounded-[10px] w-[450px] h-[450px] flex flex-col justify-center gap-[30px]"
      >
        <h1 className="tracking-[2px] text-center text-[#ddd] font-[600] text-[1.3em]">
          Login
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="p-[15px] border-[2px] border-solid border-secColor rounded-[5px] bg-dashBg text-textSoft tracking-[2px]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-[15px] border-[2px] border-solid border-secColor rounded-[5px] bg-dashBg text-textSoft tracking-[2px]"
        />
        <button className="bg-secColor text-textSoft font-[600] tracking-[2px] p-[15px] capitalize rounded-[5px] hover:opacity-80 tansitions-all duration-300 ease-in-out">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
