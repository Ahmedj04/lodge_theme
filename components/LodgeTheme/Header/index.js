import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";



function Header() {
  return (
    <section className='border-b-2'>
      <div className='md:flex md:justify-center'>
        
        <div className='px-3 py-2 md:w-7/12 lg:w-6/12 flex justify-between md:flex-row-reverse'>
          
          <div className='border border-black'>
            <p className='px-4 py-2 text-2xl font-medium uppercase'>Lodge</p>
          </div>

          <div className='my-auto lg:hidden'>
            <IoIosMenu size={30} />
          </div>
          <div className='hidden lg:block my-auto lg:ml-10'>
            <ul className='flex text-lg'>
              <li><a className='pr-5 cursor-pointer hover:underline'>Home</a></li>
              <li><a className='pr-5 cursor-pointer hover:underline'>Rooms</a></li>
              <li><a className='pr-5 cursor-pointer hover:underline'>Gallery</a></li>
              <li><a className='pr-5 cursor-pointer hover:underline'>Services</a></li>
              <li><a className='pr-5 cursor-pointer hover:underline'>Booking</a></li>
            </ul>
          </div>

        </div>

        <div className='hidden md:block md:flex md:justify-end md:my-auto md:w-5/12 lg:w-5/12'>
          <div className='flex'>
            <span className='my-auto'><CiMail /></span>
            <span className='ml-2'> Contact</span>
          </div>

          <div className='flex ml-5 md:mr-10'>
            <span className='my-auto'><SlCalender /></span>
            <span className='ml-2'> BOOK NOW</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Header