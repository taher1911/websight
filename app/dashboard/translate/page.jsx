"use client";
import React from "react";
import { useState, useEffect } from "react";
import EditHome from "./EditHome";

const fetchHomeText = async () => {
  try {
    const res = await fetch(`/api/homeText`, {
      // cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch text");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading text: ", error);
  }
};
const fetchAboutText = async () => {
  try {
    const res = await fetch(`/api/aboutText`, {
      // cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch text");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading text: ", error);
  }
};

//add new category
const addHomeText = async (_id, d) => {
  try {
    const res = await fetch("/api/homeText", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _id,
        data: d,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to add text");
    }
    return res.json();
  } catch (error) {
    console.log("Error adding text: ", error);
  }
};

const page = () => {
  //home page variables
  const [homeText, setHomeText] = useState(null);
  const [aboutText, setAboutText] = useState(null);
  const [editHome, setEditHome] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleChangeHomeText = (e) => {
    const { name, value } = e.target;
    setHomeText({ ...homeText, [name]: value });
  };

  //fetch categories
  const GetData = async () => {
    const { texts } = await fetchHomeText();
    setHomeText(texts[0]);
    const { aboutTexts } = await fetchAboutText();
    setAboutText(aboutTexts);
  };

  useEffect(() => {
    GetData();
    setLoading(false);
  }, []);

  const saveHomeHandler = async () => {
    setSaving(true);
    const { msg } = await addHomeText(homeText._id, {
      mainTitle: homeText.mainTitle,
      mainTitleAr: homeText.mainTitleAr,
      mainDescription: homeText.mainDescription,
      mainDescriptionAr: homeText.mainDescriptionAr,
      mainTitle1: homeText.mainTitle1,
      mainTitle1Ar: homeText.mainTitle1Ar,
      mainTitle2: homeText.mainTitle2,
      mainTitle2Ar: homeText.mainTitle2Ar,
      mainTitle3: homeText.mainTitle3,
      mainTitle3Ar: homeText.mainTitle3Ar,
      brandTitle: homeText.brandTitle,
      brandTitleAr: homeText.brandTitleAr,
      achievementTitle: homeText.achievementTitle,
      achievementTitleAr: homeText.achievementTitleAr,
      serviceTitle: homeText.serviceTitle,
      serviceTitleAr: homeText.serviceTitleAr,
      serviceDescription: homeText.serviceDescription,
      serviceDescriptionAr: homeText.serviceDescriptionAr,
      projectsTitle: homeText.projectsTitle,
      projectsTitleAr: homeText.projectsTitleAr,
    });

    setSaving(false);
    setEditHome(false);
  };

  return (
    <>
      {editHome && (
        <EditHome
          onClose={() => {
            setEditHome(false);
          }}
          homeText={homeText}
          changeHandler={handleChangeHomeText}
          saveHandler={saveHomeHandler}
          saving={saving}
        />
      )}
      <div
        className={`bg-bgSoft rounded-lg p-[30px] mt-8 text-gray-300 trcking-[2px] `}
      >
        {loading ? (
          <p className="text-center tracking-[2px] my-6">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {" "}
            <div className="rounded-lg bg-dashBg p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-[1vw] tracking-[2px] font-[600]">Home</h2>
                <button
                  className="bg-secColor px-2 rounded-lg py-1 tracking-[2px] font-[600] text-[.8vw] hover:opacity-80"
                  onClick={() => setEditHome(true)}
                >
                  Edit
                </button>
              </div>
              <ul className="flex flex-col gap-2 my-6 tracking-[2px] text-[.9vw] text-[#999]">
                <li className="border-t-[1px] border-secColor border-solid py-2">
                  <span className="text-[#aaa] font-[600]">Main Title</span>:
                  {homeText?.mainTitle}
                </li>
                <li className="border-t-[1px] border-secColor border-solid py-2">
                  <span className="text-[#aaa] font-[600]">
                    Main description
                  </span>
                  :{homeText?.mainDescription}
                </li>
                <li className="border-t-[1px] border-secColor border-solid py-2">
                  <span className="text-[#aaa] font-[600]">Main Titles</span>:{" "}
                  <p>{homeText?.mainTitle1}</p>
                  <p>{homeText?.mainTitle2}</p>
                  <p>{homeText?.mainTitle3}</p>
                </li>
                <li className="border-t-[1px] border-secColor border-solid py-2">
                  <span className="text-[#aaa] font-[600]">Brands Title</span>:
                  {homeText?.brandTitle}
                </li>
                <li className="border-t-[1px] border-secColor border-solid py-2">
                  <span className="text-[#aaa] font-[600]">
                    Achievement Title
                  </span>
                  :{homeText?.achievementTitle}
                </li>
                <li className="border-t-[1px] border-secColor border-solid py-2">
                  <span className="text-[#aaa] font-[600]">Services Title</span>
                  :{homeText?.serviceTitle}
                </li>
                <li className="border-t-[1px] border-secColor border-solid py-2">
                  <span className="text-[#aaa] font-[600]">
                    Services description
                  </span>
                  : {homeText?.serviceDescription}
                </li>
                <li className="border-t-[1px] border-secColor border-solid py-2">
                  <span className="text-[#aaa] font-[600]">Projects Title</span>
                  :{homeText?.projectsTitle}
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-dashBg p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-[1vw] tracking-[2px] font-[600]">About</h2>
                <button className="bg-secColor px-2 rounded-lg py-1 tracking-[2px] font-[600] text-[.8vw] hover:opacity-80">
                  Edit
                </button>
              </div>
              <ul className="flex flex-col gap-2 my-6 tracking-[2px] text-[.9vw] text-[#999]">
                <li className="border-t-[1px] border-secColor border-solid py-2"></li>
              </ul>
            </div>
            <div className="rounded-lg bg-dashBg p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-[1vw] tracking-[2px] font-[600]">
                  Projects
                </h2>
                <button className="bg-secColor px-2 rounded-lg py-1 tracking-[2px] font-[600] text-[.8vw] hover:opacity-80">
                  Edit
                </button>
              </div>
              <div></div>
            </div>
            <div className="rounded-lg bg-dashBg p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-[1vw] tracking-[2px] font-[600]">
                  Contact
                </h2>
                <button className="bg-secColor px-2 rounded-lg py-1 tracking-[2px] font-[600] text-[.8vw] hover:opacity-80">
                  Edit
                </button>
              </div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
