import { useState } from "react";

export const ExampleOnClick = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onClickEvent = () => {
    alert('Se ha hecho click en el botón');
    setIsVisible(!isVisible);
  }

  const onClickEventDiv = () => {
    alert('Se ha hecho click en el div');
  }

  return <div className="flex justify-center w-full h-full items-center gap-4">
    <button onClick={() => onClickEvent()} className="bg-blue-400 rounded-2xl w-52 p-2">Lanza una alerta cuando hay un click</button>
    <div onClick={() => onClickEventDiv()} className="bg-orange-300">Este es un div naranja</div>
    {isVisible && (
      <div className="bg-lime-300"> Se visualiza al hacer click en el botón</div>
    )}
  </div>
}