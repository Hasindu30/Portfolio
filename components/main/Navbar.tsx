import React from 'react'
import Image from "next/image"
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/NavLogo.png'
            alt='logo'
            width={60}
            height={60}
            className='cursor-pointer hover:animate-slowspin'
          />
          <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
            Hasindu
          </span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center w-full h-auto justify-between border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 '>
            <a href="#about-me" className='cursor-pointer'>About me</a>
            <a href="#skills" className='cursor-pointer'>Skills</a>
            <a href="#projects" className='cursor-pointer'>Projects</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex flex-row items-center my-[15px] cursor-pointer space-x-5'>
          <a href="https://github.com/Hasindu30" target="_blank" rel="noopener noreferrer">
            <RxGithubLogo className='text-gray-300 hover:text-white' size={24} />
          </a>
          <a href="https://linkedin.com/in/hasindu-chandeepa-918a50299/" target="_blank" rel="noopener noreferrer">
            <RxLinkedinLogo className='text-gray-300 hover:text-white' size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
