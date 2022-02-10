import React from 'react';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div>
       <div>
           <div>
               <h1>Your shopping basket is empty</h1>
               <p>You have no items in your basket buy one</p>
           </div>
           <div>
               <Subtotal/>
           </div>
       </div>
    </div>
  );
}

export default Checkout;
