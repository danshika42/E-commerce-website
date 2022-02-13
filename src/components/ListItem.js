import React from 'react';
import useToggle from './Custom_Hooks/useToggle';
import EditListItem from './EditListItem';
import { useStateValue } from './StateContext';

function ListItem({product,id,listName}) {
  const [{list},dispatch]=useStateValue(false);
  const [toggle,handleToggle]=useToggle();
  function deleteFromList(){
      dispatch({
          type:'DELETE_FROM_LIST',
          id:id,
          listName:listName
      })
  }
  function editListItem(){
    handleToggle();
  }
  return (
      <div className='mt-2 flex'>
          {toggle?<EditListItem product={product} id={id} handleToggle={handleToggle} listName={listName}  />:(
          <>
          <div className='w-48'>
            <span>
            {product}
            </span>
          </div>
         
          
          <button onClick={editListItem} className='mr-3  ml-4'><i className="fa-solid fa-pen-to-square"></i></button>
          <button onClick={deleteFromList} ><i className="fa-solid fa-trash"></i></button>
          </>
          )}
      </div>
  );
}

export default ListItem;
