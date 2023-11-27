import MainSVG from "@/components/shared/icons/MainSvg";
import Item1 from "./items/Item1";
import Item2 from "./items/Item2";
import Item3 from "./items/Item3";
import HomeBtn from "@/components/homeBtn/HomeBtn";

export default function ServicesPc() {
  return (
    <secion className="hidden lg:grid grid-cols-4 gap-6 items-center ">
      <div className="flex flex-col items-start">
        <MainSVG />
        <p className="text-[30px] font-[600] leading-[130%] my-4">
          Our services
        </p>
        <p
          className="text-[18px]"
          style={{
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Get started with a Free Consultation
        </p>
        <HomeBtn text={"Book consultation"} href={"/"} padding={false} />
      </div>
      <Item1 />
      <Item2 />
      <Item3 />
    </secion>
  );
}
