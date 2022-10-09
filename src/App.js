import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import AddItems from './AddItems';
import SearchItems from './SearchItems';

function App() {
  const APP_URL="http://localhost:3500/items"

const[items,setItems] = useState([])
const[newitem,setNewitem] = useState("")  ////referring state
const[search,SetSearch] = useState("")
const[error,setFetchError] = useState(null)


useEffect(()=>{

  const fetchitems = async ()=>{
    try{
    const response = await fetch(APP_URL)
    if (!response.ok) throw Error("did not get data")
    const listItems = await response.json()
    console.log(listItems);
    setItems(listItems)
    setFetchError(null)
    }catch(err){
      setFetchError(err.message)
    }
  }
  
  setTimeout(()=>{
    (async()=>await fetchitems())()
  },2000)


  
  
},[])

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
      <main>
      {error&&<p style={{color:"red"}}>{`Error:${error}`}</p>}
      {!error&&<Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}     //////fragments adukku in content 
      handlecheck={handlecheck}
      handledelete={handledelete} />}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;