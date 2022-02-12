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
      <div className='mt-2'>
          {toggle?<EditListItem product={product} id={id} handleToggle={handleToggle} listName={listName}  />:(
          <>
          {product}
          <button onClick={editListItem} className='mr-3 text-lg ml-4'><i class="fa-solid fa-pen"></i></button>
          <button onClick={deleteFromList} className='text-lg'><i class="fa-solid fa-trash"></i></button>
          </>
          )}
      </div>
  );
}

export default ListItem;
