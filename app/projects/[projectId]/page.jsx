"use client";
import { useState, useEffect } from "react";
import ProjectComponent from "@/components/pages/projects/projectId/Project";
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

const demoData = [
  {
    id: 1,
    title: "Cycle",
    tags: ["#UX/UI design"],
    date: "2023",
    url: "http://localhost:3000/projects/1",
    images: [
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002607/websight/Rectangle_18211_8_f2vwao.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002596/websight/Rectangle_18212_3_ubtrim.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002617/websight/Rectangle_18213_3_cyeovj.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002609/websight/Rectangle_18211_9_yilnno.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002617/websight/Rectangle_18214_3_gxbpkn.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002601/websight/Rectangle_18215_3_chodfu.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002629/websight/Frame_122454239_zkqvbg.png",
    ],
  },
  {
    id: 2,
    title: "Chameleon",
    tags: ["#UX/UI design"],
    date: "2023",
    url: "http://localhost:3000/projects/2",
    images: [
      "https://res.cloudinary.com/freelancer3223/image/upload/v1700990811/websight/Rectangle_18211_2_rwr1ac.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1700990898/websight/Rectangle_18212_zrsscd.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1700991317/websight/Rectangle_18213_xmclzp.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1700991358/websight/Rectangle_18211_3_pysq49.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1700991387/websight/Rectangle_18214_sc39hf.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1700991514/websight/Rectangle_18215_h6pdrb.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1700991626/websight/Frame_122454237_gcmdf2.png",
    ],
  },
  {
    id: 3,
    title: "Studio 4T",
    tags: ["#UX/UI design"],
    date: "2023",
    url: "http://localhost:3000/projects/3",
    images: [
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002170/websight/Rectangle_18211_6_piielz.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002168/websight/Rectangle_18212_2_tbdnow.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002178/websight/Rectangle_18213_2_vgrfej.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002176/websight/Rectangle_18211_7_rv77zf.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002128/websight/Rectangle_18214_2_bsvtzt.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002137/websight/Rectangle_18215_2_vvvrlm.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701002130/websight/Frame_122454237_2_xjw4rf.png",
    ],
  },
  {
    id: 4,
    title: "Yogi",
    tags: ["#UX/UI design"],
    date: "2023",
    url: "http://localhost:3000/projects/4",
    images: [
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701001422/websight/Rectangle_18211_4_unyf9p.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701001441/websight/Rectangle_18212_1_ebhlsu.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701001352/websight/Rectangle_18213_1_z28ohw.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701001421/websight/Rectangle_18211_5_qc4xtm.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701001429/websight/Rectangle_18214_1_drl0ai.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701001422/websight/Rectangle_18215_1_lncchf.png",
      "https://res.cloudinary.com/freelancer3223/image/upload/v1701001875/websight/Frame_122454237_1_zm5vkk.png",
    ],
  },
];
const projects = [
  {
    id: 1,
    name: "Cycle",
    label: "#UX/UI design",
    href: "/projects/1",
    img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701114247/websight/Rectangle_45_aflhpz.png",
  },
  {
    id: 2,
    name: "Chameleon",
    label: "#UX/UI design",
    href: "/projects/2",
    img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701114245/websight/Property_1_Default_c01jyx.png",
  },
  {
    id: 3,
    name: "Studio 4T",
    label: "#UX/UI design",
    href: "/projects/3",
    img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701114236/websight/Rectangle_45_1_rg5j4g.png",
  },
  {
    id: 4,
    name: "Yogi",
    label: "#UX/UI design",
    href: "/projects/4",
    img: "https://res.cloudinary.com/freelancer3223/image/upload/v1701114236/websight/Rectangle_45_1_rg5j4g.png",
  },
];
export default function Project({ params, searchParams }) {
  const [loading, setLoaing] = useState(true);
  const [projectsData, setProjectsData] = useState(null);
  const [project, setProject] = useState(null);

  //fetch Partners
  const GetData = async () => {
    const { projects } = await getProjects();
    setProjectsData(projects);

    // return messages;
  };

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    if (projectsData != null) {
      const id = params.projectId;
      const p = projectsData.filter((el) => el._id == id);
      setProject(p);
      setLoaing(false);
    }
  }, [projectsData]);

  useEffect(() => {}, []);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-[30px] md:w-[90%] md:max-w-[1250px] md:mx-auto">
          <ProjectComponent project={project[0]} projects={projectsData} />
        </div>
      )}
    </main>
  );
}
