import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Products from './Products'
const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
      <h1>home page</h1>
      <button onClick={()=>{
        navigate('/Products')
      }}>explore courses</button>
    </div>
  )
}

export default Home
