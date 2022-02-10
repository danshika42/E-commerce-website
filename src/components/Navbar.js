import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
      <nav className='bg-gray-900'>
        <div className='w-11/12 m-auto flex justify-between items-center h-16'>
          <img className='w-24 mt-3'  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
          <div className='flex justify-evenly w-10/12 items-center text-white'>
              <div className='lg:w-9/12 w-7/12 relative'>
                <input className='w-full h-10 rounded-md'></input>
                <div className='absolute rounded-tr rounded-br w-8 h-full flex justify-center items-center bg-[#f0c137] hover:bg-yellow-400 cursor-pointer  top-0 right-0'>
                  <i className='fas fa-search text-xl text-slate-800'></i>
                </div>
              </div>
              <Link to='/login'>
                <div>
                  <p className='text-[.75rem] opacity-60'>Hello, user</p>
                  <p>Sign in</p>
                </div>
              </Link>
              <Link to='/'>
                <div>
                  <p className='text-[.75rem] opacity-60'>Returns</p>
                  <p>& orders</p>
                </div>
              </Link>
              <Link to='/'>
                <div>
                  <p className='text-[.75rem] opacity-60'>Your</p>
                  <p>Prime</p>
                </div>
              </Link>
              <Link to='/checkout'>
                <i className='fas fa-shopping-cart mr-2'></i>
                <span>2</span>
              </Link>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
