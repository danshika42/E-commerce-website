import React from 'react';
import { useStateValue } from './StateContext';
import CheckoutProduct from './CheckoutProduct';
import {v4 as uuid} from 'uuid'




function Checkout() {
  const [{basket,total}]=useStateValue();
  let totalQuan=0;
  basket.map(b=>{
    totalQuan=totalQuan+b.quantity
  })
  return (
    <div>
           {
              basket.length===0?
              (
                <div className='p-4 m-auto flex justify-between w-11/12'>
                  <div className='font-semibold'>
                    <h1>Your shopping basket is empty</h1>
                    <p>You have no items in your basket buy one</p>
                  </div>
                </div>
              ):
              (
              <div className='flex justify-around'>
                <div>
                {basket.map(b=>(
                  <CheckoutProduct item={b} key={uuid()} />
                ))}
                </div>
              
                <div className='text-xl mt-4'>
                 <span className='p-3'>Subtotal ({totalQuan} {totalQuan==1?`item`:`items`}): </span>
                 <span className='font-bold'>${total}</span>
                </div>
              </div>
              )
           }
    </div>
  );
}

export default Checkout;
