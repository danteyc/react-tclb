import { useEffect, useState } from "react";
import { Image } from "../components/Image";
import { IPost } from "../interfaces/post.interfaces";

export const UseEffectPage = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [posts, setPosts] = useState<IPost[]>([])
  const [isShow, setIsShow] = useState(false);

  // useEffect(() => {

  // },[]) // sin dependencias 

  // sin dependencias , en este caso se va a ejecutar solo cuando el componente se monta
  useEffect(() => {
    console.log("se ejecuta solo cuando se monta el componente")
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  // useEffect con dependencias - Actualización en ciclo de vida
  useEffect(() => {
    console.log("useEffect con dependencias")
  }, [name, count])

  return (
    <>
      <h1>UseEffect</h1>
      {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>
        Name: {name}
        <br/>

        <button onClick={() => setName("Carlos")}>Actualizar nombre a carlos</button>
      </p>
      {/* {isShow ? <Image/> : null} */}
      {isShow && <Image/>}
      <button onClick={() => setIsShow(!isShow)}>MOSTRAR/OCULTAR IMAGE</button>
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        {posts.map((item) => (
          <div className='card' key={item.id} style={{width: 200, border: '2px solid blue'}}>
            <h2>Title</h2>
            <p>{item.title}</p>
            <h2>Id</h2>
            <p>{item.id}</p>
          </div>
        ))}
      </div>
    </>)
}