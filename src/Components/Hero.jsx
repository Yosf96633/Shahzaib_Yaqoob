import React from "react";
import champ from "../assets/champ.jpg";
import fakeCV from "../assets/fakeCV.pdf"
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiLeetcode , SiKaggle , SiX } from "react-icons/si";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "AI/ML Engeenier",
              3000,
              "Freelancer",
              3000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Shahzaib Yaqoob</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            A recent graduate in Computer
            Science with a passion for Artificial Intelligence (AI) and Data
            Science. Throughout my academic journey, I’ve honed my skills in
            programming, machine learning, and data analysis, combining
            theoretical knowledge with practical project experience.{" "}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
  }}
  href={fakeCV} // Path to your PDF
  download="MyCV.pdf" // Optional: Specify the download file name
  className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                   border-purple-400 rounded-xl"
>
  Download CV
</motion.a>

          </motion.div>
        </motion.div>

        <motion.img
          src={champ}
          className="w-[300px] md:w-[450px] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex max-md:flex-col space-y-6 text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6 mt-6">My Tech Stack</p>
        <div className="flex space-x-10 flex-row text-4xl md:text-6xl text-purple-400 z-20">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/mshahzaib4/mshahzaib4"
          >
            <AiOutlineGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/shahzaibyaqoob/"
          >
            <AiOutlineLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://leetcode.com/u/1eEnVBxODH/"
          >
            <SiLeetcode />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.kaggle.com/shahzaibmalik44"
          >
            <SiKaggle />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
          >
            <SiX className=""/>
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
