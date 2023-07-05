import { Link } from 'react-router-dom'
import '../style/card.scss'

function Card() {
  return (
    <section className='Containers-Cards'>
      <div className='Card-Wrapper'>
        <Link to='/loft' className='Link-Loft'>Titre de la location</Link>
      </div>
      <div className='Card-Wrapper'>
        <Link className='Link-Loft' to='/loft'>Titre de la location</Link>
      </div>
      <div className='Card-Wrapper'>
        <Link className='Link-Loft' to='/loft'>Titre de la location</Link>
      </div>
      <div className='Card-Wrapper'>
        <Link className='Link-Loft' to='/loft'>Titre de la location</Link>
      </div>
      <div className='Card-Wrapper'>
        <Link className='Link-Loft' to='/loft'>Titre de la location</Link>
      </div>
      <div className='Card-Wrapper'>
        <Link className='Link-Loft' to='/loft'>Titre de la location</Link>
      </div>
    </section>
  )
}

export default Card
