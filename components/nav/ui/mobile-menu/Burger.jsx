export default function Burger({ clicked, setClicked }) {
  return (
    <div
      className="flex flex-col justify-evenly items-end w-[32] h-[24px] cursor-pointer z-20"
      onClick={setClicked}
    >
      <span
        className={`w-[32px] h-[4px] rounded bg-[#1C1F27] transition-all duration-300 ease-in-out ${
          clicked && "-rotate-[45deg] translate-y-1"
        } `}
      ></span>
      <span
        className={`h-[4px]  rounded bg-[#1C1F27] transition-all duration-300 ease-in-out ${
          clicked && "rotate-[45deg] -translate-y-1"
        } `}
        style={{
          width: clicked ? "32px" : "16px",
        }}
      ></span>
      <span></span>
    </div>
  );
}
