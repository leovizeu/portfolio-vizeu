import { motion } from 'framer-motion'
import React from 'react'

const Experience = () => {
  return (
    <div className="text-center p-8 md:py-32" id='experience'>
      <div>
        <div className="flex justify-center pl-7 text-white text-2xl pb-6">
          <div className="flex absolute pr-48 uppercase tracking-wide text-2xl text-blue-500 font-semibold">
            1.
          </div>
          My Experience
        </div>
        <div className='flex-1 flex justify-center pb-6'>
          <a className="mt-2 text-slate-500 border-b-2 border-b-slate-500 w-20">
            Portfolio
          </a>
        </div>
      </div>
      <div>
        <h2 className='text-white text-xl pb-6'>
          Full Stack Developer
        </h2>
        <div className='text-white text-xs'>
          Develop and maintain web applications to show in my portfolio, <br />
          use Next.js to create the front-end and back-end in my projects, <br />
          creatie API Routes to call data from third party websites, <br />
          work with databases like PostGrees or MySQL to store data, <br />
          use Tailwind CSS to style my projects, use TypeScript and JavaScript <br />
          to build the logic behind the apps.
        </div>
      </div>
      <br />
      <p className="text-sm font-bold text-white">
        
      </p>
      
  </div>
  )
}

export default Experience