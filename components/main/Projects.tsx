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
           description="Brandspark is an AI-powered platform for generating unique brand names, logos, and brand promotion tools for businesses effortlessly. "
           />

           <ProjectCard
           src="/Portfolio.png"
           title="Modern Next.js portfolio"
           description="A modern Next.js portfolio highlights a developer's skills and projects, offering fast performance and responsive, dynamic design. "
           />

           <ProjectCard
           src="/Pos.png"
           title="POS Inventary System"
           description="A Java-based POS system for bookshops manages inventory, 
           processes sales, tracks customers, and generates reports for efficient operations.o "
           />
        </div>

        {/* Second row of cards */}
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10'>
           <ProjectCard
           src="/Edusiy1.png"
           title="Edusiy College Web "
           description="Edusiy College's responsive website, built with React, provides seamless navigation, course details, and student resources across devices."
           />

           <ProjectCard
           src="/Commerce.png"
           title="Stylify Shopping E-commerce"
           description="Stylify Shopping is a MERN stack e-commerce platform offering seamless product browsing, secure checkout, and responsive design "
           />

           <ProjectCard
           src="/Prochat.png"
           title="Pro-Chat Real Chat App"
           description="ProChat is a real-time chat app built with React and Firebase, offering instant messaging and user authentication."
           />
        </div>
    </div>
  )
}

export default Projects
