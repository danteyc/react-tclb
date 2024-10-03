import {Fragment, useState, FunctionComponent} from 'react'

export const Counter: FunctionComponent = () => {
  const [number, setNumber] = useState(100);

  const incrementar = () => {
    setNumber(number + 100);
    setNumber(prevValue => prevValue + 100);
  }
  
  return (
    <Fragment>
      <p style={{fontSize: 30}}>El número es {number}</p>
      <button onClick={() => incrementar()}>
        Incrementar
      </button>
    </Fragment>
  )
}