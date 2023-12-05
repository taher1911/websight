"use client";
import React, { useState, useEffect } from "react";
import EditSerive from "./Edit";

//fetching services
const getServices = async () => {
  try {
    const res = await fetch(`/api/services`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading services: ", error);
  }
};
const Services = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});
  //input variables
  const [title, setTitle] = useState("");
  const [titleAr, setTitleAr] = useState("");

  const [value1, setValue1] = useState("");
  const [value1Ar, setValue1Ar] = useState("");

  const [value2, setValue2] = useState("");
  const [value2Ar, setValue2Ar] = useState("");

  const [value3, setValue3] = useState("");
  const [value3Ar, setValue3Ar] = useState("");

  const [value4, setValue4] = useState("");
  const [value4Ar, setValue4Ar] = useState("");

  const [value5, setValue5] = useState("");
  const [value5Ar, setValue5Ar] = useState("");

  const editHandler = (el) => {
    setEdit(true);
    setEditData(el);
    setTitle(el.title);
    setTitleAr(el.title_ar);
    setValue1(el.services[0].name);
    setValue1Ar(el.services[0].name_ar);
    setValue2(el.services[1].name);
    setValue2Ar(el.services[1].name_ar);
    setValue3(el.services[2].name);
    setValue3Ar(el.services[2].name_ar);
    setValue4(el.services[3].name);
    setValue4Ar(el.services[3].name_ar);
    if (el.services.length > 4) {
      setValue5(el.services[4].name);
      setValue5Ar(el.services[4].name_ar);
    }
  };

  //fetch services
  const GetServices = async () => {
    const { services } = await getServices();
    setData(services);
    setLoading(false);
    // return messages;
  };
  useEffect(() => {
    GetServices();
  }, []);

  const saveHandler = async () => {
    const service = {
      ...editData,
      title: title,
      title_ar: titleAr,
      img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701129021/websight/Component_6_hcdx3g.svg",
      services: value5
        ? [
            {
              name: value1,
              name_ar: value1Ar,
            },
            {
              name: value2,
              name_ar: value2Ar,
            },
            {
              name: value3,
              name_ar: value3Ar,
            },
            {
              name: value4,
              name_ar: value4Ar,
            },
            {
              name: value5,
              name_ar: value5Ar,
            },
          ]
        : [
            {
              name: value1,
              name_ar: value1Ar,
            },
            {
              name: value2,
              name_ar: value2Ar,
            },
            {
              name: value3,
              name_ar: value3Ar,
            },
            {
              name: value4,
              name_ar: value4Ar,
            },
          ],
    };

    try {
      const res = await fetch(`/api/services`, {
        method: "PUT",
        cache: "no-store",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(service),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch services");
      }
      GetServices();
      setEdit(false);
      setValue5("");
      setValue5Ar("");
      setEditData({});
      return res.json();
    } catch (error) {
      console.log("Error loading services: ", error);
    }
  };
  return (
    <>
      <div
        className={`bg-bgSoft rounded-lg p-[30px] mt-8 text-gray-300 trcking-[2px] `}
      >
        {loading ? (
          <p className="text-center tracking-[2px] my-6">Loading...</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {data.map((el, i) => (
              <div
                key={i}
                className={`bg-dashBg rounded-lg p-6 tracking-[2px]`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="flex items-center gap-2 font-[600]">
                    <span>
                      <img src={el.img} />
                    </span>
                    {el.title}
                  </h3>
                  <button
                    title="Edit"
                    onClick={() => editHandler(el)}
                    className="capitalize tracking-[2px] bg-secColor rounded-md px-4 py-1"
                  >
                    edit
                  </button>
                </div>

                <ul className="flex flex-col gap-3">
                  {el.services.map((s, i) => (
                    <li key={i}>- {s.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      {edit && (
        <EditSerive
          saveHandler={saveHandler}
          onClose={() => {
            setEdit(false);
            setValue1("");
            setValue1Ar("");
            setValue2("");
            setValue2Ar("");
            setValue3("");
            setValue3Ar("");
            setValue4("");
            setValue4Ar("");
            setValue5("");
            setValue5Ar("");
          }}
          title={title}
          titleChange={(e) => setTitle(e.target.value)}
          titleAr={titleAr}
          titleArChange={(e) => setTitleAr(e.target.value)}
          value1={value1}
          value2={value2}
          value3={value3}
          value4={value4}
          value5={value5}
          value1ar={value1Ar}
          value2ar={value2Ar}
          value3ar={value3Ar}
          value4ar={value4Ar}
          value5ar={value5Ar}
          value1Change={(e) => setValue1(e.target.value)}
          value2Change={(e) => setValue2(e.target.value)}
          value3Change={(e) => setValue3(e.target.value)}
          value4Change={(e) => setValue4(e.target.value)}
          value5Change={(e) => setValue5(e.target.value)}
          value1ArChange={(e) => setValue1Ar(e.target.value)}
          value2ArChange={(e) => setValue2Ar(e.target.value)}
          value3ArChange={(e) => setValue3Ar(e.target.value)}
          value4ArChange={(e) => setValue4Ar(e.target.value)}
          value5ArChange={(e) => setValue5Ar(e.target.value)}
        />
      )}
    </>
  );
};

export default Services;
