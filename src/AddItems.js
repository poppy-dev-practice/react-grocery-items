import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItems = ({newitem,setNewitem,handleSubit}) => {
  const inputRef=useRef()
  return (
    <form className='addForm' onSubmit={handleSubit}>
        <label htmlFor='AddItem'>Add items</label>
        <input ref={inputRef} id="addItems"autoFocus type="text" required placeholder='Add items' value={newitem} onChange={(e)=>setNewitem(e.target.value)}></input>
        <button aria-label='Add items' type="submit" onClick={()=>inputRef.current.focus()}><FaPlus/></button>
    </form>
  )
}

export default AddItems