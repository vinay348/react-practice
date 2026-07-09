import { useState, useEffect } from 'react'
import './App.css'



function App() {

  const [user,setUser]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,seterror]=useState(null)
  

  useEffect(() => {
    fetchData()
  }, [])
  
  async function fetchData() {
    try{
    const url = "https://jsonplaceholder.typicode.com/userszzz/"
    const data = await fetch(url)
    if (!data.ok) {
      throw new Error("No data from the api")

    }
    const result = await data.json()
    console.log(result)
    setUser(result)
  }
  catch (err){
    console.log("something went wrong",err.message)
    seterror(err.message)
    setLoading(false)
  }
  finally{
    setLoading(false)
        

  }

  }

  return (
    <>
         <>
      {loading ? (
        <>Loading</>
      ) : error ? (
        <div style={{ color: "red" }}>Error: {error}</div>
      ) : (
        user.map((u, i) => <div key={u.id || i}>{u.name}</div>)
      )}
    </>
  


    </>
  )
}

export default App
