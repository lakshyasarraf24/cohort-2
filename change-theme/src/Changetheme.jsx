import React, { createContext, useState } from 'react'

export const ChangeTheme=createContext()
const Changetheme = (props) => {
    const [data,setdata]=useState('light')
  return (
    <div>
     <ChangeTheme.Provider value={[data,setdata]}>
        {props.children}
     </ChangeTheme.Provider>
    </div>
  )
}

export default Changetheme
