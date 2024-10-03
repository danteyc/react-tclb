interface HeaderProps{
  name: string,
  lastName: string,
  age: any
}

function Header({name, lastName, age} : HeaderProps){

  return(
    <header>
      <nav>
        Mi nombre es {name} <br/>
        Mi apellido es {lastName}<br/>
        Mi edad es {age}
      </nav>
    </header>
  )
}

export default Header;