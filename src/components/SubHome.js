import React from 'react';
import Product from './Product';
import './SubHome.css'
import { v4 as uuid} from 'uuid'


import amazon_thumbnail from '../images/amazon_thumbnail.jpg';



function SubHome() {
  return (
        <div className=''>
            <div className='bg-img z-0'>
            </div>
            
            <div className='mt-[-460px] z-10 w-10/12 m-auto'>
              <div className='lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid gap-4 mb-4'>
                <Product
                    id="1234a"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                    quantity={1}
                    key={uuid()}
                />
                 <Product
                    id="1234b"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                    quantity={1}
                    key={uuid()}
                />
                <Product
                    id="1234c"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                    quantity={1}
                    key={uuid()}
                />
                <Product
                    id="1234d"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                    quantity={1}
                    key={uuid()}
                />  
              </div>  
              <div className='lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid gap-4 mb-4'>
                <Product
                    id="1234e"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                    quantity={1}
                    key={uuid()}
                />
                 <Product
                    id="1234f"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                    quantity={1}
                    key={uuid()}
                />
                <Product
                    id="1234g"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                    quantity={1}
                    key={uuid()}
                />
                <Product
                    id="1234h"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                    quantity={1}
                    key={uuid()}
                />  
              </div> 
            </div>
        </div>
  );
}

export default SubHome;
