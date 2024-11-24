import React from 'react'

const About = () => {
  return (
    <div id='about'className='container pt-32'>
        <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">About Me</h2>
        <p className='text-gray-500 pt-4' data-aos="zoom-in-up">
        I am a student at GIAIC pursuing a course in Artificial Intelligence, Web 3.0, and the Metaverse. With a passion for cutting-edge technology, I strive to understand and apply innovative solutions to real-world challenges. My journey in AI has equipped me with a solid foundation in machine learning, data analysis, and intelligent systems. In addition, my exploration of Web 3.0 and the Metaverse has opened new avenues for creativity and collaboration, allowing me to engage with decentralized technologies and immersive environments. I am eager to contribute to transformative projects and be a part of a community that shapes the future of technology.
        </p>
        <br />
        <br />
        <div className='flex space-x-4'>
  <button className='bg-fuchsia-700 text-white px-6 py-3 rounded-full hover:bg-fuchsia-600'>
    Hire Me
  </button>
  <button className='bg-transparent border border-fuchsia-700 text-fuchsia-700 px-6 py-3 rounded-full hover:bg-fuchsia-700 hover:text-white'>
    Download CV
  </button>
</div>

    </div>
  )
}

export default About