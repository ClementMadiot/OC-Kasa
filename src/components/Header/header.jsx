import logo from '../../assets/LOGO Red.jpg'
import './header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
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
    </header>
)
}

export default Header;

