import React, { useState } from 'react';
import Product from './Product';
import './SubHome.css'
import { v4 as uuid} from 'uuid'
import { PRODUCT_ARR } from './ProductArr';
import { useStateValue } from './StateContext';



function SubHome() {
  const [{search}]=useStateValue();
  // const [toggle,setToggle]=useState(false);
  return (
        <div className=''>
            <div className='bg-img z-0'>
            </div>

            <div className='sm:mt-[-460px] mt-[-600px]  z-10 w-10/12 m-auto'>
              <div className='lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-4 mb-4'>

                {
                  search==='' ? 
                  PRODUCT_ARR.map(p=>(
                    <Product
                      id={p.id}
                      title={p.title}
                      price={p.price}
                      rating={p.rating}
                      image={p.image}
                      quantity={p.quantity}
                      key={uuid()}
                     />
                  )):
                  (
                    PRODUCT_ARR.map(p=>{
                      if(p.title.toUpperCase().indexOf(search.toUpperCase())>-1){
                        return  <Product
                        id={p.id}
                        title={p.title}
                        price={p.price}
                        rating={p.rating}
                        image={p.image}
                        quantity={p.quantity}
                        key={uuid()}
                      />
                      }
                    })
                  )
                }
                {/* {
                  !toggle?(
                    <div>
                      <h5>No results for {search}.</h5>
                      <p>Try checking your spelling or use more general terms</p>
                    </div>
                  ):<></>
                } */}
               
              </div> 
            </div>
        </div>
  );
}

export default SubHome;