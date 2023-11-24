import AboutLanding from "@/components/pages/about/landing/Landing";
import Process from "@/components/pages/about/process/Process";
import Services from "@/components/pages/home/services/Services";

export default function About() {
  return (
    <main className="">
      <AboutLanding />
      <Process />
      <div className="mb-[5rem]">
        <Services link={false} />
      </div>
    </main>
  );
}
