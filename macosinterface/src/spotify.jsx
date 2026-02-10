import React from 'react'
import Macwindow from './macwindow'
import './spotify.scss'
const spotify = ({setWindowState,windowName}) => {
  return (
    <Macwindow width='25vw' height='30vh' setWindowState={setWindowState} windowName={windowName}>
        <div className="spotifywindow">
            <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/7H5Ddm0n6n5oLNgL6qVn55?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </Macwindow>
  )
}

export default spotify
