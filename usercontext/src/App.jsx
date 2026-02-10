import React, { useContext } from 'react'
import { usercontext } from './context/context'

const App = () => {
  let a=useContext(usercontext)
  return (
    <div>
      <h1>{a}</h1>
    </div>
  )
}

export default App
