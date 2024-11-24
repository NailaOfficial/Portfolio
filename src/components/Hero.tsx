import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS import
import Navbar from './Navbar';

const Hero = () => {
  // Initialize AOS when component is mounted
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration or other settings if needed
  }, []);

  return (
    <div
      id="hero"
      className='min-h-screen bg-no-repeat bg-cover'
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "40%",
        backgroundPosition: "left 110px top 200px"
      }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-end items-center'>
          <div>
            <p data-aos="zoom-in-up" className='text-fuchsia-700'>I&apos;m</p>
            <p data-aos="zoom-in-up" className='text-fuchsia-700'>Naila</p>
            <p data-aos="zoom-in-up" className='text-fuchsia-700'>Ameer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
