import React from 'react';
import Product from './Product';
import './SubHome.css'
import { v4 as uuid} from 'uuid'
import { PRODUCT_ARR } from './ProductArr';



function SubHome() {
  return (
        <div className=''>
            <div className='bg-img z-0'>
            </div>

            <div className='mt-[-460px] z-10 w-10/12 m-auto'>
              <div className='lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-4 mb-4'>
                {PRODUCT_ARR.map(p=>(
                  <Product
                    id={p.id}
                    title={p.title}
                    price={p.price}
                    rating={p.rating}
                    image={p.image}
                    quantity={p.quantity}
                    key={uuid()}
                   />
                ))}
              </div> 
            </div>
        </div>
  );
}

export default SubHome;
