import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {IoMdPerson, IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import SignUp from './auth/SignUp';


export default function () {

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  
  const [registr, setRegistr] = useState(false);

  useEffect(() => { 
    if(registr == true) {
      document.body.className = 'no-scroll'
    }else {
      document.body.className = null
    }

  }, [registr])

  
  return (
    <nav className='absolute z-50 bg-white w-full py-3 lg:py-5 border-b'>
      {/* container */}
      <div className='max-w-[1200px] mx-auto px-6 flex items-center justify-between'>
          <img src='https://d21buns5ku92am.cloudfront.net/69297/logo/retina-1665002030.png' className='w-[60px] md:w-[70px]'/>
          <div className='hidden lg:block'>
            <a onClick={() => setRegistr(!registr)} className='mr-6 text-[14px] cursor-pointer font-medium transition duration-150 text-neutral-700 hover:text-neutral-600'>Daxil ol</a>
            <a onClick={() => setRegistr(!registr)} className='text-white text-base cursor-pointer font-bold rounded-md py-3 px-5 button bg-primary transition duration-150 hover:bg-blue-400 '>Qeydiyyatdan keçin</a>
          </div>
          <div className='lg:hidden w-full relative flex flex-col items-end'>
            <div onClick={() => toggle()}  className='cursor-pointer w-[60px] flex items-center justify-between rounded-full bg-gray-200 p-1'>
              <div className='bg-gray-300 rounded-full border-2 p-1 border-white'>
                <IoMdPerson className='text-white text-md  md:text-xl' />
              </div>
              <IoIosArrowDown className={open ? 'hidden' : 'block text-lg'}  />
              <IoIosArrowUp className={open ? 'block text-lg': 'hidden'  }  />
            </div>
            <div className={open ? 'absolute z-50 flex flex-col rounded-lg border shadow mt-12 bg-white opacity-1 ' : 'hidden opacity-0' }>
              <div className='absolute w-[15px] h-[15px] bg-white border-l border-t  rotate-45  right-0 -mt-2 top-0 mr-4'></div>
              <a  onClick={() => {setRegistr(!registr); setOpen(!open)} } className=' z-50 text-[14px] cursor-pointer rounded-md transition duration-150 hover:bg-gray-100 p-2 m-1'>Giriş edin və ya qeydiyyatdan keçin</a>
              <div className='w-full h-px border-b mb-1'></div>
              <a href="" className='text-[14px] rounded-md transition duration-150 hover:bg-gray-100 p-2 mx-2 mb-1'>Dil: Azerbaijani</a>
              <a href="" className='text-[14px] rounded-md transition du6ration-150 hover:bg-gray-100 p-2 mx-2 mb-1'>Dəstək</a>
            </div>
          </div>
      </div>

      <SignUp registr={registr} setRegistr={setRegistr} />
     

    </nav>
  )
}
