export const ExampleOnChange = () => {


  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e from Input", e.target.value);
  }

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("e from Select", e.target.value);
  }

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("e from Textarea", e.target.value);
  }

  return <div className="flex bg-red-500 justify-center w-full h-full items-center gap-4">
    <form className="flex flex-col gap-4">
      <input onChange={(e) => onChangeInput(e)} type="text" placeholder="Soy un input"/>
      <select onChange={(e) => onChangeSelect(e)}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <textarea onChange={(e) => onChangeTextArea(e)} placeholder="Soy un textarea"/>
    </form>
  </div>
}