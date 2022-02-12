import React from 'react';
import product1 from '../images/product1.jpg';
import { useStateValue } from './StateContext';



function CheckoutProduct({item}) {
  const [{basket},dispatch]=useStateValue();
  function removeBusket(){
      dispatch({
          type:'REMOVE_FROM_BASKET',
          item:{
            id:item.id,
            price:item.price,
            quantity:item.quantity
          }
      })
  }
  function increaseQuant(){
    dispatch({
        type:'INCREASE_QUANTITY',
        item:{
          id:item.id,
          price:item.price,
          quantity:item.quantity
        }
    })
  }

  function decreaseQuant(){
    dispatch({
        type:'DECREASE_QUANTITY',
        item:{
          id:item.id,
          price:item.price,
          quantity:item.quantity
        }
    })
  }

  return (
    <div className='border m-4 border-gray-300 bg-white px-6 py-2 xl:w-[240px] lg:w-[220px]  rounded-md'>
        <div className=''>            
            <p className='font-bold text-2xl'>{item.title}</p>
            <p>
                <small>$</small>
                <span>{item.price}</span>
            </p>
            <div className='font-bold'>
                {
                    Array(item.rating).fill(<span>* </span>)
                }
            </div>
        </div>
        <div className='w-full' >
          <img className='m-auto' src={product1}></img>
        </div>
        <button className='mr-3 mt-3 font-bold text-lg' onClick={increaseQuant}><i class="fa-solid fa-plus"></i></button>
              <span className='font-semibold text-xl'>{item.quantity} {item.quantity==1?`item`:`items`}</span>
        <button className='ml-3 mb-3 font-bold text-lg' onClick={decreaseQuant}><i class="fa-solid fa-minus"></i></button>

        <button onClick={removeBusket} className='bg-yellow-dusk rounded-sm border border-yellow-dark py-1 w-full'>Remove from basket</button>
    </div>
  );
}

export default CheckoutProduct;
