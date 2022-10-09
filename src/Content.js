import { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa';
import ItemList from "./ItemList";





const Content = ({items,handlecheck,handledelete}) => {
    


    return (
        <>
            {items.length?<ItemList items={items} handlecheck={handlecheck} handledelete={handledelete} />:<p style={{marginTop:"2rem",color:"blue"}}>Oops your basket is empty</p>}
        </>
    )
}

export default Content