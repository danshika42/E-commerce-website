import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './Firebase';
import Amazon_logo from '../images/Amazon_logo.png'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useStateValue } from './StateContext';

function SignUp() {
    const signUp=async ()=>{
        try{
            const user=await createUserWithEmailAndPassword(auth,email,password);
            // console.log(user);
        }catch(error){
            alert(error.message);
        }
    }
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [{nameReducer},dispatch]=useStateValue();
    useEffect(()=>{
        dispatch({
            type:'UPDATE_NAME',
            name:name
        })
    },[name])
    
  return (
    <div className='mt-8  mb-4 flex flex-col justify-center items-center m-auto w-3/4 sm:w-full '>
        <Link to='/'>
            <img className='w-24 m-3'  src={Amazon_logo}></img>
        </Link>

        <div className='border border-gray-300 rounded-md p-8 w-96 flex flex-col justify-evenly h-[25rem]'>
            <h1 className='text-2xl font-bold mb-3'>Sign up</h1>
            {/* <form className='flex flex-col justify-evenly'> */}
                <h1 className='font-semibold text-sm'>Name</h1>
                <input required value={name} onChange={(e)=>setName(e.target.value)}  type='text' className='border border-gray-300 rounded-md py-1 px-2 mb-4'/>
                <h1 className='font-semibold text-sm'>E-mail</h1>
                <input required value={email} onChange={(e)=>setEmail(e.target.value)}  type='email' className='border border-gray-300 rounded-md py-1 px-2 mb-4'/>
                <h1 className='font-semibold text-sm'>Password</h1>
                <input required value={password} onChange={(e)=>setPassword(e.target.value)} type='password' className='border border-gray-300 rounded-md py-1 px-2'/><br/>
                <button onClick={signUp} className='bg-yellow-dusk rounded-sm border border-yellow-dark py-1 px-2 mb-6'>Sign up and login</button>
            {/* </form> */}
            <p className='text-[0.765rem]'>By signing up, you agree to Amazon's Terms and Conditions</p>
        </div>
    </div>
  )
}

export default SignUp