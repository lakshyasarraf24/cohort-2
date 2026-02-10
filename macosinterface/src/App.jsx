import React, { useState } from 'react'
import Dock from './dock'
import Nav from './nav'
import Github from './github'
import Note from './note'
import Spotify from './spotify'
import Terminal from './terminal'
import github from './github'
import spotify from './spotify'
import terminal from './terminal'
const App = () => {
  
    const [windowState,setWindowState]=useState({
      github:false,
      note:false,
      spotify:false,
      terminal:false
    })
  
  return (
   <main>
    <Nav />
    <Dock windowState={windowState} setWindowState={setWindowState}/>
    {windowState.note&&<Note setWindowState={setWindowState} windowName={"note"}/>}
    {windowState.github&&<Github setWindowState={setWindowState} windowName={"github"}/>}
    {windowState.spotify&&<Spotify setWindowState={setWindowState} windowName={"spotify"}/>}
    {windowState.terminal&&<Terminal setWindowState={setWindowState} windowName={"terminal"}/>}
     </main>
  )
}

export default App
