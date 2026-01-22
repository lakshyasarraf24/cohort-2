import React, { useContext } from 'react'
import { Productdata } from '../context/Productcontext'
import { Link } from 'react-router-dom'


const Products = () => {
  let product=useContext(Productdata)
  return (
    <div>
      <h1>products</h1>
      <div className="cards">
        {product.map(function(elem,idx){
          return <Link key={elem.id} to={`/product/${elem.id}`}>
            <div className='cardata'>
              <img src={elem.image} className='productimg' alt="" />
              <h2>{elem.title}</h2>
            </div>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Products
