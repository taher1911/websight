"use client";
import { useEffect, useState } from "react";
import AboutLanding from "@/components/pages/about/landing/Landing";
import Process from "@/components/pages/about/process/Process";
import Services from "@/components/pages/home/services/Services";

import Loading from "@/components/shared/loading/Loading";

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

export default function About() {
  const [lang, setLang] = useState("en");
  const [loading, setLoaing] = useState(true);
  const [homeText, setHomeText] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  //fetch Partners
  const GetData = async () => {
    const { services } = await getServices();
    setServicesData(services);

    const { texts } = await fetchHomeText();
    setHomeText(texts[0]);
  };

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    if ((servicesData != null, homeText != null)) {
      setLoaing(false);
    }
  }, [servicesData, homeText]);

  useEffect(() => {
    const language = localStorage?.getItem("WebsightLanguage");
    if (language == null || language == "en" || language == undefined) {
      setLang("en");
    } else {
      setLang("ar");
    }
  }, [lang]);

  return (
    <main className="relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-[30px] md:w-[90%] md:max-w-[1250px] md:mx-auto">
          <AboutLanding />
          <Process lang={lang} homeText={homeText} />
          <div className="mb-[5rem]">
            <Services
              link={false}
              data={servicesData}
              lang={lang}
              homeText={homeText}
            />
          </div>
        </div>
      )}
    </main>
  );
}
