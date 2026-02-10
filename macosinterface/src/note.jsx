import React, { useEffect, useState } from 'react'
import Macwindow from './macwindow'
import markdown from 'react-markdown'
import Markdown from 'react-markdown'
import './note.scss'
const note = ({setWindowState,windowName}) => {
    const [text,setText]=useState(null)
   useEffect(()=>{
     fetch('/note.md')
            .then(res=>res.text())
            .then(data=>setText(data))
   },[])
  return (
    <Macwindow setWindowState={setWindowState} windowName={windowName}>
        <div className='nts'>{text?<Markdown>{text}</Markdown>:<p>Loading...</p>}</div>
    </Macwindow>
  )
}

export default note
