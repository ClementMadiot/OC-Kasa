import '../style/home.scss'
// import { Link } from 'react-router-dom'
import Card from '../components/card'


function Home() {
  return (
      <section className='main-home'>
        <div className='mountain-div'>
          <h1 className='title-home'>Chez vous, partout et ailleurs</h1>
        </div>
          <Card/>
      </section>
  )
}

export default Home
