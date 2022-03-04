import React from 'react';
import { useStateValue } from './StateContext';
import CheckoutProduct from './CheckoutProduct';
import {v4 as uuid} from 'uuid'
import GooglePayButton from '@google-pay/button-react';




function Checkout() {
  const [{basket,total}]=useStateValue();
  
  let totalQuan=0;
  basket.map(b=>{
    totalQuan=totalQuan+b.quantity
  })
  
  return (
    <div>
           {
              basket.length===0?
              (
                <div className='p-4 m-auto flex justify-between w-11/12'>
                  <div className='font-semibold'>
                    <h1>Your shopping basket is empty</h1>
                    <p>You have no items in your basket buy one</p>
                  </div>
                </div>
              ):
              (
              <div className='sm:flex justify-around'>
                <div>
                {basket.map(b=>(
                  <CheckoutProduct item={b} key={uuid()} />
                ))}
                </div>
              
                <div className='text-xl sm:mt-4 mt-8'>
                  <span className='p-3'>Subtotal ({totalQuan} {totalQuan===1?`item`:`items`}): </span>
                  <span className='font-bold'>${total.toFixed(2)}</span>
                  
                  <div className='mt-4'>
                      <GooglePayButton
                            environment="TEST"
                            buttonColor="white"
                            buttonType="checkout"
                            paymentRequest={{
                              apiVersion: 2,
                              apiVersionMinor: 0,
                              allowedPaymentMethods: [
                                {
                                  type: 'CARD',
                                  parameters: {
                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                  },
                                  tokenizationSpecification: {
                                    type: 'PAYMENT_GATEWAY',
                                    parameters: {
                                      gateway: 'example',
                                      gatewayMerchantId: 'exampleGatewayMerchantId',
                                    },
                                  },
                                },
                              ],
                              merchantInfo: {
                                merchantId: '12345678901234567890',
                                merchantName: 'Demo Merchant',
                              },
                              transactionInfo: {
                                totalPriceStatus: 'FINAL',
                                totalPriceLabel: 'Total',
                                totalPrice: JSON.stringify(total),
                                currencyCode: 'USD',
                                countryCode: 'US',
                              },
                            }}
                            onLoadPaymentData={paymentRequest => {
                              console.log('load payment data', paymentRequest);
                            }}
                      />
                    </div>

                  </div>
               </div>
              )
           }
             
              
    </div>
  );
}

export default Checkout;
