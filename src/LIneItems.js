import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItems = ({item,handlecheck,handledelete}) => {
  return (
    <li  className="item" >
                    <input type="checkbox" checked={item.checked} onChange={()=>handlecheck(item.id)}></input>
                    <label style={(item.checked)?{textDecoration:"line-through"}:null} onDoubleClick={()=>handlecheck(item.id)} htmlFor="item">{item.item}</label>
                    <FaTrashAlt role="button" aria-label={`Delete ${item.item}`} tabIndex="0" onClick={()=>handledelete(item.id)}/>
                </li>
  )
}

export default LineItems