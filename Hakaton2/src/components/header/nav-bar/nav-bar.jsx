import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "../../button/button";
import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-start">
      <Button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mb-2 bg-transparent border-none cursor-pointer focus:outline-none z-10"
      >
        <MdMenuBook color="white" />
      </Button>
      {isMenuOpen && (
        <ul
          ref={menuRef}
          className="absolute left-0 mt-2 bg-gray-800 text-white p-2 rounded shadow-lg"
        >
          <li className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-1 p-1 hover:bg-gray-700 rounded"
            >
              <AiOutlineHome />
              <span>Главная</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/favorite"
              className="flex items-center space-x-1 p-1 hover:bg-gray-700 rounded"
            >
              <AiOutlineTeam />
              <span>Избранное</span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
