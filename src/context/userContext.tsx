import { createContext, useState } from "react";

export interface IUserContext{
  user: string,
  login: (name: string) => void,
  logout: () => void,
}

export const UserContext = createContext<IUserContext>({
  user: "",
  login: () => {},
  logout: () => {},
})

interface IUserProvider{
  children: React.ReactNode
}

export const UserProvider = ({children}: IUserProvider) => {
  const userFromStorage = localStorage.getItem("user");
  const [user, setUser] = useState<string>(userFromStorage || "Anónimo");

  const login = (name: string) => {
    setUser(name);
  }

  const logout = () => {
    setUser("Anónimo");
  }

  const data = {user, login, logout}

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>)
}