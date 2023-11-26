import HomeBtn from "@/components/homeBtn/HomeBtn";
import Languages from "@/components/shared/languages/Languages";
import Socials from "@/components/shared/socials/Socials";
import Link from "next/link";

export default function Menu({ clicked, setClicked }) {
  return (
    <div
      className={`fixed bottom-[0vh]  w-[100vw] h-[100vh] z-10 transition-all duration-300 ease-in-out flex flex-col justify-center ${
        clicked ? "left-0" : "left-[-100%]"
      } `}
      style={{ background: "rgba(255, 255, 255, 0.64)" }}
    >
      <div
        className="fixed w-[100%] h-[100%] z-[-1] bg-transparent "
        onClick={setClicked}
      ></div>

      <div
        className="w-[272px] h-[600px] max-h-[85vh] bg-[#B889D8] px-[30px] py-[42px] rounded-tr-[30px] rounded-br-[30px] flex flex-col justify-between"
        style={{
          borderTop: "1px solid #1C1F27",
          borderRight: "1px solid #1C1F27",
          borderBottom: "1px solid #1C1F27",
          boxShadow: "2px 2px 0px 0px #1C1F27",
        }}
      >
        <div className="flex flex-col items-center">
          <span className="scale-[.75] -mt-[1rem]">
            <HomeBtn text="Contact us" href="/contact" padding={false} />
          </span>

          <ul
            className="flex flex-col items-center mt-[27px] text-[18px]"
            style={{
              fontFamily: '"Roboto",sans-serif',
            }}
          >
            <li className="p-[10px]" onClick={setClicked}>
              <Link href="/">Home</Link>
            </li>
            <li className="p-[10px]" onClick={setClicked}>
              <Link href="/about">About</Link>
            </li>
            <li className="p-[10px]" onClick={setClicked}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className="p-[10px]" onClick={setClicked}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <Socials />
          <Languages />
        </div>
      </div>
    </div>
  );
}
