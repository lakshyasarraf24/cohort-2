import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/product'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product/:id' element={<Product/>}/>
    </Routes>
  </div>  
  )
}

export default App
