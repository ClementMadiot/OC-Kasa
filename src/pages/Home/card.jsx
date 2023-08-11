import { Link } from 'react-router-dom'
import './card.scss'

function Card({ id, cover, title}) {
  
  return (
  <li className='list-loft' key={id}>
    <Link
    className='Link-Loft'
    to={`/loft/${id}`}>
      <img className='cover-loft' src={cover} alt="présentation du loft"></img>
      <p>{title}</p>
    </Link>
  </li>
  )
}
export default Card
