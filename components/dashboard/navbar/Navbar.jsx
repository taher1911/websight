"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { TbExternalLink } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import Link from "next/link";

const DashbardNavbar = () => {
  const [clicked, setClicked] = useState(false);
  const pathname = usePathname();

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  return (
    <div className="flex items-center justify-between p-[20px] rounded-[10px] bg-bgSoft relative">
      <h2 className="capitalize tracking-[2px] font-[600] ">
        {pathname.split("/").pop()}
      </h2>
      <div className="flex items-center gap-6 ">
        <Link
          href={`/`}
          title="View Website"
          className="text-xl transition-all duration-300 ease-in-out hover:opacity-70"
          target="_blank"
        >
          <TbExternalLink />
        </Link>
        <button
          className={`flex justify-center text-xl transition-all duration-300 ease-in-out hover:opacity-70 ${
            clicked && "opacity-70"
          }`}
          onClick={() => setClicked(!clicked)}
        >
          <FiSettings />
          <MdKeyboardArrowDown />
        </button>
      </div>
      {clicked && (
        <div className="absolute w-[230px] top-[5.5rem] right-2 bg-bgSoft rounded-[10px] flex flex-col shadow-[2px_2px_2px_2px_#2a374a]">
          <button
            className={`p-[20px] flex items-center gap-[10px] tracking-[2px] hover:bg-[#2a374a] transition-all duration-300 ease-in-out capitalize text-[.9vw] my-[5px] rounded-[10px]`}
          >
            <span className="text-xl">
              <MdLogout />
            </span>
            Logout
          </button>

          <button onClick={() => setClicked(false)}>
            <Link
              href={"edit_profile"}
              className={`p-[20px] flex items-center gap-[10px] tracking-[2px] hover:bg-[#2a374a] transition-all duration-300 ease-in-out capitalize text-[.9vw] my-[5px] rounded-[10px] `}
            >
              <span className="text-xl">
                <FaUser />
              </span>
              Edit Profile
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default DashbardNavbar;
