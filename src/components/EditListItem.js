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
            <input className='border border-gray-300 rounded p-1 w-56 mr-2' value={value} onChange={handleChange} />
            <button onclick={()=>{ dispatch({
                type:'EDIT_LIST_ITEM',
                items:{
                    id:id,
                    item:value,
                    listName:listName
                }
              });
              handleToggle() }} className='font-bold text-lg ml-1'><i className="fa-solid fa-check"></i></button>
          </form>
      </div>
  );
}

export default EditListItem;
