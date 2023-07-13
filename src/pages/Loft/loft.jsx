import { Data } from '../../datas/loft'
import Caroussel from '../../assets/Carrousel.png'
import InfoLoft from './infoLoft'
import SelectLoft from './select'
import { useParams } from 'react-router-dom'

import './loft.scss'
function Loft() {
  const { id } = useParams()
  const currentLoft = Data.filter((rental) => rental.id === id)
  const currentTags = currentLoft[0].tags
  const currentTools = currentLoft[0].equipments


  // console.log(currentTags)

  return (
    <main>
      <section className="main-loft">
        <div className="Caroussel-Container">
          <img
            className="Caroussel-Desktop"
            src={Caroussel}
            alt="Maison d'hôte"
          />
        </div>

        <section className="section-infos">
          <InfoLoft loft={currentLoft[0]} tag={currentTags} />
        </section>
        <SelectLoft loft={currentLoft[0]} tools={currentTools} />
      </section>
    </main>
  )
}

export default Loft
