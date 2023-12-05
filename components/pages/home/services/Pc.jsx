import MainSVG from "@/components/shared/icons/MainSvg";
import Item1 from "./items/Item1";
import Item2 from "./items/Item2";
import Item3 from "./items/Item3";
import HomeBtn from "@/components/homeBtn/HomeBtn";

export default function ServicesPc({ data, lang, homeText }) {
  return (
    <section className="hidden lg:grid grid-cols-4 gap-6 items-center ">
      <div className="flex flex-col items-start">
        <MainSVG />
        <p className="text-[30px] font-[600] leading-[130%] my-4">
          {lang == "en" ? homeText.serviceTitle : homeText.serviceTitleAr}
        </p>
        <p
          className="text-[18px]"
          style={{
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          {lang == "en"
            ? homeText.serviceDescription
            : homeText.serviceDescriptionAr}
        </p>
        <HomeBtn
          text={lang == "en" ? "Book consultation" : "احجز استشارة"}
          href={"/"}
          padding={false}
        />
      </div>
      <Item1 data={data[0]} lang={lang} />
      <Item2 data={data[1]} lang={lang} />
      <Item3 data={data[2]} lang={lang} />
    </section>
  );
}
