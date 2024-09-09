import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    
    <div
     id='projects'
     className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
        </h1>
        {/* First row of cards */}
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 '>
           <ProjectCard
           src="/Brandspark.jpg"
           title="AI Powered Brandspark"
           description="Lorem Ipsum has been the industry's 
           standard dummy text ever since the 1500s, when an 
           unknown printer took a galley of type and scrambled it to "
           />

           <ProjectCard
           src="/Portfolio.png"
           title="Modern Next.js portfolio"
           description="Lorem Ipsum has been the industry's 
           standard dummy text ever since the 1500s, when an 
           unknown printer took a galley of type and scrambled it to "
           />

           <ProjectCard
           src="/Pos.png"
           title="POS Inventary System"
           description="Lorem Ipsum has been the industry's 
           standard dummy text ever since the 1500s, when an 
           unknown printer took a galley of type and scrambled it to "
           />
        </div>

        {/* Second row of cards */}
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10'>
           <ProjectCard
           src="/Edusiy1.png"
           title="Edusiy College Web "
           description="Lorem Ipsum has been the industry's 
           standard dummy text ever since the 1500s, when an 
           unknown printer took a galley of type and scrambled it to "
           />

           <ProjectCard
           src="/Commerce.png"
           title="Stylify Shopping E-commerce"
           description="Lorem Ipsum has been the industry's 
           standard dummy text ever since the 1500s, when an 
           unknown printer took a galley of type and scrambled it to "
           />

           <ProjectCard
           src="/Prochat.png"
           title="Pro-Chat Real Chat App"
           description="Lorem Ipsum has been the industry's 
           standard dummy text ever since the 1500s, when an 
           unknown printer took a galley of type and scrambled it to "
           />
        </div>
    </div>
  )
}

export default Projects
