import React from 'react';
import product1 from '../images/product1.jpg';
import { useStateValue } from './StateContext';
// import { useStateValue } from './StateProvider';


function Product({id,title,image,price,rating,quantity}) {
  
  const [{basket},dispatch]=useStateValue();
  function addToBasket(){
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
        quantity:quantity
      }
    })
  }

  return (
    <div className='border border-gray-300 bg-white px-6 py-2 xl:w-[240px] lg:w-[220px]  rounded-md'>
        <div className=''>
            <p className='font-bold text-xl'>{title}</p>
            <p>
                <small>$</small>
                <span>{price}</span>
            </p>
            <div className='font-bold'>
                {
                    Array(rating).fill(<span>* </span>)
                }
            </div>
        </div>
        <div className='w-full' >
          <img className='m-auto' src={product1}></img>
        </div>
        <button onClick={addToBasket}  className='bg-[#f0c137] rounded-sm border border-[#cca01b] py-1 w-full'>Add to basket</button>
    </div>
  );
}

export default Product;
