import { useCounter } from "../hooks/useCounter"
import { useStatistics } from "../hooks/useStatistics"

export const Info = () => {
  const { counter, decrement, increment } = useCounter()
  const {impressions, likes} = useStatistics()

  return <div style={{marginTop: 20, border: "2px solid red"}}>
    <h2>Componente INFO</h2>
    Info de contador {counter}
    <button onClick={() => increment()}>Sumar</button>
    <button onClick={() => decrement()}>Restar</button>
    <br/>
    <ul>
      <li>Impresiones: {impressions}</li>
      <li>Likes: {likes}</li>
    </ul>
  </div>
}