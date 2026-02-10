import React from 'react'
import Macwindow from './macwindow'
import Ter from 'react-console-emulator'
import './terminal.scss'
const terminal = ({setWindowState,windowName}) => {
  return (
    <Macwindow setWindowState={setWindowState} windowName={windowName}>
        <div className="cli-window">
            <Ter 
        commands={{print: {
    description: 'print a passed string.',
    usage: 'print <string>',
    fn: (...args) => args.join(' ')
  },
   about: {
    description: 'Know more about me',
    usage: 'about',
    fn: () =>
      `Hi, I'm Lakshya 👋
Full Stack Developer specializing in MERN stack.
I love building scalable web apps and clean UIs.`,
  },

  skills: {
    description: 'List my technical skills',
    usage: 'skills',
    fn: () =>
      `Frontend: React, Next.js, Tailwind, SCSS
Backend: Node.js, Express
Database: MongoDB, PostgreSQL
Tools: Git, Docker, Linux`,
  },

  projects: {
    description: 'View my projects',
    usage: 'projects',
    fn: () =>
      `1. Portfolio Terminal 💻
2. E-commerce App 🛒
3. Chat Application 💬
4. Task Manager ✅`,
  },

  contact: {
    description: 'How to reach me',
    usage: 'contact',
    fn: () =>
      `Email: lakshya@email.com
GitHub: github.com/lakshya
LinkedIn: linkedin.com/in/lakshya`,
  }

}}
        welcomeMessage={'welcome to react terminal'}
        promptLabel={'lakshya:~$'}/>
        </div>
        
    </Macwindow>
  )
}

export default terminal
