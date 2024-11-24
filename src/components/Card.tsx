
import React from 'react';
import Image from 'next/image';

interface PropsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-fuchsia-700 w-full max-w-xs mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105'>
      <div className='relative w-full h-[350px] sm:h-[350px]'>
        <Image 
          src={img} 
          alt={title} 
          layout="fill" 
          objectFit="contain"
          objectPosition="top"
          className='rounded-t-lg'  
        />
      </div>
      <div className='p-4 space-y-4 bg-gray-800 rounded-b-lg'>
        <h3 className='text-xl font-semibold text-white'>{title}</h3>
        <p className='text-gray-400'>{desc}</p>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span className='bg-fuchsia-700 text-white py-1 px-2 rounded-full text-sm' key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Card;

