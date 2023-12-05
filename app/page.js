"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Landing from "@/components/pages/home/Landing/Landing";
import About from "@/components/pages/home/about/About";
import Projects from "@/components/pages/home/projects/Projects";
import Services from "@/components/pages/home/services/Services";

import Loading from "@/components/shared/loading/Loading";
import { Fragment } from "react";

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

//fetching services
const getPartners = async () => {
  try {
    const res = await fetch(`/api/partner`);
    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading services: ", error);
  }
};

//fetching services
const getServices = async () => {
  try {
    const res = await fetch(`/api/services`);
    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading services: ", error);
  }
};

//fetching projects
const getProjects = async () => {
  try {
    const res = await fetch(`/api/project`);
    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading projects: ", error);
  }
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const [loading, setLoaing] = useState(true);
  const [homeText, setHomeText] = useState(null);
  const [partners, setPartners] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);

  //fetch Partners
  const GetData = async () => {
    const { partners } = await getPartners();
    setPartners(partners);
    const { services } = await getServices();
    setServicesData(services);

    const { projects } = await getProjects();
    setProjectsData(projects);

    const { texts } = await fetchHomeText();
    setHomeText(texts[0]);
    // return messages;
  };

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    if (
      partners != null &&
      servicesData != null &&
      projectsData != null &&
      homeText != null
    ) {
      setLoaing(false);
    }
  }, [partners, servicesData, projectsData, homeText]);

  useEffect(() => {
    const language = localStorage?.getItem("WebsightLanguage");
    if (language == null || language == "en" || language == undefined) {
      setLang("en");
    } else {
      setLang("ar");
    }
  }, [lang]);

  return (
    <Fragment>
      <main className="relative">
        {loading ? (
          <Loading />
        ) : (
          <div className="mx-[30px] md:w-[90%] md:max-w-[1250px] md:mx-auto">
            <Landing lang={lang} homeText={homeText} />
            <About partners={partners} lang={lang} homeText={homeText} />
            <Services
              link={true}
              data={servicesData}
              lang={lang}
              homeText={homeText}
            />
            <Projects
              projectsData={projectsData}
              lang={lang}
              homeText={homeText}
            />
          </div>
        )}
      </main>
    </Fragment>
  );
}
