import { useState } from 'react'

import './App.css'

function App() {
  const[showpassword,setshowpassword]=useState(false)
  const[Password,setpassword]=useState("")

  const handlePassword=()=>{
    setshowpassword(prev=>!prev)
  }

  return (
    <>
<input type= {showpassword?'text':'password'} value={Password} placeholder='enter password'
onChange={(e)=>setpassword(e.target.value)}/>
<button onClick={handlePassword}>{showpassword?'hide':'show'}</button>
      
      
    </>
  )
}

export default App
