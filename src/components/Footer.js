import React, { useState } from 'react';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import {RiMapPinFill} from 'react-icons/ri';
import {BiWorld} from 'react-icons/bi';
import {AiOutlineEyeInvisible} from 'react-icons/ai';

export default function () {

    const [firstTitle, setFirsTitle] = useState(false);
    const [secoundTitle, setSecondTitle] = useState(false);
    const [thirdTitle, setThirdTitle] = useState(false);
    const [fifthTitle, setFifthTitle] = useState(false);

  return (
    <footer className='bg-neutral-900 pt-[120px] pb-10'>
        <div className='max-w-[1200px] h-full mx-auto px-6'>
            {/* row top*/}
            <div className='flex flex-col md:flex-row justify justify-between mb-[100px]'>
                {/* col left*/}
                <div className='mb-8 md:mb-0  w-[300px]'>
                    <img className='h-[25px] lg:h-[28px] mb-8' src='https://d21buns5ku92am.cloudfront.net/69274/images/406823-Wolt_Logo_White-9e9dc9-large-1636496292.png' />
                    <div className='flex flex-wrap items-start sm:flex-col'>
                        <img className='h-[35px] mr-3 sm:mr-0 lg:h-[40px] object-contain mb-3' src='https://consumer-static-assets.wolt.com/app-store-badges/Download_on_the_App_Store_Badge_AZ_RGB_blk_100517.svg' />
                        <img className='h-[35px] lg:h-[40px] object-contain' src='https://consumer-static-assets.wolt.com/app-store-badges/google-play-badge_az.png' />
                    </div>
                </div>
                {/* col right row */}
                <div className='flex flex-col md:flex-row justify-between w-full md:w-[700px]'>
                    {/* col */}
                    <div  className='mb-5 md:mb-0'>
                        <h6 className='flex justify-between cursor-pointer mb-4  lg:mb-6 text-neutral-200 md:text-neutral-300 text-[12px] md:text-[14px] lg:text-[16px] font-medium '>
                            Gəlin, birlikdə edək
                            <IoIosArrowDown onClick={() => setFirsTitle(!firstTitle)} className={firstTitle ? 'hidden text-xl md:hidden': 'text-xl md:hidden' }  />
                            <IoIosArrowUp onClick={() => setFirsTitle(!firstTitle)} className={firstTitle ? 'text-xl md:hidden' : 'hidden text-xl md:hidden'} />
                        </h6>
                        <ul className={firstTitle ? 'flex flex-col gap-2' : 'hidden md:flex flex-col gap-2'} >
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Kuryerlər üçün</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Restoranlar üçün</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Mağazalar üçün</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Şirkətlər üçün</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Wolt Drive</a>
                            </li>
                        </ul>
                    </div> 
                     {/* col */}
                     <div  className='mb-5 md:mb-0'>
                        <h6 className='flex justify-between cursor-pointer mb-4 lg:mb-6 text-neutral-200 md:text-neutral-300 text-[12px] md:text-[14px] lg:text-[16px] font-medium'>
                            Company
                            <IoIosArrowDown onClick={() => setSecondTitle(!secoundTitle)} className={secoundTitle ? 'hidden text-xl md:hidden': 'text-xl md:hidden' }  />
                            <IoIosArrowUp onClick={() => setSecondTitle(!secoundTitle)} className={secoundTitle ? 'text-xl md:hidden' : 'hidden text-xl md:hidden'} />
                        </h6>
                        <ul className={secoundTitle ? 'flex flex-col gap-2' : 'hidden md:flex flex-col gap-2'}>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Haqqımızda</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>İşlər</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Məsuliyyət</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Təhlükəsizlik</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>İnvestorlar</a>
                            </li>
                        </ul>
                    </div> 
                     {/* col */}
                     <div  className='mb-5 md:mb-0'>
                        <h6 className='flex justify-between cursor-pointer mb-4 lg:mb-6 text-neutral-200 md:text-neutral-300 text-[12px] md:text-[14px] lg:text-[16px] font-medium'>
                            Useful links
                            <IoIosArrowDown onClick={() => setThirdTitle(!thirdTitle)} className={thirdTitle ? 'hidden text-xl md:hidden': 'text-xl md:hidden' }  />
                            <IoIosArrowUp onClick={() => setThirdTitle(!thirdTitle)} className={thirdTitle ? 'text-xl md:hidden' : 'hidden text-xl md:hidden'} />
                        </h6>
                        <ul className={thirdTitle ? 'flex flex-col gap-2' : 'hidden md:flex flex-col gap-2'}>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Dəstək</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Media</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Əlaqə</a>
                            </li>
                        </ul>
                    </div> 
                     {/* col */}
                     <div  className='mb-5 md:mb-0'>
                        <h6 className='flex justify-between cursor-pointer mb-4 lg:mb-6 text-neutral-200 md:text-neutral-300 text-[12px] md:text-[14px] lg:text-[16px] font-medium'>
                            Follow us
                            <IoIosArrowDown onClick={() => setFifthTitle(!fifthTitle)} className={fifthTitle ? 'hidden text-xl md:hidden': 'text-xl md:hidden' }  />
                            <IoIosArrowUp onClick={() => setFifthTitle(!fifthTitle)} className={fifthTitle ? 'text-xl md:hidden' : 'hidden text-xl md:hidden'} />
                        </h6>
                        <ul className={fifthTitle ? 'flex flex-col gap-2' : 'hidden md:flex flex-col gap-2'}>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Wolt bloq</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Mühəndislik bloqu</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Instagram</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Facebook</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>Twitter</a>
                            </li>
                            <li>
                                <a href='' className='text-[12px] lg:text-[14px] text-white hover:underline'>LinkedIn</a>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
            {/* row bottom */}
            <div className='flex flex-col md:flex-row gap-6 justify-between'>
                {/* col */}
                <div className='flex gap-6'>
                    <a href='' className='flex items-center gap-2 text-[10px] lg:text-[12px] text-white hover:underline'>
                        <RiMapPinFill  />
                        Azərbaycan
                    </a>
                    <a href='' className='flex items-center gap-2 text-[10px] lg:text-[12px] text-white hover:underline'>
                        <BiWorld />
                        Azərbaycan
                    </a>
                    <a href='' className='flex items-center gap-2 text-[10px] lg:text-[12px] text-white hover:underline'>
                        <AiOutlineEyeInvisible />
                        Əlçatanlıq
                    </a>
                </div>
                {/* col */}
                <div className='flex justify-between flex-wrap gap-4 md:gap-10' >
                    <div className='flex gap-6'>
                        <a href='' className='text-[10px] lg:text-[12px] text-neutral-400 md:text-white hover:underline'>
                        Əlçatanlıq Bəyanatı
                        </a>
                        <a href='' className='text-[10px] lg:text-[12px] text-neutral-400 md:text-white hover:underline'>
                        Şərtlər və Qaydalar
                        </a>
                        <a href='' className='text-[10px] lg:text-[12px] text-neutral-400 md;text-white hover:underline'>
                        Gizlilik Siyasəti
                        </a>
                    </div>
                    <p className='text-[10px] lg:text-[12px] text-neutral-400'>© Wolt 2014–2022</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
