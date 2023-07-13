import { Link } from 'react-router-dom'
import './card.scss'

function Card({ id, cover, title}) {
  
  return (
    <li className='list-loft' key={id}>
        <img className='cover-loft' src={cover} alt="présentation du loft"></img>
        <Link 
        className='Link-Loft'
        to={`/loft/${id}`}>{title}</Link>
      </li>
  )
}
export default Card
