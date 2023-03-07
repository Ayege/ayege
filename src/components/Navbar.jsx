import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex font-sans justify-between items-center h-24 mx-auto px-4 bg-eerie-black text-white">
      <h1 className="w-full text-3xl font-bold text-picton-blue">Ayege.</h1>
      <ul className="hidden md:flex">
        <motion.li
          className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-picton-blue duration-200"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ y: [-100, 0], opacity: 1 }}
          transition={{ ease: "easeIn", duration: "1.5", delay: ".2", velocity:"20"}}
        >
          About
        </motion.li>
        <motion.li
          className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110   hover:bg-yellow-green duration-200 "
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ y: [-100, 0], opacity: 1 }}
          transition={{ ease: "easeIn", duration: "1.5", delay: ".3", velocity:"20" }}
        >
          Skills
        </motion.li>
        <motion.li
          className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-amber duration-200"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ y: [-100, 0], opacity: 1 }}
          transition={{ ease: "easeIn", duration: "1.5", delay: ".4", velocity:"20" }}
        >
          Projects
        </motion.li>
        <motion.li
          className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-vermillion duration-200"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ y: [-100, 0], opacity: 1 }}
          transition={{ ease: "easeIn", duration: "1.5", delay: ".5", velocity:"20" }}
        >
          Contact
        </motion.li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose color="#8BC34A" size={20} />
        ) : (
          <AiOutlineMenu color="#8BC34A" size={20} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-yellow-green bg-eerie-black z-50 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-picton-blue m-4">
          Ayege.
        </h1>
        <li className="p-4 border-b border-yellow-green hover:bg-picton-blue">
          About
        </li>
        <li className="p-4 border-b border-yellow-green hover:bg-yellow-green">
          Skills
        </li>
        <li className="p-4 border-b border-yellow-green hover:bg-amber">
          Projects
        </li>
        <li className="p-4 border-b border-yellow-green hover:bg-vermillion">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
