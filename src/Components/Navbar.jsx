import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {LINKS} from "../constants/index"
import { AnimatePresence , motion } from "framer-motion";
const Navbar = () => {
  const linkVarients = {
    hidden:{
      opacity:0 , y:-50,
    },
    visible:{
      opacity:1 , y:0,
    }
  }
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <nav className="fixed right-0 top-0 z-30 p-4">
      <button className=" rounded-md p-4" onClick={() => setIsOpen(true)}>
        <FaBars className=" size-7" />
      </button>
      <AnimatePresence>
      {isOpen && (
        <motion.div
        variants={{
            hidden:{
                     opacity:0,
                     y:"-100%"
            },
            visible:{
              opacity:1,
              y:0,
              transition:{
                staggerChildren:0.3,
              }
     },
        }}
        initial={"hidden"}
         animate={"visible"}
         exit={"hidden"}
        
         className=" fixed inset-0 z-20 flex flex-col justify-center items-center bg-black text-white">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="self-end rounded-md p-4"
          >
            <FaTimes className=" size-7" />
          </button>
          <ul className="space-y-6 text-3xl">
            {LINKS.map((link) => (
              <motion.li variants={linkVarients}  key={link.id}>
                <a
                  className="text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl"
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
