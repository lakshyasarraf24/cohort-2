import React from 'react'
import { useState } from 'react'

const App = () => {
    const [name,setname]=useState("")
    const [link,setlink]=useState("")
    const [designation,setdesignation]=useState("")
    const [description,setdescription]=useState("")
    const [user,setuser]=useState([])
    function preventdefault(e){
        e.preventDefault()
        let oldval=[...user]
        oldval.push({name,link,designation,description})
        setuser(oldval)
        console.log(oldval);
        setname('')
        setlink('')
        setdesignation('')
        setdescription('')

    }
    function removeuser(idx){
        let copyuser=[...user]
        copyuser.splice(idx,1)
        setuser(copyuser)
    }
  return (
    <div className='parent'>
      <form onSubmit={(e)=>{
        preventdefault(e)
      }}>
        <input type="text" 
        placeholder='Enter name' 
        value={name}
        onChange={(e)=>{
            setname(e.target.value)
            
        }}
        />
        <input type="text" 
        placeholder='Enter link'
        value={link}
        onChange={(e)=>{
            setlink(e.target.value) 
        }}
        />
        <input type="text" 
        placeholder='Enter designation'
         value={designation}
        onChange={(e)=>{
            setdesignation(e.target.value)
        }}
        />
        <input type="text" 
        placeholder='Enter description' 
        value={description}
        onChange={(e)=>{
            setdescription(e.target.value)
            
        }}/>
        <button>Submit</button>
      </form>
      <div className="cards">
        {user.map(function(elem,idx){
            return(
                <div className="card">
            <img src={elem.link} alt="" />
            <h1>{elem.name}</h1>
            <h2>{elem.designation}</h2>
            <h4>{elem.description}</h4>
            <button onClick={()=>{
                removeuser(idx)
            }}
            >remove</button>
        </div>
            )
        })}
      </div>
    </div>
  )
}

export default App
