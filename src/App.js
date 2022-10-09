import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import AddItems from './AddItems';
import SearchItems from './SearchItems';

function App() {
  

const[items,setItems] = useState(JSON.parse(localStorage.getItem("ShoppingItem"))||[])
const[newitem,setNewitem] = useState("")  ////referring state
const[search,SetSearch] = useState("")


useEffect(()=>{
  localStorage.setItem("ShoppingItem",JSON.stringify(items))
},[items])

const handleSubit = (e)=>{
  e.preventDefault()
  console.log("submited");
  if(!newitem) return
   console.log(newitem);
   addItems(newitem)
  setNewitem("")
}


const addItems = (item)=>{
   const id = items.length?items[items.length-1].id+1:1
   console.log(`thambi id is ${id}`);
   const mynewitem={id,checked:false,item}
   const listItems=[...items,mynewitem]
   setItems(listItems)
}


const handlecheck = (id)=>{
    const listItems = items.map(item => item.id==id?{...item,checked:!item.checked}:item) 
    setItems(listItems)
}

const handledelete = (id)=>{
    const listItems = items.filter(item=>item.id!==id)
    setItems(listItems)
}

  return (
    <div className="App">
      <Header title={"Groceries List"} />
      <AddItems newitem={newitem} setNewitem={setNewitem} handleSubit={handleSubit}></AddItems>
      <SearchItems search={search} SetSearch={SetSearch} ></SearchItems>
      <Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handlecheck={handlecheck}
      handledelete={handledelete} />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;