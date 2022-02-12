import React from 'react';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateContext';
import Amazon_nav_logo from '../images/Amazon_navbar_logo.png'


function Navbar() {
  const [{basket}]=useStateValue();
  let totalQuan=0;
  basket.map(b=>{
    totalQuan=totalQuan+b.quantity
  })
  return (
      <nav className='bg-gray-900'>
        <div className='w-11/12 m-auto flex justify-evenly items-center h-16'>
          <Link to='/'>
           <img className='w-24 mt-3'  src={Amazon_nav_logo}></img>
          </Link>
          <div className='flex justify-evenly w-11/12 items-center text-white'>
              <div className='lg:w-9/12 md:w-8/12 w-7/12 relative'>
                <form>
                  <input className='w-full h-10 rounded-md'></input>
                </form>
                <div className='absolute rounded-tr rounded-br w-8 h-full flex justify-center items-center bg-yellow-dusk hover:bg-yellow-400 cursor-pointer  top-0 right-0'>
                  <i className='fas fa-search text-xl text-slate-800'></i>
                </div>
              </div>
              <Link to='/login'>
                <div>
                  <p className='text-[.75rem] opacity-60'>Hello, user</p>
                  <p>Sign in</p>
                </div>
              </Link>
              <Link to='/wishlist'>
                <div>
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
      </nav>
  );
}
export default Navbar;
