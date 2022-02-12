import React,{useState} from 'react';
import List from './List';
import { useStateValue } from './StateContext';
import {v4 as uuid} from 'uuid';
import useInputState from './Custom_Hooks/useInputState';
import swal from 'sweetalert';




function WishList() {
  const [value,handleValue,reset]=useInputState('')
  const [{list},dispatch]=useStateValue();
 
  return (
      <div>
          <div className='sm:m-8 m-2'>
            <form onSubmit={(e)=>{
                e.preventDefault();
                dispatch({
                    type:'ADD_LIST_NAME',
                    item:{
                        name:value,
                        items:[]
                    }
                })
                reset();
                swal("New list created", {
                    icon: "success",
                })
            }}>
                <input value={value} onChange={(e)=>handleValue(e)} required  className='border border-gray-300 rounded py-1 px-2 sm:w-80 w-8/12 mb-4 mr-2' placeholder='name of list'></input>
                <button className='bg-yellow-dusk rounded border border-yellow-dark  p-1 hover:bg-success hover:border-success '>Create a list</button>
            </form >
            <div>
                {
                    list.map(l=>(
                        <List name={l.name} items={l.items}/>
                    ))
                }
            </div>
          </div>
      </div>
  );
}

export default WishList;
