import logo from '../assets/LOGO Red.jpg'
import '../style/header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <main>
      <nav>
        <img className='Logo-Kasa' src={logo} alt="logo Kasa" />
        <ul className='nav-bar'>
          <li>
            <NavLink to='/' className={({isActive, isPending}) => 
          isPending ? 'pending' : isActive ? 'active' : ''
          } >Accueil</NavLink>
          </li>
          <li>
          <NavLink to='/about' className="Link-About">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </main>
)
}

export default Header;

