import Mobile from "./Mobile";
import ServicesPc from "./Pc";

export default function Services({ link, data, lang, homeText }) {
  return (
    <section>
      <div className="">
        <Mobile link={link} data={data} lang={lang} homeText={homeText} />

        <ServicesPc data={data} lang={lang} homeText={homeText} />
      </div>
    </section>
  );
}
