"use client";
import { useEffect, useState } from "react";

import ProjectsComp from "@/components/pages/projects/Projects";
import Loading from "@/components/shared/loading/Loading";

//fetching projects
const getProjects = async () => {
  try {
    const res = await fetch(`https://websight.vercel.app/api/project`);
    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading projects: ", error);
  }
};
//fetch categories
const fetchCategories = async () => {
  try {
    const res = await fetch(`https://websight.vercel.app/api/category`, {
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

export default function Projects() {
  const [loading, setLoaing] = useState(true);
  const [categoriesData, setCategories] = useState(null);
  const [projectsData, setProjectsData] = useState(null);

  //fetch Partners
  const GetData = async () => {
    const { categories } = await fetchCategories();
    setCategories(categories);
    const { projects } = await getProjects();
    setProjectsData(projects);

    // return messages;
  };

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    if (projectsData != null) {
      setLoaing(false);
    }
  }, [projectsData]);

  return (
    <main className="relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-[30px] md:w-[90%] md:max-w-[1250px] md:mx-auto">
          <ProjectsComp data={projectsData} categories={categoriesData} />
        </div>
      )}
    </main>
  );
}
