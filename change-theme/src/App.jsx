import React, { useContext } from 'react'
import { ChangeTheme } from './changetheme'
const App = () => {
  const [data,setdata]=useContext(ChangeTheme)
  return (
    <div>
      <button onClick={()=>{
        if(data=='light'){
          setdata('dark')
        }
        else{
          setdata('light')
        }
      }}>click</button>
      <h1>{data}</h1>
    </div>
  )
}

export default App
