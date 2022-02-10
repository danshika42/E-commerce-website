import React from 'react';
import Product from './Product';
import './SubHome.css'
// import {uuid} from 'uuid/v4'


import amazon_thumbnail from '../images/amazon_thumbnail.jpg';



function SubHome() {
  return (
        <div className=''>
            <div className='bg-img z-0'>
            </div>
            
            <div className='mt-[-460px] z-10 w-10/12 m-auto'>
              <div className='lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid gap-4 mb-4'>
                <Product
                    id="1234"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                />
                 <Product
                    id="1234"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                />
                <Product
                    id="1234"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                />
                <Product
                    id="1234"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                />  
              </div>  
              <div className='lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid gap-4 mb-4'>
                <Product
                    id="1234"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                />
                 <Product
                    id="1234"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                />
                <Product
                    id="1234"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                />
                <Product
                    id="1234"
                    title="Spark 8T"
                    price={11.96}
                    rating={5}
                    image={amazon_thumbnail}
                />  
              </div> 
            </div>
        </div>
  );
}

export default SubHome;
