import './home.scss'
import Card from './card'
import { Data } from '../../datas/loft'

function Home() {

  return (
    <section className="main-home">
      <div className="mountain-div">
        <h1 className="title-home">Chez vous, partout et ailleurs</h1>
      </div>

      <section className="Containers-Cards">
        <ul className='list-cards'>
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

// const [selectedLogement, setSelectedLogement] = useState(null)
// const filteredList = Data.filter((loft) =>
// selectedLogement ? loft.id === selectedLogement : true
// )
// const handleLogementClick = (filteredList) => {
//   setSelectedLogement(filteredList[0])
// }

// console.log(filteredList[0])

// if(filteredList.length > 0) {
  //   const selectedLogement = filteredList[0];
  // }
  // const currentLoft = Data.filter((Data) => Data.id)