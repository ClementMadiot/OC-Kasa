import './home.scss'
import { Data } from '../../datas/loft'
import Card from './card'

function Home() {
  return (
    <section className="main-home">
      <div className="mountain-div">
        <h1 className="title-home">Chez vous, partout et ailleurs</h1>
      </div>

      <section className="Containers-Cards">
        <ul className="list-cards">
          {Data.map(({ id, cover, title }) => (
            <div key={id} className="Card-Wrapper">
              <Card id={`${id}`} cover={cover} title={title} />
            </div>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Home