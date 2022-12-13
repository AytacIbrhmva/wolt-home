import React, {useState, useEffect} from 'react';
import {FcGoogle} from 'react-icons/fc';
import {AiFillApple} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {IoClose} from 'react-icons/io5';

import {signInWithEmailAndPassword} from "firebase/auth";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../../firebase';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async (e) => {
      await  e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })

        setEmail('');
        setPassword('');
    }


    const [authUser, setAuthUser] = useState(null);
    const [errorBtn, setErrorBtn] = useState('')

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            }else {
                setAuthUser(null)
                console.log('tapilmadi');
            }
        })
    }, [])


    const userSignOut = () => {
        signOut(auth).then(() => {
            alert('sign out successfull');
        }).catch((error) => console.log(error))
    }


  return (
    <div className='w-full flex bg-overlow justify-center'>
        {/* qeydiyyat */}
      <div className='bg-white md:w-[500px]  w-full  top-20 rounded-lg px-3 py-5'>
        {/* container */}
        <div>
          {/* header */}
          {
            authUser ?  
            <div>
                <h4 className='text-[28px] font-semibold mb-2'>Hesaba daxil olundu.</h4>
                <p className='text-[14px] mb-6'>{`Welcome: ${authUser.email}`}</p>
            </div>  
            :     
            <div>
                <h4 className='text-[28px] font-semibold mb-2'>Daxil olun</h4>
                <p className='text-[14px] mb-6'>Aşağıda daxil olun.</p>
            </div>
          }
          {/* login with */}
          <div className='flex flex-col gap-5 w-full'>
      
                {
                    authUser ?  
                        <button className='p-3 w-full bg-green-200 border-2 border-green-500 rounded-md'>Signed In successfully</button>
                        :
                    <button className='relative flex items-center justify-center p-3 w-full bg-red-200 border-2 border-red-500 rounded-md'>
                        Incorrect username or password. 
                        <IoClose onClick={() => setErrorBtn(false)} className='absolute right-0 right-3 text-xl text-red-700 hover:text-red-500' /> 
                    </button>
                }

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
                <button className='w-full p-3 text-[14px] bg-sky-500 hover:bg-sky-400 font-bold text-white rounded-md'>Sign In</button>    
            </form>

            <button onClick={userSignOut} className='w-full p-3 text-[14px] bg-red-600 hover:bg-red-500  font-bold text-white rounded-md'>Sign out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn