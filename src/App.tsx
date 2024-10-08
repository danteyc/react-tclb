import './App.css'
import { Card } from './components/Card'
import { Graphics } from './components/Graphics'
import { ButtonLogout } from './components/ButtonLogout'
import { UserProvider } from './context/userContext'
import { MoviesProvider } from './context/moviesContext'
import { Info } from './components/Info'

function App() {
  return (
    <UserProvider>
      <MoviesProvider>
        <Card/>
        <Graphics/>
        <ButtonLogout/>
        <Info/>
      </MoviesProvider>
    </UserProvider>  
  )
}

export default App
