import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex font-sans justify-between items-center h-24 mx-auto px-4 bg-eerie-black text-white">
      <h1 className="w-full text-3xl font-bold text-picton-blue">Ayege.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-picton-blue duration-200 ">About</li>
        <li className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-yellow-green duration-200 ">Skills</li>
        <li className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-amber duration-200">Projects</li>
        <li className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-vermillion duration-200">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose color='yellow-green' size={20} /> : <AiOutlineMenu color='yellow-green' size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-yellow-green bg-eerie-black z-50 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-picton-blue m-4">Ayege.</h1>
        <li className="p-4 border-b border-yellow-green hover:bg-picton-blue">About</li>
        <li className="p-4 border-b border-yellow-green hover:bg-yellow-green">Skills</li>
        <li className="p-4 border-b border-yellow-green hover:bg-amber">Projects</li>
        <li className="p-4 border-b border-yellow-green hover:bg-vermillion">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
