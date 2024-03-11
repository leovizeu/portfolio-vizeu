"use client"

import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { CardProps } from '../../../types';
import { useRouter } from 'next/router';
import Modal from './ModalRoute';

function Card ({title, title2, handleClick, imgSrc, cardAlt, live, code}: CardProps) {
  return (
    <div className="relative w-80 h-96 gap-3 overflow-hidden flex flex-col justify-center items-center">    
      <Tilt glareEnable glareMaxOpacity={10} glareColor='white' glarePosition='bottom' glareBorderRadius='1rem'>
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
        <span className='btn'>
          <a className='w-40 h-8 absolute' href={live} target='about_blank'></a>
          {title}
        </span>
        <span className='btn'>
          <a className='w-40 h-8 absolute' href={code} target='about_blank'></a>
          {title2}
        </span>
      </div> 
    </div>
  );
}

export default Card;