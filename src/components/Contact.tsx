import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get in Touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                I would love to hear from you! Whether you have questions, feedback, or opportunities for collaboration, please don’t hesitate to reach out. You can fill out the contact form below or connect with me on my social media platforms. Let’s explore how we can work together to create something truly remarkable!
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <AiOutlineMail size={30} /> xyz@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <BsTelephone size={30} />(021)000-0000
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-fuchsia-700'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-fuchsia-700'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className='bg-transparent border border-fuchsia-700'
                    id='msg'  rows={8}>
                    </textarea>
                </div>
                <button className='bg-fuchsia-700 p-2 px-6 rounded-full transition-all duration-300 hover:bg-gray-200 hover:text-fuchsia-700' data-aos="zoom-in-up">
                 Send
                </button>


            </div>
        </div>

    </div>
  )
}

export default Contact
