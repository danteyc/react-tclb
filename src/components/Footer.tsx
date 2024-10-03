// generate a footer react tsx with some props
import { FunctionComponent } from "react"

interface IFooter{
  titleFooter: string,
  company: string
}

export const Footer: FunctionComponent<IFooter> = ({titleFooter, company}) => {
  return <footer style={{display: 'flex', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10, alignItems: 'center'}}>
    <h2>{titleFooter}</h2>
    <p>© {company}</p>
  </footer>
}