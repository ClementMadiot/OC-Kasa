import { Data } from '../../datas/loft'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Slider from '../../components/Slider/slider.jsx'
import { Loader } from '../../components/Loader/loader'
import InfoLoft from './infoLoft'
import SelectLoft from '../../components/Select/select.jsx'
import './loft.scss'

function Loft() {
  const { id } = useParams()
  const navigate = useNavigate()

  const currentLoft = Data.filter((rental) => rental.id === id)
  let currentTags
  let currentTools
  let currentImg
  // console.log(currentLoft)
  if (currentLoft.length > 0) {
    currentTags = currentLoft[0].tags
    currentTools = currentLoft[0].equipments
    currentImg = currentLoft[0].pictures
  }
  useEffect(() => {
    if (currentLoft.length === 0) {
      navigate('/404')
    }
  })

  return (
    <main>
      {currentLoft.length === 0 ? (
        <Loader />
      ) : (
        <section className="main-loft">
          <Slider img={currentImg} />
          <section className="section-infos">
            <InfoLoft loft={currentLoft[0]} tag={currentTags} />
          </section>
          <SelectLoft loft={currentLoft[0]} tools={currentTools} />
        </section>
      )}
    </main>
  )
}

export default Loft
