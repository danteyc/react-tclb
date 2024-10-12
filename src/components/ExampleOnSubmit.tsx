
export const ExampleOnSubmit = () => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = new FormData(e.target as HTMLFormElement);
    console.log("values", Object.fromEntries(values));
  }

  return <div className="flex justify-center w-full h-full items-center gap-4">
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input name="DNI" type="text" placeholder="Soy un input"/>
      <select name="Ciudad">
        <option value="lima">Lima</option>
        <option value="arequipa">Arequipa</option>
        <option value="trujillo">Trujillo</option>
      </select>
      <textarea name="informacion" placeholder="Soy un textarea"/>
      <button id="buttonSubmit" className="bg-blue-500 hover:bg-blue-800" type="submit">Enviar formulario</button>
    </form>
  </div>
}