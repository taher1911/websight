import MainSVG from "@/components/shared/icons/MainSvg";

export default function AboutLanding() {
  return (
    <div className="p-[30px] mt-[9vh] flex flex-col lg:items-end bg-[#E6F3F9] rounded-[30px] border-[1px] border-solid border-[#1C1F27] shadow-[2px_2px_0px_0px_#1C1F27] lg:mt-[10vh]">
      <div className="flex lg:justify-end lg:w-full gap-2  lg:gap-7">
        <div>
          <MainSVG />
        </div>

        <h2 className="text-[5.7vw] font-[600] leading-normal lg:text-[3.9vw] lg:w-[80%]">
          Unlocking <br className="lg:hidden" /> Boundless Digital Solutions for
          Your Business
        </h2>
      </div>
      <p
        className="text-center text-[18px] font-[400] leading-[130%] mt-[15px] lg:text-left lg:w-[70%]"
        style={{ fontFamily: '"Roboto", sans-serif' }}
      >
        We are a Kuwait-based company, but our reach is global. We specialize in
        providing creative business solutions that not only meet but exceed
        expectations. Our seasoned team meticulously analyzes challenges to
        craft innovative strategies for success in today's dynamic market.
      </p>
    </div>
  );
}
