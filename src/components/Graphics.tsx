import { useContext, useEffect } from "react"
import { UserContext } from "../context/userContext"

export const Graphics = () => {
  const { user, login } = useContext(UserContext)

  // useEffect(() => {
  //   console.log("se ejecuta cuando se monta el componente Graphics")
  //   setTimeout(() => {
  //     login("Carlos")
  //   }, 1500)
  // }, [])

  const saveInfoUser = () => {
    login("Carlos")
    localStorage.setItem("user", "Carlos")
  }

  return <div style={{backgroundColor: 'green', padding: 15}}>
   Componente Gráfico de {user}
   <br/>
   <button onClick={() => saveInfoUser()}>Setear Carlos</button>
  </div>
}