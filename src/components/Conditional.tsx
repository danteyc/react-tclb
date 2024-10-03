import { FunctionComponent, useState } from "react";


export const Conditional: FunctionComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => {
    // false or true
    setShow(!show);
  }

  return (
    <div style={{fontSize: 35}}>
      <button onClick={() => handleShow()}>Mostrar / Ocultar</button>
      {show ? (
        <div>
          Con imagen
        </div>
      ): (
        <div>Sin imagen</div>
      )}
    </div>
  );
};
