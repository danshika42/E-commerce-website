import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateContext';
import Amazon_nav_logo from '../images/Amazon_navbar_logo.png'
import useInputState from './Custom_Hooks/useInputState';
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';


function Navbar() {
  const logOut=async ()=>{
    await signOut(auth);
  }
  const [{basket,search,nameReducer},dispatch]=useStateValue();
 
  let totalQuan=0;
  basket.map(b=>{
    totalQuan=totalQuan+b.quantity
  })

  const [value,handleChange,reset]=useInputState(search);
  
  function clearSearch(){
    dispatch({
      type:'CLEAR_SEARCH',
    })
    reset();
  }
 
  useEffect(()=>{
    dispatch({
      type:'UPDATE_SEARCH',
      value:value
    })
  },[value])

  return (
      <nav className='bg-gray-900'>
        <div className='w-11/12 m-auto flex sm:flex-row flex-col justify-evenly items-center sm:h-16 h-36 sm:pb-0 pb-2'>
          <Link to='/'>
           <img className='w-24 mt-3'  src={Amazon_nav_logo}></img>
          </Link>
          <div className='flex sm:flex-row flex-col-reverse justify-evenly w-10/12 items-center text-white'>
              <div className='lg:w-9/12 md:w-8/12 sm:w-7/12 w-full relative'>
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    dispatch({
                      type:'UPDATE_SEARCH',
                      value:value
                    })
                  }}
                  className='flex items-center'>
                    <input value={value} onChange={handleChange} className='text-black p-2 w-full h-10 rounded-md'></input>
                    {
                    value!==''? 
                    (<i onClick={clearSearch} class="fa-solid fa-xmark text-gray-800 z-index-5 right-12 text-lg cursor-pointer absolute"></i>):
                    <></>
                    }
                    <button className='absolute rounded-tr rounded-br w-8 h-full flex justify-center items-center bg-yellow-dusk hover:bg-yellow-400 top-0 right-0'>
                    <i className='fas fa-search text-xl text-slate-800'></i>
                    </button>
                  </form>
              </div>
              <div className='flex sm:w-4/12 w-10/12 justify-evenly items-center sm:mb-0 mb-2'>
                <Link to='/login'>
                <i className="fa-solid fa-circle-user sm:hidden block"></i>
                  <div className='hidden sm:block'>
                    <p className='text-[.75rem] opacity-60'>Hello, {nameReducer}</p>
                    <p onClick={logOut}>Sign out</p>
                  </div>
                </Link>
                <Link to='/wishlist'>
                  <i className="fa-solid fa-list sm:hidden block"></i>  
                  <div className='hidden sm:block'>
                    <p className='text-[.75rem] opacity-60'>Your</p>
                    <p>Wishlist</p>
                  </div>
                </Link>
                <Link to='/checkout'>
                  <i className='fas fa-shopping-cart mr-2'></i>
                  <span>{totalQuan}</span>
                </Link>
              </div>
          </div>
        </div>
      </nav>
  );
}
export default Navbar;
