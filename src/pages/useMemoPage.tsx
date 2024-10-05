import { useEffect, useMemo, useState } from "react"
import { IPost } from "../interfaces/post.interfaces"

export const UseMemoPage = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [count, setCount] = useState(0)


  useEffect(() => {
    console.log("se ejecuta solo cuando se monta el componente")
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  // const formattedPosts = () => {
  //   console.log("se está formateando")
  //   return posts.filter(item => item.title.startsWith('n'))
  // }

  // const formatedPostsMemo = formattedPosts();

  const formatedPostsMemo = useMemo(() => {
    console.log("se está formateando")
    return posts.filter(item => item.title.startsWith('n'))
  }, [posts])
  

  return (
    <>
    <h1>UseMemoPage</h1>
    {/* <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
    {posts.map((item) => (
      <div className='card' key={item.id} style={{width: 200, border: '2px solid blue'}}>
        <h2>Title</h2>
        <p>{item.title}</p>
        <h2>Id</h2>
        <p>{item.id}</p>
      </div>
    ))}
    </div> */}
    {count}
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <br/>
    <select>
      {formatedPostsMemo.map(item => (
        <option key={item.id} value={item.id}>{item.title}</option>
      ))}
    </select>
    </>
  )
}