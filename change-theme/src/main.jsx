import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Changetheme from './changetheme.jsx'

createRoot(document.getElementById('root')).render(
 <Changetheme>
  <App/>
 </Changetheme>
)
