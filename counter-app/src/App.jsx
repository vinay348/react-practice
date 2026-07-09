
import './App.css'
import {useState} from "react"

function App() {

  const [count,setCount]=useState(0)

  console.log(count)

  return (
    <>
    <div>
      <div>{count}</div>
      <button onClick={()=>setCount(prev=>Math.min(100,prev+1))}>Increment</button>
          <button onClick={()=>setCount(prev=>Math.max(0,prev-1))}>Decrement</button>

    </div>

  
    </>
  )
}

export default App
