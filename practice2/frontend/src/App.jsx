import React, { use, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {

   const [note,setnote]=useState([])
   const [maketitle,setmakeTitle]=useState('')
   const [makedescription,setmakedescription]=useState('')
   function fetchnotes(){
    axios.get('http://localhost:4000/note')
  .then((res)=>{setnote(res.data.notes)})
   }
   useEffect(()=>{
    console.log('hello')
    fetchnotes()
   },[])
   function formhandler(e){
    e.preventDefault()
    const {title,description}=e.target.elements
    axios.post('http://localhost:4000/note',{title:title.value,description:description.value})
    .then(res=>{console.log(res.data)
       fetchnotes()
    })
   
  
   }
   function deletenotehandler(idx){
     axios.delete('http://localhost:4000/note/'+idx)
     .then(res=>{
      console.log(res.data)
      fetchnotes()
     })
    }
   function getupdate(idx){
      axios.get(`http://localhost:4000/note/`)
      .then((res)=>{
        let  found=res.data.notes.find(obj=>obj._id===idx)
        setmakeTitle(found.title)
        setmakedescription(found.description)

        
      })
      
    }
    function setupdate(idx){
      axios.patch(
    `http://localhost:4000/note/${idx}`,
    {
      title: maketitle,
      description: makedescription
    }
  )
  .then(() => {
    fetchnotes();
  })
    }
   
  return (
    <>
      <form onSubmit={formhandler}>
        <input type="text" id='title' placeholder='Enter title' required value={maketitle} onChange={(e)=>{setmakeTitle(e.target.value)}} />
        <input type="text"  id='description' placeholder='Enter description' required value={makedescription} onChange={(e)=>{setmakedescription(e.target.value)}}/>
        <button>submit</button>
      </form>
   <div className='parent'>
  {note.map(function(elem,key){
    return (
      <div className="card">
        <h1>{elem.title}</h1>
        <p>{elem.description}</p>
        <button onClick={()=>{deletenotehandler(elem._id)}}>delete</button>
        <button onClick={()=>{getupdate(elem._id)}}>update</button>
        <button onClick={()=>{setupdate(elem._id)}}>confirm</button>
        
      </div>
    )
  })}
   </div>
   </>
  )
}

export default App
