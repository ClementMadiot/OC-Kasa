import { Link } from 'react-router-dom'
import './card.scss'

function Card({ id, cover, title}) {
  
  return (
    <Link
    className='Link-Loft'
    to={`/loft/${id}`}>
    <li className='list-loft' key={id}>
      <img className='cover-loft' src={cover} alt="présentation du loft"></img>
      <p>{title}</p>
    </li>
    </Link>
  )
}
export default Card
