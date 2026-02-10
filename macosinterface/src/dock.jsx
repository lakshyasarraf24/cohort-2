import React from 'react'
import spotify from './spotify'
import terminal from './terminal'

const dock = ({windowState,setWindowState}) => {
  return (
    <footer className="dock-container">
        <div className="icon calender"><i class="ri-calendar-line"></i></div>
        <div className="icon github" onClick={()=>setWindowState(state=>({...state,github:!state.github}))}><i class="ri-github-line"></i></div>
        <div className="icon notes" onClick={()=>setWindowState(state=>({...state,note:!state.note}))}><i class="ri-sticky-note-line"></i></div>
        <div className="icon spotify" onClick={()=>setWindowState(state=>({...state,spotify:!state.spotify}))}><i class="ri-spotify-fill"></i></div>
        <div className="icon terminal" onClick={()=>setWindowState(state=>({...state,terminal:!state.terminal }))}><i class="ri-terminal-line"></i></div>
        <div className="icon link"><i class="ri-links-line"></i></div>
    </footer>
  )
}

export default dock
