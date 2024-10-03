import { FunctionComponent } from "react"

interface IHeader{
  title: string,
  subtitle?: string
}
export const Header: FunctionComponent<IHeader> = ({title, subtitle = "Subtítulo por defecto"}) => {
  return <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10, alignItems: 'center'}}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
}