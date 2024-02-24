"use client"

import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { CardProps } from '../../../types';
import ModalRoute from './ModalRoute';

function Card ({title, title2, handleClick, imgSrc, cardAlt, live, code}: CardProps) {
  return (
    <div className="h-full w-80 relative overflow-hidden flex flex-col justify-center items-center">
      <Tilt>
        <div className="flex justify-center container h-60 w-60 bg-white bg-opacity-10 rounded-2xl shadow-5xl 
        relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm mb-3">
          <button
            disabled={false}
            type={'button'}
            onClick={handleClick}
          >
            <Image src={imgSrc} alt={cardAlt} width={400} height={400}></Image>
          </button>
        </div>
      </Tilt>
      <div className='flex flex-col gap-2'>
        <span className={`flex justify-center text-white bg-blue-500 rounded-md p-1 font-poppins text-1xl`}>
          <a className='w-40 h-8 absolute' href={live} target='about_blank'></a>
          {title}
        </span>
        <span className='flex justify-center text-white bg-blue-500 rounded-md p-1 font-poppins text-1xl'>
          <a className='w-40 h-8 absolute' href={code} target='about_blank'></a>
          {title2}
        </span>
      </div>
              
    </div>
  );
}

export default Card;