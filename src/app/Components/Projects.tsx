import React from 'react'
import Image from 'next/image'
import Example from './Disclosure'

function Projects() {
  return (
    <div>
      <div className='text-center mt-28'>
        <h2 className='text-black text-6xl font-normal py-24'>
          Projects
        </h2>
        <h3 className='text-black text-5xl font-normal'>
          You are the Hope!
        </h3>
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
    </div>
  )
}

export default Projects