import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
import './SingleProduct.css'
import { useStateValue } from './StateContext';

function SingleProduct() {
  const location = useLocation();
  const [{basket},dispatch]=useStateValue();
  const {title,image,rating,price,id,quantity} = location.state;
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
              <div className='flex  m-10  items-center '>
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                         smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: image,
                            // sizes: '(max-width: 400px) 10vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: image,
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                            width: '248%',
                            height: '100%'
                        },
                        shouldUsePositiveSpaceLens: true
                    }} />
                </div>
                <div className='ml-16'>
                    <p className='font-bold text-xl md:text-4xl'>{title}</p>
                    <p className='md:text-2xl text-lg'>
                        <small>$</small>
                        <span>{price}</span>
                    </p>
                    <div className='font-bold text-xl md:text-2xl'>
                          {
                              Array(rating).fill(<span>* </span>)
                          }
                    </div>
                    <button onClick={addToBasket}  className='bg-yellow-dusk rounded-sm border border-yellow-dark py-1 w-full'>Add to basket</button>
                </div>
             </div>
          )
}

export default SingleProduct