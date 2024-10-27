import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <section id='projects' className=' p-8'>
         <h2 className=' text-3xl my-10 text-center lg:text-8xl'>My Work</h2>
         <div className=' columns-1 gap-4 md:columns-2 lg:columns-3' >
                {PROJECTS.map((project)=>{
                   return (
                   <a href={project.link} key={project.id} target='_blank' rel='noopener noreferrer' className=' block'>
                      <div className=' relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg'>
                           <img src={project.imgSrc} alt={project.title} className=' object-cover h-auto w-full '/>
                           <div className=' absolute bottom-0 left-0 right-0 m-8 p-8 text-white backdrop-blur-md'>
                                 <h3 className=' text-3xl'>{project.title}</h3>
                                 <p className=' max-w-xs  text-lg'>{project.description}</p>
                           </div>
                      </div>
                   </a>
                )
                })}
         </div>
    </section>
  )
}

export default Projects