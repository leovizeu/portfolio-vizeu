"use client"

import React from 'react'
import Image from 'next/image'
import Example from './Disclosure'
import CustomButtom from './CustomButtom'

function Projects() {
  const handleScroll = () => {
  }

  return (
    <div id='projects'>
      <h1 className="flex justify-center pl-7 text-white text-xl">
        <div className="flex absolute pr-44 uppercase tracking-wide text-xl text-blue-500 font-semibold">
          2.
        </div>
          My Projects
      </h1>
      
      <div className='flex justify-between'>
        <ul>
          <li>You are the hope!</li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className='flex justify-center mt-16'>
        <div>
        <Image src='/ngo-desktop1.png' alt='NGO Desktop' height={0} width={720}></Image>
        </div>
        <div>
        <Image src='/ngo-phone1.png' alt='NGO Desktop' height={0} width={200}></Image>
        </div>
      </div>

      <div>
        <p className='text-black text-1xl font-normal text-center p-10'>
          This project I made for a free Web Design course from FATEC Technology School.
          <br />
          The objective of this is to build a full responsive site from scratch using some easy-to-use technologies.
        </p>
      </div>

      <Example />
      <br />
      <br />
      <br />
      <div className="flex flex-row-reverse justify-center pr-5 pb-5">
        <CustomButtom
          title ="Go to Repository"
          containerStyles = "bg-green-200 text-black font-bold rounded-full p-2 hover:bg-black hover:text-white"
          handleClick = {handleScroll}
        />
      </div>

      <div className="flex flex-row-reverse justify-center pr-5 pb-5">
        <CustomButtom
          title ="Go to the Site"
          containerStyles = "bg-green-200 text-black font-bold rounded-full p-2 hover:bg-black hover:text-white"
          handleClick = {handleScroll}
        />
      </div>
    </div>
  )
}

export default Projects