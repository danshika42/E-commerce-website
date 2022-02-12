import React from 'react';
import { Link } from 'react-router-dom';
import Amazon_logo from '../images/Amazon_logo.png'

function Login() {
  return( 
    <div className='mt-8  mb-4 flex flex-col justify-center items-center m-auto w-3/4 sm:w-full '>
        <Link to='/'>
            <img className='w-24 m-3'  src={Amazon_logo}></img>
        </Link>
       <div className='border border-gray-300 rounded-md p-8  flex flex-col justify-evenly h-[25rem]'>
        <h1 className='text-2xl font-bold mb-3'>Sign in</h1>
        <form className='flex flex-col justify-evenly'>
            <h1 className='font-semibold text-sm'>E-mail</h1>
            <input type='email' className='border border-gray-300 rounded-md py-1 mb-4'/>
            <h1 className='font-semibold text-sm'>Password</h1>
            <input type='password' className='border border-gray-300 rounded-md py-1'/><br/>
            <button type='sumbit' className='bg-yellow-dusk rounded-sm border border-yellow-dark py-1 px-2 mb-6'>Sign in</button>
        </form>
        <p className='text-[0.765rem]'>By signing in, you agree to Amazon's Terms and Conditions</p>
        <button type='sumbit'  className='bg-yellow-dusk rounded-sm border border-yellow-dark py-1'>Create your Amazon account</button>
       </div>
    </div>
  );
}

export default Login;
