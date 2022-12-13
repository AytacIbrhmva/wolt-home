import React, {useState} from 'react';
import {FcGoogle} from 'react-icons/fc';
import {AiFillApple, AiOutlineClose} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';

import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../firebase';




const SignUp = ({registr, setRegistr}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async (e) => {
      await  e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })

        setEmail('');
        setPassword('');
    }
  

  return (
    <div className={registr ? 'absolute flex overscroll-y-none justify-center items-center top-0   z-50 bg-overlay w-full h-[100vh]' : 'hidden'}>
      {/* qeydiyyat */}
      <div className='bg-white md:w-[500px]  w-full  top-20 rounded-xl px-3 py-5'>
        {/* container */}
        <div>
          {/* header */}
          <div>
            <div className='w-full flex justify-end'>
              <button onClick={() => setRegistr(!registr)} className='rounded-full bg-neutral-200 p-2 hover:bg-neutral-300 transiton duration-150'>
                <AiOutlineClose className='text-[25px]' />
              </button>
            </div>
            <h4 className='text-[28px] font-semibold mb-2'>Hesab yaradın və ya daxil olun</h4>
            <p className='text-[14px] mb-6'>Aşağıda daxil olun və ya yeni Wolt hesabı yaradın.</p>
          </div>
          {/* login with */}
          <div className='flex flex-col gap-5 w-full'>
            <button className='relative hover:bg-neutral-300 flex items-center justify-center font-bold p-3 w-full border-2 rounded-md'>
              <FcGoogle className='absolute left-3' />
             Google ilə davam et
            </button>
            <button className='relative hover:bg-neutral-900 bg-black flex text-white items-center justify-center font-bold p-3 w-full rounded-md'>
              <AiFillApple className='absolute left-3' />
              Apple ilə davam etmək
            </button>
            <button className='relative hover:bg-blue-800  bg-blue-900 flex text-white items-center justify-center font-bold p-3 w-full rounded-md'>
              <BsFacebook className='absolute left-3' />
              Facebook ilə davam et
            </button>
            <div 
              className="after:content-[''] after:absolute after:w-[25%] after:h-px after:bg-gray-200 after:left-0
                        before:content-[''] before:absolute before:w-[25%] before:h-px before:bg-gray-200 before:right-0
                        relative flex items-center justify-center w-full text-[14px]" >
              və ya e-poçt ilə daxil olun
            </div>
            <form onSubmit={signUp} className='flex flex-col gap-5'>
                <input 
                    type='email' 
                    className='p-3 w-full rounded-md border-2 hover:border-primary focus:border-primary focus:outline focus:outline-primary' 
                    placeholder='E-poçt' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type='text' 
                    className='p-3 w-full rounded-md border-2 hover:border-primary focus:border-primary focus:outline focus:outline-primary' 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='w-full p-3 text-[14px] hover:bg-sky-400 font-bold text-white bg-sky-500 rounded-md'>Sign Up</button>    
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp