"use client";
import React from "react";
import classes from "./sidebar.module.scss";

import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineLayout,
} from "react-icons/ai";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";
import { BsBoundingBox } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "dashboard",
    path: "/dashboard",
    icon: <AiOutlineHome />,
  },
  {
    title: "inbox",
    path: "/dashboard/inbox",
    icon: <AiOutlineMessage />,
  },
  {
    title: "services",
    path: "/dashboard/services",
    icon: <BsBoundingBox />,
  },
  {
    title: "partners",
    path: "/dashboard/partners",
    icon: <FaHandshakeSimple />,
  },
  {
    title: "projects categories",
    path: "/dashboard/projects_categories",
    icon: <AiOutlineLayout />,
  },
  {
    title: "projects",
    path: "/dashboard/projects",
    icon: <AiOutlineLayout />,
  },
  {
    title: "links",
    path: "/dashboard/links",
    icon: <FaTree />,
  },
];
const DashbardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className={`${classes.container}`}>
      <div className="flex justify-center mt-2">
        <Image
          src={
            "https://res.cloudinary.com/freelancer3223/image/upload/v1701202471/websight/WebSight_Logo_copy_1_1_f2lprx.svg"
          }
          alt="websight"
          width={157}
          height={41}
        />
      </div>

      <ul className="mt-10">
        {menuItems.map((el) => (
          <li key={el.title}>
            <Link
              href={el.path}
              className={`p-[20px] flex items-center gap-[10px] tracking-[2px] hover:bg-[#2a374a] transition-all duration-300 ease-in-out capitalize text-[.9vw] my-[5px] rounded-[10px] ${
                el.path === pathname && "bg-[#2a374a]"
              }`}
            >
              <span className="text-xl">{el.icon}</span>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashbardSidebar;
