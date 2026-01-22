import React, { use, useContext, useState } from 'react'
import { Productdata } from '../context/Productcontext'
import { useParams } from 'react-router-dom'

const product = () => {
    const data=useContext(Productdata)
    let {id}=useParams()
    let current=data[id-1]
    if(!current){
        return (
    <h1>loading</h1>
  )
    }
    else{
        return <div className='cardata'>
              <img src={current.image} className='productimg' alt="" />
              <h2>{current.title}</h2>
              <h2>{current.price    }</h2>
            </div>
    }
    
  
}

export default product
