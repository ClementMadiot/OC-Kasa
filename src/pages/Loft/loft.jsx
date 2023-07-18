import { Data } from '../../datas/loft'

import Slider from './Slider'
import InfoLoft from './infoLoft'
import SelectLoft from './select'
import { useParams } from 'react-router-dom'
import './loft.scss'

function Loft() {
  const { id } = useParams()
  const currentLoft = Data.filter((rental) => rental.id === id)
  const currentTags = currentLoft[0].tags
  const currentTools = currentLoft[0].equipments
  const currentImg = currentLoft[0].pictures
  // console.log(currentImg);

  // console.log(currentLoft)

  return (
    <main>
      <section className="main-loft">
        <Slider img={currentImg}/>
        <section className="section-infos">
          <InfoLoft loft={currentLoft[0]} tag={currentTags} />
        </section>
        <SelectLoft loft={currentLoft[0]} tools={currentTools} />
      </section>
    </main>
  )
}

export default Loft
