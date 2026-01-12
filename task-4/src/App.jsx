import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  
  const [user,setuser]=useState([])
async function getdata() {
  let response= await axios.get('https://picsum.photos/v2/list?page=2&limit=15')
  setuser(response.data)
  console.log(response.data)
  
}
  return (
   <>
   <button onClick={getdata}>getdata</button>
   <div className="maincard">
   {user.map(function(elem,idx){
    return <div style={{backgroundColor:`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)  })`}} className='card'>
      <h1>{elem.author}</h1>
      <img src={elem.download_url} alt="" />
    </div>
   })}
   </div>
   </>
  )
}

export default App
