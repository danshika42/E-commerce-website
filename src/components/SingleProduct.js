import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
import './SingleProduct.css'
import { useStateValue } from './StateContext';
import GooglePayButton from '@google-pay/button-react';


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
              <div className='sm:flex block  m-10  items-center'>
                <div className="fluid__image-container z-10">
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
                <div className='sm:ml-16 ml-0'>
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
                    <div className='mt-4'>
                      <GooglePayButton
                          environment="TEST"
                          className='w-full'
                          buttonSizeMode='fill'
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
                              totalPrice:  JSON.stringify(price),
                              currencyCode: 'USD',
                              countryCode: 'US',
                            },
                            shippingAddressRequired: true,
                            callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                          }}
                          onLoadPaymentData={paymentRequest => {
                            console.log('Success', paymentRequest);
                          }}
                          onPaymentAuthorized={paymentData => {
                              console.log('Payment Authorised Success', paymentData)
                              return { transactionState: 'SUCCESS'}
                            }
                          }
                          onPaymentDataChanged={paymentData => {
                              console.log('On Payment Data Changed', paymentData)
                              return { }
                            }
                          }
                          existingPaymentMethodRequired='false'
                          buttonColor='white'
                          buttonType='Buy'
                      />
                    
                    </div>
                    
                </div>
             </div>
          )
}

export default SingleProduct