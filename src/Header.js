import logo from './images/logo.svg'

export default function Header() {
  return(
    <header className="header">
      <img className="header__img" src={logo} alt="Airbnb logo" />
    </header>
  )
}