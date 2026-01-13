import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user,setuser]=useState('')
  const [num,setnum]=useState(0)
  let loaddata= async()=>{
    let response= await axios.get('https://randomuser.me/api/')
    setuser(response.data.results[0].name.first)
    
  }
  useEffect(function(){
    loaddata()
  },[num])
  return (
    <div>
      {user}
    <h1>{num}</h1>
    <button onClick={()=>{
      setnum(num+1)
    }}>click</button>
    </div>
  )
}

export default App
