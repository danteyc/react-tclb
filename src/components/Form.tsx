import { ChangeEvent, useState } from "react"

export const Form = () => {
  const [data, setData] = useState({
    city: "",
    country: ""
  })

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const newValue = e.target.value
    setData(prevValue => ({
      ...prevValue,
      [name]: newValue
    }))
  }

  return (
    <form style={{backgroundColor: "black", display: 'flex', gap: 16, padding: 16}}>
      <input type="text" placeholder="Ciudad" value={data.city} onChange={(e) => onChangeForm(e, "city")} />
      <input type="text" placeholder="País" value={data.country} onChange={(e) => onChangeForm(e, "country")}/>
      <button type="submit">Enviar</button>
     </form>
  )
}