
export interface User{
  name: string,
  lastName: string,
  age: number,
  address: string,
  dni: string,
  phone: string,
  email: string,
  university: string,
}

export interface Admin{
  name: string,
  lastName: string,
  age: number,
  address: string,
  dni: string,
  phone: string,
  email: string,
  job: string,
}

export interface HeaderProps{
  user: User[],
  isValid: boolean,
  admin: Admin
}
