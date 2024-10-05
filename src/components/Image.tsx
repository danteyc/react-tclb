import { useEffect } from "react";

export const Image = () => {


  // Use effect ... cuando el componente se desmonte
  useEffect(() => {
    console.log("COMPONENTE IMAGE SE HA MONTADO")

    return () => {
      console.log("COMPONENTE IMAGE SE HA DESMONTADO");
    }
  }, [])

  return (
    <div style={{border: '2px solid red', padding: 10}}>
      <p>Componente IMAGE</p>
      <img width={300} src="https://kinsta.com/es/wp-content/uploads/sites/8/2023/04/react-must-be-in-scope-when-using-jsx.jpg" alt="" />
    </div>
  )
}