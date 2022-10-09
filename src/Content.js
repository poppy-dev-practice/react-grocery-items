import { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa';
import ItemList from "./ItemList";





const Content = ({items,handlecheck,handledelete}) => {
    


    return (
        <main>
            {items.length?<ItemList items={items} handlecheck={handlecheck} handledelete={handledelete} />:<p style={{marginTop:"2rem",color:"red"}}>Oops your basket is empty</p>}
        </main>
    )
}

export default Content