import { useState } from "react";

export const ExampleOnMouse = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div className="flex justify-start flex-col w-full h-[500px] items-center gap-4">
      <button onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} className="bg-red-500 p-4 text-white rounded-2xl">
        {isHovered ? 'Estoy haciendo hover' : 'Hazme hover'}
      </button>

      {isHovered && (
        <div className="bg-blue-500 text-white p-4 rounded-2xl">
          Se visualiza al hacer hover en el botón
        </div>
      )}
    </div>
  )
}