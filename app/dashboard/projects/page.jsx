"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Add from "./Add";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import DeleteComponent from "../DeleteComponent";

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

//fetch projects
const fetchProjects = async () => {
  try {
    const res = await fetch(`/api/project`, {
      // cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading projects: ", error);
  }
};

//add new category
const addProject = async ({ name, link, category, date, cover, images }) => {
  try {
    const res = await fetch("/api/project", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, link, category, date, cover, images }),
    });
    if (!res.ok) {
      throw new Error("Failed to add project");
    }
    return res.json();
  } catch (error) {
    console.log("Error adding project: ", error);
  }
};

//update category
const updateProject = async ({
  id,
  name,
  link,
  category,
  date,
  cover,
  images,
}) => {
  try {
    const res = await fetch("/api/project", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _id: id,
        name,
        link,
        category,
        date,
        cover,
        images,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to update project");
    }
    return res.json();
  } catch (error) {
    console.log("Error updating project: ", error);
  }
};

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [add, setAdd] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [categoriesData, setCategoriesData] = useState([]);
  const [dates, setDates] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [cover, setCover] = useState("");
  const [projectImages, setProjectImages] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [id, setId] = useState("");

  //fetch categories
  const GetCategories = async () => {
    const { categories } = await fetchCategories();
    const { projects } = await fetchProjects();

    setCategoriesData(categories);
    setCategory(categories[0].title);
    if (projects) {
      setData(projects);
      setLoading(false);
    }

    // return messages;
  };
  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 5;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    setDate(String(max));
    return years;
  }

  useEffect(() => {
    GetCategories();

    //get last 5 years dates
    const dates = generateArrayOfYears();
    setDates(dates);
  }, []);

  //upload image from project cover
  const handleCoverChange = (e) => {
    if (e.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setCover(reader.result);
      };
      reader.onerror = (error) => {
        console.log("error : ", error);
      };
    } else {
      setCover("");
    }
  };

  const uploadImage = async (f) => {
    var reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = () => {
      setProjectImages((prev) => [...prev, reader.result]);
    };
    reader.onerror = (error) => {
      console.log("error : ", error);
    };
  };
  //upload images
  const handleImagesChange = async (e) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files);
      selectedImages.map((file) => {
        uploadImage(file);
      });
    }
  };

  const deleteImageFromImagesHandler = (img) => {
    const newImages = projectImages.filter((el) => el != img);
    setProjectImages(newImages);
  };

  //save new project
  const saveHandler = async (pData) => {
    setUploading(true);
    if (isUpdate) {
      const { updated } = await updateProject({ id, ...pData });
      const newData = data.map((el) =>
        el._id == id
          ? {
              ...el,
              title: pData.name,
              tags: [pData.category],
              date: pData.date,
              link: pData.link,
              cover: pData.cover,
              images: pData.images,
            }
          : el
      );
      setData(newData);
    } else {
      const { project } = await addProject({ ...pData });
      const newData = [...data, project];
      setData(newData);
    }
    setUploading(false);
    setAdd(false);
    setIsUpdate(false);
    setId("");
    setName("");
    setLink("");
    setCover("");
    setDate(String(new Date().getFullYear()));
    setCategory(categoriesData[0].title);
    setProjectImages([]);
  };

  //update project handler
  const updateHandler = (el) => {
    setId(el._id);
    setName(el.title);
    setLink(el.link);
    setCategory(el.tags[0]);
    setDate(el.date);
    setCover(el.cover);
    setProjectImages(el.images);
    setIsUpdate(true);
    setAdd(true);
  };
  //delete project handler
  const deleteHandler = async (id) => {
    const confirmed = confirm("Are you sure you want to Delete this project?");
    if (confirmed) {
      try {
        setDeleting(true);
        const res = await fetch("http://localhost:3000/api/project", {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (res.ok) {
          const newData = data.filter((el) => el._id !== id);
          setData(newData);
        }
        setDeleting(false);
      } catch (error) {
        console.log("Error deleting the project: ", error);
      }
    }
  };

  return (
    <>
      {deleting && <DeleteComponent />}

      <div
        className={`bg-bgSoft rounded-lg p-[30px] mt-8 text-gray-300 trcking-[2px] `}
      >
        <button
          className="items-end px-[30px] tracking-[2px] py-[14px] rounded-lg bg-secColor transition-all duration-300 hover:opacity-80"
          onClick={() => {
            setAdd(true);
            setId("");
            setName("");
            setLink("");
            setCover("");
            setDate(String(new Date().getFullYear()));
            setCategory(categoriesData[0].title);
            setProjectImages([]);
          }}
        >
          Add New Project
        </button>

        <div className="my-4">
          {loading ? (
            <p className="text-center tracking-[2px] my-6">Loading...</p>
          ) : (
            <div>
              {data.length <= 0 ? (
                <p className="tracking-[2px] text-center">No projects yet.</p>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  {data.map((el) => (
                    <div
                      key={el._id}
                      className="bg-dashBg rounded-lg p-4 py-6 flex flex-col gap-2 tracking-[2px]"
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
                      <a
                        href={el.link}
                        target="_blank"
                        className="text-[1.3vw] capitalize font-[600]"
                      >
                        {el.title}
                      </a>
                      <p className="text-[.8vw] text-[#999]">
                        Category: {el.tags[0]}
                      </p>
                      <p className="text-[.8vw] text-[#999]">Date: {el.date}</p>

                      <span className="text-[.8vw] text-[#999]">
                        Cover and Images:
                      </span>

                      <div>
                        <Swiper
                          spaceBetween={50}
                          slidesPerView={1}
                          modules={[Navigation]}
                          autoplay={true}
                          navigation={{
                            nextEl: ".next3",
                            prevEl: ".prev3",
                          }}
                          loop={true}
                        >
                          <SwiperSlide>
                            <div className="w-full max-w-[100%]">
                              <Image
                                src={el.cover}
                                alt="cover"
                                width={200}
                                height={200}
                                className="w-auto max-w-[80%] mx-auto"
                              />
                            </div>
                          </SwiperSlide>
                          {el.images.map((p, i) => (
                            <SwiperSlide key={i} className="h-[100%] m-auto">
                              <div className="w-full max-w-[100%] ">
                                {/* <ImageComponent src={p} className="w-full" /> */}
                                <Image
                                  src={p}
                                  alt="project-image"
                                  className="w-auto max-w-[100%] mx-auto"
                                  width={200}
                                  height={200}
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                          <div className="flex justify-center items-end w-full gap-4 my-4 mt-8">
                            <span className="hover:scale-110 transition-all duration-300 prev3 cursor-pointer">
                              {" "}
                              <img
                                src="https://res.cloudinary.com/freelancer3223/image/upload/v1701715745/websight/Group_57_ra6lew.svg"
                                alt="left"
                              />
                            </span>

                            <span className="hover:scale-110 transition-all duration-300 next3 cursor-pointer">
                              <img
                                src="https://res.cloudinary.com/freelancer3223/image/upload/v1701715743/websight/arrow_daa1cp.svg"
                                alt="right"
                              />
                            </span>
                          </div>
                        </Swiper>
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
              setAdd(false);
            }
          }}
          uploading={uploading}
          handleCoverChange={handleCoverChange}
          categoriesData={categoriesData}
          dates={dates}
          name={name}
          setName={(e) => setName(e.target.value)}
          link={link}
          setLink={(e) => setLink(e.target.value)}
          category={category}
          setCategory={(e) => setCategory(e.target.value)}
          date={date}
          setDate={(e) => setDate(e.target.value)}
          cover={cover}
          projectImages={projectImages}
          setProjectImages={handleImagesChange}
          deleteImageFromImagesHandler={deleteImageFromImagesHandler}
          saveHandler={saveHandler}
        />
      )}
    </>
  );
};

export default Projects;
