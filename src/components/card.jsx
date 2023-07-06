import { Link } from 'react-router-dom'
import { loftList } from '../datas/loft'
import '../style/card.scss'

function Card({ id, cover, title}) {

  return (
      <li className='list-loft' key={id}>
        <img className='cover-loft' src={cover} alt="présentation du loft"></img>
        <Link className='Link-Loft' to='/loft'>{title}</Link>
      </li>

      /* <ul>
        {coverLoft.map((loft) => (
          <li key={loft.id}>{loft.title}</li>
        ))}
      </ul> */
  )
}

export default Card
