import React, { useState } from 'react'
import { useActionState } from 'react'


function submithandler(e){
  e.preventDefault()

}

const App = () => {
  const [num,setnum]=useState('')
  const [mail,setmail]=useState('')
  const [user,alluser]=useState('')
 return(
  <form onSubmit={(e)=>{
      submithandler(e)
      const olduser=[...user]
      olduser.push({num,mail})
      alluser(olduser)
      console.log(olduser)
      setnum('')
      setmail('')

      
    }}>
    <input className='border-black border-2 p-3 m-4' type="text" name="" id="" placeholder='Enter name' required req='true'
    value={num}
    onChange={(e)=>{
      setnum(e.target.value)
    }}
    />
    <input className='border-black border-2 p-3 m-4' type='email'  name="" id="" placeholder='Enter email' required req='true'
      value={mail}
      onChange={(e)=>{
        setmail(e.target.value)
      }
      }
    />

    <button  className='bg-gray-500 p-3'>submit</button>
  </form>
 )
  
}

export default App
