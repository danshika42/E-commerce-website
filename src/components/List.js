import React from 'react';
import useInputState from './Custom_Hooks/useInputState';
import { useStateValue } from './StateContext';
import {v4 as uuid} from 'uuid';
import ListItem from './ListItem';
import swal from 'sweetalert';

function List({name,items}) {
  const [{list},dispatch]=useStateValue();
  const [value,handleValue,reset]=useInputState('');
  function deleteList(){
    dispatch({
        type:'DELETE_LIST',
        listName:name
    })
    swal("List deleted", {
        icon: "success",
     })
  }
  return (
      <div className='flex flex-col justify-center items-start border border-gray-300 sm:w-80 w-full p-5 rounded mt-4'>
          <div className='mb-4'>
            <span className='text-3xl font-bold'>{name}</span>
            <button onClick={deleteList}  className='bg-yellow-dusk rounded border border-yellow-dark py-1 px-1 ml-4 hover:bg-danger hover:border-danger'>Delete list</button>
          </div>
         
          <form onSubmit={e=>{
              e.preventDefault();
              dispatch({
                  type:'ADD_TO_LIST',
                  item:[{product:value,id:uuid()}],
                  name:name
              })
              reset();
           }}>
            <input value={value} required onChange={e=>handleValue(e)} className='border border-gray-300 rounded p-1 w-40 mr-2'></input>
            <button  className='bg-yellow-dusk rounded-sm border border-yellow-dark p-1 hover:bg-success hover:border-success'>Add to list</button>
          </form>
          
           <ol>
                {items.map(i=>
                  <li>
                      <ListItem product={i.product} id={i.id} listName={name}/>
                  </li>
                )}
            </ol>
          
      </div>
  );
}

export default List;
