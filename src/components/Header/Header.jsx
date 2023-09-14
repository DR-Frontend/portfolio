import logo from '../../assets/svg/imagotipo.svg'
import './header.css'

export default function Header(){
  return(
    <a href='#bio' className="logo">
      <img src={logo} alt="David Romero : Diseñador Frontend" />
    </a>
  )
}