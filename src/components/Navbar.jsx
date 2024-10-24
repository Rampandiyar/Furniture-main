import Fin from "../assets/FIN.png";
import User from "../assets/User.png";
import Basket from "../assets/Basket.png";
import xm from "../assets/xm.svg";
import ham from "../assets/ham.svg";
import { useState } from "react";

export default function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Services", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="bg-my-green">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* Logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={Fin} alt="fin" className="h-7" />
          <span className="text-white"></span>
        </div>
        
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-8 top-6 cursor-pointer w-7 h-7"
        >
          <img src={open ? xm : ham} alt="" />
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:flex-row lg:flex lg:flex-row md:items-center md:pb-0 absolute flex flex-col bg-my-green pb-4 items-center md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "-top-[490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 lg:flex md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-white hover:underline hover:text-yellow-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex h-7 justify-center pl-7">
            <img src={User} alt="user" className="h-7 w-7 mx-2" />
            <img src={Basket} alt="basket" className="h-7 w-7 mx-2" />
          </div>
        </ul>
      </div>
    </div>
  );
}
