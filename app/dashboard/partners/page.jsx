"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Add from "./Add";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

//fetch partners
const fetchPartners = async () => {
  try {
    const res = await fetch(`/api/partner`, {
      // cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch messages");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading messages: ", error);
  }
};

//add new partner
const addPartner = async (d) => {
  try {
    const res = await fetch("/api/partner", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ image: d }),
    });
    if (!res.ok) {
      throw new Error("Failed to add partner");
    }
    return res.json();
  } catch (error) {
    console.log("Error adding partner: ", error);
  }
};

//update partner
const updatePartnerHandler = async (id, image) => {
  try {
    const res = await fetch("/api/partner", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ _id: id, image }),
    });
    if (!res.ok) {
      throw new Error("Failed to update partner");
    }
    return res.json();
  } catch (error) {
    console.log("Error updating partner: ", error);
  }
};

const Partners = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState("");

  //fetch partners
  const GetPartners = async () => {
    const { partners } = await fetchPartners();

    setData(partners);
    setLoading(false);
    // return messages;
  };
  useEffect(() => {
    GetPartners();
  }, []);

  //upload image from device handler
  const handleChange = (e) => {
    if (e.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.onerror = (error) => {
        console.log("error : ", error);
      };
    } else {
      setImage("");
    }
  };

  //save image to the database
  const saveHandler = async () => {
    if (image) {
      setUploading(true);
      if (isUpdate) {
        const { updated } = await updatePartnerHandler(id, image);

        const newData = data.map((el) =>
          el._id == id ? { ...el, image } : el
        );

        setData(newData);
      } else {
        const { partner } = await addPartner(image);
        const newData = [...data, partner];
        setData(newData);
      }

      setUploading(false);
      setImage("");
      setAdd(false);
      setIsUpdate(false);
      setId("");
    }
  };

  const updateHandler = async (el) => {
    setIsUpdate(true);
    setAdd(true);
    setImage(el.image);
    setId(el._id);
  };

  const deleteHandler = async (id) => {
    const confirmed = confirm("Are you sure you want to destroy this partner?");
    if (confirmed) {
      try {
        const res = await fetch("http://localhost:3000/api/partner", {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (res.ok) {
          const newData = data.filter((el) => el._id !== id);
          setData(newData);
        }
      } catch (error) {
        console.log("Error deleting partners: ", error);
      }
    }
  };
  return (
    <>
      <div
        className={`bg-bgSoft rounded-lg p-[30px] mt-8 text-gray-300 trcking-[2px] `}
      >
        <button
          className="items-end px-[30px] tracking-[2px] py-[14px] rounded-lg bg-secColor transition-all duration-300 hover:opacity-80"
          onClick={() => setAdd(true)}
        >
          Add New Partner
        </button>

        <div className="my-4">
          {loading ? (
            <p className="text-center tracking-[2px] my-6">Loading...</p>
          ) : (
            <div>
              {data.length <= 0 ? (
                <p className="tracking-[2px] text-center">No partners yet.</p>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  {data.map((el) => (
                    <div
                      key={el._id}
                      className="bg-secColor rounded-lg p-4 flex flex-col gap-2"
                    >
                      <div className="mb-2 text-xl ">
                        <button
                          title="Edit"
                          className=" rounded-lg bg-bgSoft p-2 px-4"
                          onClick={() => updateHandler(el)}
                        >
                          <FaRegEdit />
                        </button>
                        <button
                          title="Delete"
                          className=" rounded-lg bg-bgSoft p-2 px-4 text-red-500 ml-2"
                          onClick={() => deleteHandler(el._id)}
                        >
                          <MdDelete />
                        </button>
                      </div>
                      <div className="flex justify-center items-center min-h-[150px]">
                        {" "}
                        <Image
                          src={el.image}
                          width={300}
                          height={300}
                          className="w-auto "
                          alt="brand-logo"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {add && (
        <Add
          onClose={() => {
            if (!uploading) {
              setImage("");
              setAdd(false);
            }
          }}
          image={image}
          handleChange={handleChange}
          saveHandler={saveHandler}
          uploading={uploading}
        />
      )}
    </>
  );
};

export default Partners;
