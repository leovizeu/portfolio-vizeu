"use client"

import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { CardProps } from '../../../types';

function Card ({title, href, handleClick, image}: CardProps) {
  return (
    <div className="h-80 relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <Tilt>
        <div className="container h-60 w-60 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <button
          disabled={false}
          type={'button'}
          onClick={handleClick}
          className='flex justify-center items-center h-full w-full cursor-pointer'
          >
            <span className={`text-white font-poppins text-2xl tracking-widest`}>
              {title}
            </span>
          </button>
        </div>
      </Tilt>
    </div>
  );
}

export default Card;