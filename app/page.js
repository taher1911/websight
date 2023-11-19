import Landing from "@/components/pages/home/Landing/Landing";
import About from "@/components/pages/home/about/About";
import Projects from "@/components/pages/home/projects/Projects";
import Services from "@/components/pages/home/services/Services";
export default function Home() {
  return (
    <main className="">
      <Landing />
      <About />
      <Services />
      <Projects />
    </main>
  );
}
