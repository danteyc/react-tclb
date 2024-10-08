import { FunctionComponent, useContext } from "react"
import { Table } from "./Table"
import { UserContext } from "../context/userContext"
import { useStatistics } from '../hooks/useStatistics';


export const Card: FunctionComponent = () => {
  const { user } = useContext(UserContext)
  const {impressions, likes } = useStatistics()

  return <div style={{background: 'red', color: 'white', padding: 20}}>
    Este es un card de {user}
    
    <Table/>
    <p> Las impresiones son {impressions}</p>
    <p> Los likes son {likes}</p>
  </div>
}