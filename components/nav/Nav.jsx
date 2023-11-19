import Burger from "./ui/mobile-menu/Burger";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center my-[33px] mx-[30px]">
      <a href="/">
        <img src="./logo.png" alt="logo" className="w-[81px]" />
      </a>
      <div>
        <Burger />
      </div>
    </nav>
  );
}
