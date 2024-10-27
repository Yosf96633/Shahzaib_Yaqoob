import React from "react";
import { LuImport } from "react-icons/lu";
import img from "../assets/shahziab_yaqoob.jpg"
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-8">
      <h1 className=" mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none ">
        Shahzaib <br />
        Yaqoob
      </h1>
      <div className=" mt-8">
        <a
          href="/benson-Langford.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className=" flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400 space-x-2"
        >
            <span>Download Resume</span>
             <LuImport className=" size-5"/>
        </a>
      </div>
      <div className=" w-full flex justify-center ">
          <motion.img
          initial={{
               scale:1,

          }}
          whileHover={{
                scale:1.05
          }}
          transition={{
            duration:0.75
          }}
           className=" mt-8 h-[30rem] max-sm:h-[23rem] max-sm:w-4/5 rounded-2xl" src={img} alt="Shahzaib Yaqoob" />
         
      </div>
    </div>
  );
};

export default Hero;
