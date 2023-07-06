import './home.scss'
// import { Link } from 'react-router-dom'
import Card from './card'
import { loftList } from '../../datas/loft'

function Home() {
  // const coverLoft = loftList.reduce(
  //   (setCover, loft) =>
  //     setCover.includes(loft.cover) ? setCover : setCover.concat(loft.cover),
  //   []
  // )
  return (
    <section className="main-home">
      <div className="mountain-div">
        <h1 className="title-home">Chez vous, partout et ailleurs</h1>
      </div>
      <section className="Containers-Cards">
        <ul className='list-cards'>
          {loftList.map(({ id, cover, title }) => (
            <div key={id} className="Card-Wrapper">
              <Card id={id} cover={cover} title={title} />
            </div>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Home
