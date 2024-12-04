import React from "react"
import {SiC , SiJavascript  , SiCplusplus , SiMysql, SiPython , SiR , SiTableau , SiTensorflow , SiKeras , SiPytorch , SiPandas , SiPlotly , SiNumpy , SiPowerbi} from "react-icons/si"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Programming Languages',
      technologies: [
        { name: 'C', icon: <SiC className=" text-blue-500"/>},
        { name: 'C++', icon: <SiCplusplus className=" text-blue-500 "/> },
        { name: 'Python', icon: <SiPython  className=" text-blue-500 "/> },
        { name: 'JavaScript', icon: <SiJavascript  className=" text-yellow-500 "/>},
        { name: 'SQL', icon: <SiMysql  className=" text-blue-500"/>},
        { name: 'R', icon: <SiR  className=" text-blue-500 "/>},
      ],
    },
    {
      category: 'AI tools & Libraries',
      technologies: [
        { name: '', icon: <SiTensorflow className="text-orange-500"/> },
        { name: '', icon:  <SiKeras className="text-red-600"/> },
        { name: '', icon:  <SiTableau className="text-blue-400"/> },
        { name: '', icon: <SiPandas className="text-blue-800"/>  },
        { name: '', icon: <SiPytorch className="text-red-600"/>  },
        { name: '', icon: <SiPlotly className="text-white"/>  },
        { name: '', icon: <SiPowerbi className="text-yellow-300"/>  },
        { name: '', icon: <SiNumpy className="text-blue-700"/>  },
      ],
    },
  ]
const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I worked on various AI/ML projects. Check them there.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-12 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-6 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-10">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex flex-col items-center space-x-2">
                                <span className="text-6xl">{tech.icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
