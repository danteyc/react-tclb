import React, { useState } from 'react'

export const ExampleOnKey = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("e from Input", e.key);
    if(e.key === 'Escape'){
      setIsVisible(false);
    }
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("e from Input", e.key);
  }
  
  return (
    <div className="flex h-[1400px] justify-center w-full items-center gap-4" >
    <div>ExampleOnKey</div>
    {isVisible && (
      <input onKeyDown={(e) => handleKeyDown(e)} onKeyUp={(e) => handleKeyUp(e)}  placeholder='Campo de texto'/>
    )}
    </div>
  )
}
