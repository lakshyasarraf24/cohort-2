import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export let Productdata=createContext()
const Productcontext = (props) => {
const [data,setdata]=useState([]) 
async function getdata() {
    let maindata=await axios.get('https://fakestoreapi.com/products')
    setdata(maindata.data)
}

useEffect(function(){
  getdata()
},[])
  return (
    <Productdata.Provider value={data}>
      {props.children}
    </Productdata.Provider>
  )
}

export default Productcontext
