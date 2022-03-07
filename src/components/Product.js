import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateContext';


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
      <Link to='/singleProduct' state={{id:id,title:title,image:image,price:price,quantity:quantity,rating:rating}}  >
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
        <div className='max-w-[288px] max-h-[272px] m-auto' >
          <img className='m-auto' src={image}></img>
        </div>
        </Link>
        <button onClick={addToBasket}  className='bg-yellow-dusk rounded-sm border border-yellow-dark py-1 w-full'>Add to basket</button>
    </div>
  );
}

export default Product;
