import { createContext, useState } from "react";

export interface IMoviesContext{
  list: string[],
  updateMovies: (movies: string[]) => void
}

export const MoviesContext = createContext<IMoviesContext>({
  list: [],
  updateMovies: () => {}
})

interface IMoviesProvider{
  children: React.ReactNode
}

export const MoviesProvider = ({children}: IMoviesProvider) => {
  const [list, setList] = useState<string[]>([]);



  const updateMovies = (movies: string[]) => {
    setList(movies)
  }

  const data = {list, updateMovies}

  return (
    <MoviesContext.Provider value={data}>
      {children}
    </MoviesContext.Provider>)
}