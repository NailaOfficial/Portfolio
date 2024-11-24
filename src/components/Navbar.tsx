
import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className='bg-fuchsia-700 text-white'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <div className='text-2xl font-bold'>My Portfolio</div>
        <div className='hidden md:flex gap-10'>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className='hover:text-gray-200 transition-colors relative after:content-[""] after:block after:w-full after:h-0.5 after:bg-white after:rounded transition-all duration-300 after:scale-x-0 hover:after:scale-x-100'
            >
              {item}
            </a>
          ))}
        </div>
        <div className='md:hidden'>
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <div className='border-t-2 border-white'></div> {/* Bottom border for the navbar */}
    </nav>
  );
}

export default Navbar;
