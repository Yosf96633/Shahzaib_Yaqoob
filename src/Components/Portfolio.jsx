import React from "react";

import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: `https://repository-images.githubusercontent.com/734807916/b2d4f253-338d-42f4-ba71-0ca0526fd453`,
    title: "Project #1",
    description:
      "The Salary Prediction System is a web application built with Flask, HTML, and CSS, showcasing my expertise in integrating Machine Learning with web technologies. It predicts employee salaries using models like Linear Regression, Lasso, Ridge, Decision Tree, SVR, Random Forest, and Gradient Boosting, with features for data visualization and model training.",
    links: {
      github: "https://github.com/mshahzaib4/Campus-Recruitment-Prediction",
    },
  },
  {
    img: `https://cdn.hashnode.com/res/hashnode/image/upload/v1680616356133/106f86d5-2f7b-406d-89b4-d7b3bf9b0887.png?auto=compress,format&format=webp`,
    title: "Project #2",
    description:
      "The Heart Disease Prediction App showcases my skills in Flask and Machine Learning. Using a Random Forest Classification model, it predicts heart disease likelihood based on user inputs like age, blood pressure, and cholesterol. The app features a responsive interface, interpretable results, and emphasizes practical healthcare applications.",
    links: {
      github: "https://github.com/mshahzaib4/Heart-Disease-Prediction",
    },
  },
  {
    img: `https://learn.microsoft.com/en-us/power-bi/create-reports/media/service-dashboards/power-bi-dashboard2.png`,
    title: "Project #3",
    description: "This Power BI project showcases interactive dashboards and data visualizations designed to provide valuable insights into various business processes. Using real-world datasets, the project demonstrates the power of Power BI in analyzing trends, improving decision-making, and enhancing business performance through visual storytelling and data-driven insights.",
    links: {
      github: "https://github.com/mshahzaib4/Synthetic-Employee-Records/tree/main",
    },
  },
  {
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6z9SE-VDMMygRW9sKmb-FfEuNmiF9LKC5Qg&s`,
    title: "Project #4",
    description: "World Bank Education Dataset project in my portfolio utilizes TeBlue for in-depth analysis of global literacy, education spending, and access. By exploring trends, regional disparities, and the impact of investment, this analysis provides valuable insights for improving education policies and decision-making",
    links: {
      github: "https://github.com/mshahzaib4/World-Bank-Education-Analysis-TeBlue",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">My Projects</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-base">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
