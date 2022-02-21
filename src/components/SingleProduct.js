import React from 'react'
import { useLocation } from 'react-router-dom'

function SingleProduct() {
  const location = useLocation();
  const {title,image,quantity,rating,price} = location.state;
  return (

    <div className='flex  m-10  items-center'>
      <div className='w-4/12'>
        <img className='w-ful hover:scale-150' src={image} />
      </div>
      <div>
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
    </div>
  )
}

export default SingleProduct