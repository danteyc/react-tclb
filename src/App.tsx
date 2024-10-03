import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header name='Patrick' lastName='Cuadros' age={"Alfonso"} />
      <div>
        Hola
      </div>
      <Footer />
    </>
  )
}

export default App
