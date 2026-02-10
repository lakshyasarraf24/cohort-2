import { createContext } from "react"

export const usercontext=createContext()
let val='hello world'
const context = (props) => {
  return (
  <usercontext.Provider value={val}>
    {props.children}
  </usercontext.Provider>
  )
}

export default context
