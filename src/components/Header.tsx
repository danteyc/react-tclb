import { FunctionComponent } from "react";

//arrow functions o funciones flecha
interface IHeader{
  title?: string;
}

export const Header: FunctionComponent<IHeader> = ({title = "Título de proyecto"}) => {
  return <div>
    {title}
  </div>
}