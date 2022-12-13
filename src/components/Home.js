import React, { useEffect, useState, useRef } from 'react';
import {HiOutlineMapPin} from 'react-icons/hi2';
import {IoIosArrowForward} from 'react-icons/io';
import SignIn from './auth/SIgnIn';
import SignUp from './auth/SignUp';



export default function Home() {




  return (
    <div className='overscroll-y-none '>           
    
        {/* hero */}
        <div id='hero' className='w-full pt-20 h-[620px] sm:h-[840px]  relative overflow-hidden bg-milk'>
            <div className='flex items-end pb-10 sm:items-center sm:pb-16 md:pb-[200px]  max-w-[1200px] h-full mx-auto px-6'>
                {/* main */}
                <div className='flex flex-col gap-8  z-40   '>

                  <h1 className='text-[52px] lg:text-[60px] sm:w-[400px] lg:w-[500px] font-bold font-ubuntu pr-10 text-white sm:text-neutral-900'>
                    Əla yeməkləri kəşfet və əldə et.
                  </h1>
                  <form>
                    <label className='text-white sm:text-neutral-800 font-medium text-xl'>Çatdırılma ünvanı</label>
                    <div className='h-[46px] lg:h-[52px] relative flex items-center mt-4 sm:mr-10'>
                      <HiOutlineMapPin className='absolute text-neutral-600 text-[25px] ml-3' />
                      <input 
                        type='text' 
                        className=' peer  read-only:bg-gray-100  pt-5 w-full h-full  pl-10 mr-5 rounded-md transition text-[14px] duration-300 border-2 hover:border-primary focus:border-primary focus:outline focus:outline-primary' 
                        />
                      <p className='peer-required:text-[10px] peer-valid:top-2 text-[14px] disabled  absolute text-gray-500 ml-10'>Çatdırılma ünvanı seç</p>                  
                      <button className='bg-primary px-3 h-full font-bold text-white text-[14px] rounded-md transition duration-150 hover:bg-blue-400'>Axtarış</button>
                    </div>
                  </form>
                  <a 
                    href='' 
                    className='group relative w-full text-white underline underline sm:no-underline  sm:text-neutral-800   font-medium text-[19px] lg:text-[22px] transition duration-300  hover:text-primary'>ya da Bakı şəhərindəki populyar restoranlara baxın
                    <span className='absolute hidden sm:block left-0 bottom-0 w-full h-px bg-neutral-800 origin-left transition duration-300 scale-x-100 group-hover:scale-x-0'></span>
                    </a>
                </div>
                {/* img */}
                <div className='w-[1000px] sm:hidden h-full  -right-[220px] top-12 absolute z-30 bg-cover bg-overlay'></div>
                <div className='w-[1000px] lg:w-full xl:w-[1160px] h-full -right-[400px] sm:-right-[300px] lg:-right-[240px] top-12 absolute  bg-cover bg-hero bg-no-repeat'></div>
            </div>

        </div>
        {/* hero end */}  


        {/* sign in */}
        <div className=''>
          <div className='flex flex-wrap justify-center max-w-[1200px] h-full mx-auto px-6'>
            {/* <SignIn /> */}
          </div>
        </div>
        {/* sign in END */}
        
        {/* test */}
        {/* <div class="relative flex items-center pb-10 w-[400px]" >
          <input type="text" class="peer  p-3  w-full pt-5 pb-3  pl-3  rounded-md transition duration-300 border-2 hover:border-primary focus:border-primary focus:outline focus:outline-primary"/>
          <p class=" peer-valid:text-[12px] peer-valid:top-2 absolute text-[14px] text-gray-500 ml-3 ">
            Please provide a valid email address.
          </p>
        </div> */}
        {/* test end */}
        
    </div>
  )
}
