import React from 'react';
import useInputState from './Custom_Hooks/useInputState';
import { useStateValue } from './StateContext';

function EditListItem({product,id,handleToggle,listName}) {
  const [value,handleChange,reset]=useInputState(product);
  const [{list},dispatch]=useStateValue();

  return (
      <div>
          <form onSubmit={e=>{
              e.preventDefault();
              dispatch({
                type:'EDIT_LIST_ITEM',
                items:{
                    id:id,
                    item:value,
                    listName:listName
                }
              })
              handleToggle();
          }}>
            <input className='border border-gray-300 rounded p-1 w-44 mr-2' value={value} onChange={handleChange} />
            <button onclick={()=>{ dispatch({
                type:'EDIT_LIST_ITEM',
                items:{
                    id:id,
                    item:value,
                    listName:listName
                }
              });
              handleToggle() }} className='bg-yellow-dusk rounded-sm border border-yellow-dark p-1 hover:bg-success hover:border-success'>Save</button>
          </form>
      </div>
  );
}

export default EditListItem;
