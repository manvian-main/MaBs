import { Menus } from "./utils";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import Mabs from "../../assets/Logo/MABS.png";
import Manvian from '../../assets/Logo/ManvianLogo.png'
import { Link } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";

export default function Custom_Navbar() {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  return (
    <header className="fixed top-0 left-0 w-full h-20 lg:h-25 text-[15px]  bg-black text-white z-50 shadow ">
      <nav className="px-4 flex items-center justify-between w-full max-w-7xl  mx-auto h-full ">
        <div className="flex items-center gap-x-3 ml-5 lg:pl-0">
          <Link to="/">
            <img src={Mabs} alt="Mabs Logo" className="h-10 cursor-pointer" />
          </Link>
        </div>

        <ul className="gap-x-4 hidden lg:flex items-center">
          {Menus.map((menu, idx) => (
            <DesktopMenu
              menu={menu}
              key={menu.name}
              isOpen={openMenuIndex === idx}
              onOpen={() => setOpenMenuIndex(idx)}
              onClose={() => setOpenMenuIndex(null)}
            />
          ))}
        </ul>

        {/* Right section */}
        <div className="mb-4">
          <img
            className="h-10 hidden lg:block "
            src={Manvian}
            alt="Manvian"
          />
          <div className="lg:hidden mr-2 ml-10 mt-5">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
}
