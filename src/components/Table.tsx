import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Table = () => {
  const { user } = useContext(UserContext)


  return <div style={{background: 'blue', padding: 10}}>
    Table de Usuario {user}

  </div>
}