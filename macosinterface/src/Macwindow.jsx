import React from 'react'
import {Rnd} from 'react-rnd'
import './window.scss'
const Macwindow = ({children,width="40vw",height='40vh',setWindowState,windowName}) => {
  return (
    <div>
      <Rnd default={{
        width:width,
        height:height,
        x:300,
        y:200
      }}>
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="red" onClick={()=>{setWindowState(state=>({...state,[windowName]:false}))}}></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                </div>
                <h4 className="title">Lakshya-zsh</h4>
            </div>
            <div className="main-content">{children}</div>
        </div>
      </Rnd>
    </div>
  )
}

export default Macwindow
