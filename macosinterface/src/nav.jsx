import React, { useEffect, useState } from 'react'

const nav = () => {
const [date,setdate]=useState("")
useEffect(()=>{
    const updatetime=()=>{
    let now=Date().toString().split(" ")
    let t=new Date()
    let weekday=now[0]
    let month=now[1]
    let currdate=t.getDate()
    let hours=(t.getHours()%12||12).toString().padStart(2,"0")
    let minutes=(t.getMinutes().toString().padStart(2,"0"))
    let ampm=t.getHours()>=12?"PM":"AM"
    setdate(`${weekday} ${currdate} ${hours}:${minutes} ${ampm}`)
}
setInterval(() => {
    updatetime()
}, 1000);

})
  return (
    <nav>
        <div className="left">
            <p className='apple-logo'><i class="ri-apple-fill"></i></p>
            <p>Lakshya Sarraf</p>
            <p>File</p>
            <p>Window</p>
            <p>Terminal</p>
        </div>
        <div className="right">
            <p className='date'>{date}</p>
        </div>
    </nav>
  )
}

export default nav
