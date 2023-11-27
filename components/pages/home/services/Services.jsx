import Mobile from "./Mobile";
import ServicesPc from "./Pc";
export default function Services({ link }) {
  return (
    <section>
      <div className="">
        <Mobile link={link} />

        <ServicesPc />
      </div>
    </section>
  );
}
