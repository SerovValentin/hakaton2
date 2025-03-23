import { Link } from "react-router";
import { useState } from "react";
import { Button } from "../../button/button";
import {
  AiOutlineMenuUnfold,
  AiOutlineHome,
  AiOutlineTeam,
} from "react-icons/ai";
export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex items-center">
      <Button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mr-4 bg-transparent border-none cursor-pointer focus:outline-none"
        label={<AiOutlineMenuUnfold />}
      />
      <ul
        className={`flex flex-row space-x-4 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <li className="flex items-center">
          <Link to="/" className="flex items-center space-x-1">
            <AiOutlineHome />
            <span>Главная</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="/favorite" className="flex items-center space-x-1">
            <AiOutlineTeam />
            <span>Избранное</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
