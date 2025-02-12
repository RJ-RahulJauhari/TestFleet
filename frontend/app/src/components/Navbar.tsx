import { useState } from "react";
import { NavLink } from "react-router";
import { NAVBAR_LINKS } from "../constants/NavbarConstants";
// import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center h-[72px] px-6 shadow-md bg-white dark:bg-gray-800">
      <div className="w-1/2 flex flex-row items-center gap-2">
        {/* <span><img className="h-[50px] w-[50px]" src="../../public/TestFleet.svg"></img></span> */}
        <h1 className="font-pacifico font-bold hoverable_text text-xl title w-full">Test Fleet</h1>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {NAVBAR_LINKS.map((tab, index) => (
          <NavLink
            key={index}
            to={tab.link}
            className="hover:scale-110 transition font-semibold text-gray-800 dark:text-white"
          >
            {tab.title}
          </NavLink>
        ))}
        {/* <ModeToggle /> */}
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 w-40 flex flex-col gap-4 md:hidden z-50">
          {NAVBAR_LINKS.map((tab, index) => (
            <NavLink
              key={index}
              to={tab.link}
              className="font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              {tab.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;