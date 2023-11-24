import classes from "./Services.module.scss";

import Mobile from "./Mobile";
export default function Services({ link }) {
  return (
    <section className={classes.services}>
      <div className="">
        <Mobile link={link} />
      </div>
    </section>
  );
}
