"use client"

import React from 'react'
import Image from 'next/image'
import Example from './Disclosure'
import CustomButtom from './CustomButtom'
import Link from 'next/link'
import Card from './Card'

function Projects() {
  const handleScroll = () => {
  }

  return (
    <div id='projects'>
      <h1 className="flex justify-center pl-7 text-white text-2xl mb-8">
        <div className="flex absolute pr-44 uppercase tracking-wide text-2xl text-blue-500 font-semibold">
          2.
        </div>
          My Projects
      </h1>

      <div className='flex justify-center gap-6 max-md:flex-col max-md:items-center'>
        <Card 
          title={'Car Renting and Selling'}
          title2={'SourceCode'}
          live={'https://car-selling-site-nine.vercel.app'}
          code={'https://github.com/leovizeu/car-selling-site'}
          handleClick={handleScroll}
          imgSrc={'/CarRentBoth.png'}
          cardAlt='Car Renting and Selling'
        />

        <Card 
          title={'You Are the Hope'}
          title2={'SourceCode'}
          live={'https://leovizeu.github.io/fictitious-NGO/'}
          code={'https://github.com/leovizeu/fictitious-NGO'}
          handleClick={handleScroll}
          imgSrc={'/HopeBoth.png'}
          cardAlt='You are the Hope NGO'
        />

        <Card 
          title={'School for Young'}
          title2={'SourceCode'}
          live={'https://leovizeu.github.io/Prep-School/'}
          code={'https://github.com/leovizeu/Prep-School'}
          handleClick={handleScroll}
          imgSrc={'/YoungSchoolBoth.png'}
          cardAlt='You are the Hope NGO'
        />

      </div>
      
      <div className='flex justify-between font-mono'>
        <ul className='text-blue-500 list-disc pl-5 pt-5'>
          <li>
            <Link href="/?projeto=1" legacyBehavior>
            <a>Car Renting and Selling</a>
            </Link>
          </li>
          <li><a href="">You are the hope</a></li>
          <li><a href="">Prepare Yourself School</a></li>
          <li><a href="">Task Scheduling Open Source</a></li>
        </ul>
      </div>

      <div>
        <p className='text-white text-1xl font-normal text-center p-10'>
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
          containerStyles = "bg-blue-200 text-blue-700 font-bold rounded-full p-2 hover:bg-blue-500 hover:text-white"
          handleClick = {handleScroll}
        />
      </div>

      <div className="flex flex-row-reverse justify-center pr-5 pb-5">
        <CustomButtom
          title ="Go to the Site"
          containerStyles = "bg-blue-200 text-blue-700 font-bold rounded-full p-2 hover:bg-blue-500 hover:text-white"
          handleClick = {handleScroll}
        />
      </div>
    </div>
  )
}

export default Projects