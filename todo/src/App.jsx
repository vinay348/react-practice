import { useState } from 'react'

import './App.css'

function App() {
  const[data,setData]=useState([])
  const[text,setText]=useState("")
  const[editindex,setEditIndex]=useState(null)
  const handleAdd=()=>{
    if(editindex!=null)
    {
      setData(prev=> prev.map((item,idx)=>idx===editindex ? text:item))
      setEditIndex(null)
    }
    else{

setData(prev=>[...prev,text])
    }
setText("")
  }

  const handleDelete=(value)=>{
    const filteredArray = data.filter((item) => item !== value)
    setData(filteredArray)
  }

  const handleEdit=(i)=>{
   setText(data[i])
   setEditIndex(i)

  }

  return (
    <>
    <div>
     <label htmlFor="todo-input">Enter Data:</label> <input type="text" id="todo-input" value={text} onChange={(e)=>setText(e.target.value)} />


     <button onClick={handleAdd}>Add</button>


     
    {data.map((value,i)=>(
     <li key={i}>{value}
     <button onClick={() => handleDelete(value)}>Delete</button>
     <button onClick={()=>handleEdit(i)}>Edit</button></li>
    ))}
    </div>
 
    </>
  )
}

export default App
