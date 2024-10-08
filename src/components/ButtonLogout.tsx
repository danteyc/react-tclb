import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const ButtonLogout = ()=> {
  const { logout } = useContext(UserContext)
  return <button style={{background: 'red' , padding: 10, marginTop: 16}} onClick={() => logout()}>
    Cerrar sesión
  </button>
}