import React from 'react'
import Macwindow from './macwindow'
import githubdata from './github.json'
import './github.scss'
const github = ({setWindowState,windowName}) => {
  return (
    <Macwindow setWindowState={setWindowState} windowName={windowName}> 
        <div className="cards">
            {githubdata.map((elem)=>{
                return <div className="card">
                    <img src={elem.image_link} alt="" />
                    <h2>{elem.title}</h2>
                    <h4>{elem.description}</h4>
                    <div className="tags">
                        {elem.tags.map((e)=>{
                            return <p className='tag'>{e}</p>
                        })}
                    </div>
                </div>
            })}
        </div>
    </Macwindow>
  )
}

export default github
