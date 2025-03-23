import { NavBar } from "./nav-bar/nav-bar";
import { Breadcrumb } from "./breadcrumb/breadcrumb";

export const Header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-row justify-between fixed top-0 left-0 w-full z-20">
      <NavBar />
      <Breadcrumb />
    </nav>
  );
};
