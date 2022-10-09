import React from 'react'

import LineItems from './LIneItems';

const ItemList = ({items,handlecheck,handledelete}) => {
  return (
    
        <ul>
            
            {items.map(item=>
                (<LineItems item={item} handlecheck={handlecheck} handledelete={handledelete} key={item.id}/>))}
        </ul>
  )
}

export default ItemList 