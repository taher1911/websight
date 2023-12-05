"use client";
import React, { useState, useEffect } from "react";
import Add from "./Add";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

//fetch categories
const fetchCategories = async () => {
  try {
    const res = await fetch(`/api/category`, {
      // cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading categories: ", error);
  }
};

//add new category
const addCategory = async ({
  title,
  title_ar,
  description,
  description_ar,
}) => {
  try {
    const res = await fetch("/api/category", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, title_ar, description, description_ar }),
    });
    if (!res.ok) {
      throw new Error("Failed to add category");
    }
    return res.json();
  } catch (error) {
    console.log("Error adding category: ", error);
  }
};

//update category
const updateCategory = async ({
  id,
  title,
  title_ar,
  description,
  description_ar,
}) => {
  try {
    const res = await fetch("/api/category", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _id: id,
        title,
        title_ar,
        description,
        description_ar,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to update category");
    }
    return res.json();
  } catch (error) {
    console.log("Error updating category: ", error);
  }
};
const ProjectsCategories = () => {
  const [add, setAdd] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [title_ar, setTitleAr] = useState("");
  const [description, setDescription] = useState("");
  const [description_ar, setDescriptionAr] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState("");

  //fetch categories
  const GetCategories = async () => {
    const { categories } = await fetchCategories();

    setData(categories);
    setLoading(false);
    // return messages;
  };
  useEffect(() => {
    GetCategories();
  }, []);

  const saveHandler = async () => {
    if (title && title_ar && description && description_ar) {
      setUploading(true);
      if (isUpdate) {
        const { updated } = await updateCategory({
          id,
          title,
          title_ar,
          description,
          description_ar,
        });
        const newData = data.map((el) =>
          el._id == id
            ? { ...el, title, title_ar, description, description_ar }
            : el
        );
        setData(newData);
      } else {
        const { category } = await addCategory({
          title,
          title_ar,
          description,
          description_ar,
        });
        const newData = [...data, category];
        setData(newData);
      }

      setUploading(false);
      setAdd(false);
      setIsUpdate(false);
      setTitle("");
      setTitleAr("");
      setDescription("");
      setDescriptionAr("");
      setId("");
    }
  };

  const updateHandler = (el) => {
    setTitle(el.title);
    setTitleAr(el.title_ar);
    setDescription(el.description);
    setDescriptionAr(el.description_ar);
    setId(el._id);
    setIsUpdate(true);
    setAdd(true);
  };
  const deleteHandler = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this category?");
    if (confirmed) {
      try {
        const res = await fetch("http://localhost:3000/api/category", {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (res.ok) {
          const newData = data.filter((el) => el._id !== id);
          setData(newData);
        }
      } catch (error) {
        console.log("Error deleting category: ", error);
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
          onClick={() => {
            setAdd(true);
          }}
        >
          Add New Category
        </button>
        {loading ? (
          <p className="text-center tracking-[2px] my-6">Loading...</p>
        ) : (
          <div>
            {data.length <= 0 ? (
              <p className="tracking-[2px] text-center">No categories yet.</p>
            ) : (
              <div className="grid grid-cols-3 gap-4 mt-6">
                {data.map((el) => (
                  <div
                    key={el._id}
                    className="bg-dashBg rounded-lg p-4 flex flex-col gap-2"
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
                    <div className="flex flex-col min-h-[150px]">
                      <h4 className="font-[600] tracking-[2px] mb-4 text-[.85vw]">
                        {el.title}
                      </h4>
                      <p className="text-[.7vw] text-[#999] tracking-[2px]">
                        {el.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {add && (
        <Add
          onClose={() => {
            if (!uploading) {
              // setImage("");
              setAdd(false);
            }
          }}
          uploading={uploading}
          title={title}
          title_ar={title_ar}
          description={description}
          description_ar={description_ar}
          setTitle={(e) => setTitle(e.target.value)}
          setTitleAr={(e) => setTitleAr(e.target.value)}
          setDescription={(e) => setDescription(e.target.value)}
          setDescriptionAr={(e) => setDescriptionAr(e.target.value)}
          saveHandler={saveHandler}
        />
      )}
    </>
  );
};

export default ProjectsCategories;
