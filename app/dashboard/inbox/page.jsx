"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import TablePagination from "@mui/material/TablePagination";

//fetching messages
const getMessages = async () => {
  try {
    const res = await fetch(`/api/contact`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch messages");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading messages: ", error);
  }
};
const Inbox = () => {
  const [demoData, setDemoData] = useState([]);
  const [value, setValue] = useState("");
  const [data, setData] = useState(demoData);
  const [loading, setLoading] = useState(true);

  //pagination variables
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  /////

  const filterHandler = (val) => {
    if (val.length > 0) {
      const filterd = demoData.filter((el) =>
        el.email.toLowerCase().includes(val.toLowerCase())
      );
      setData(filterd);
    } else {
      setData(demoData);
    }
  };

  //pageniation calculation
  useEffect(() => {
    const d = demoData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    setData(d);
  }, [page]);

  //fetch messages
  const GetMessages = async () => {
    const { messages } = await getMessages();
    setDemoData(messages);
    setData(messages);
    setLoading(false);
    // return messages;
  };
  useEffect(() => {
    GetMessages();
  }, []);
  //delete message handler
  const deleteHandler = async (id) => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        GetMessages();
      }
    }
  };
  return (
    <div
      className={`bg-bgSoft rounded-lg p-[30px] mt-8 text-gray-300 trcking-[2px]`}
    >
      <div
        className={`mb-8 tracking-[2px] grid grid-cols-2 justify-between items-center gap-6`}
      >
        <div className="flex items-center">
          <label htmlFor="search" className={`text-[1vw]`}>
            Search
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              filterHandler(e.target.value);
            }}
            className={`w-full ml-2 bg-dashBg p-[10px] text-white text-[1vw] rounded-lg outline-none border-[1px] border-solid border-secColor tracking-[2px]`}
          />
        </div>
        <div className="flex justify-end">
          <Link
            href="/dashboard/compose"
            className="items-end px-[30px] py-[14px] rounded-lg bg-secColor transition-all duration-300 hover:opacity-80"
          >
            Compose
          </Link>
        </div>
      </div>
      {demoData.length == 0 ? (
        <p className="text-center tracking-[2px] my-6">
          {loading ? "Loading..." : "No Messages."}
        </p>
      ) : (
        <table className={`w-full `}>
          <thead className={`capitalize text-[1vw] `}>
            <tr className={`flex justify-between tracking-[2px] py-6`}>
              <td className={`w-[15%]`}>name</td>
              <td className={`w-[24%]`}>email</td>
              <td className={`w-[36%]`}>message</td>
              <td className={`w-[20%]`}>date</td>
              <td className={`w-[5%]`}>delete</td>
            </tr>
          </thead>
          <tbody className={`mt-6 leading-[130%]`}>
            {data.map((el, i) => (
              <tr
                className={`flex justify-between py-2 gap-4 tracking-[2px] border-t-[1px] border-solid border-secColor text-[.75vw] transition-all duration-300 ease-in-out hover:bg-dashBg`}
                key={el.email + i}
              >
                <td className={`w-[15%]`}>{el.name}</td>
                <td className={`w-[24%]`}>
                  <Link href={`/dashboard/compose?to=${el.email}`}>
                    {el.email}
                  </Link>
                </td>
                <td className={`w-[36%]`}>{el.message}</td>
                <td className={`w-[20%] `}>
                  {String(el.createdAt).slice(0, 10)}{" "}
                  {String(el.createdAt).slice(11, 19)}
                </td>
                <td className={`w-[5%] text-xl text-red-500 `}>
                  <button
                    onClick={() => deleteHandler(el._id)}
                    className={`cursor-pointer`}
                    title="Delete"
                  >
                    {" "}
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div
        className="flex justify-center mt-6  text-textSoft"
        style={{ color: "#fff !important" }}
      >
        <TablePagination
          component="div"
          className="text-white m-0"
          count={demoData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Inbox;
