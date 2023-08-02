import { Data } from '../../datas/loft'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Slider from '../../components/Slider/slider.jsx'
import { Loader } from '../../components/Loader/loader'
import InfoLoft from './infoLoft'
import Collapse from '../../components/Collapse/collapse'
import './loft.scss'

function Loft() {
  const { id } = useParams()
  const navigate = useNavigate()

  const currentLoft = Data.filter((rental) => rental.id === id)
  let currentTags
  let currentTools
  let currentImg
  let currentEquip
  // console.log(currentLoft)
  if (currentLoft.length > 0) {
    currentTags = currentLoft[0].tags
    currentTools = currentLoft[0].equipments
    currentImg = currentLoft[0].pictures
    currentEquip = currentTools.map((Val) => (
      <li key={Val}>{Val}</li>
    ))
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
          <section className="section-description">
            <article className="btn-select margin-right">
              <Collapse title="Description" text={currentLoft[0].description} />
            </article>
            <article className="btn-select">
              <Collapse title="Équipement" text={currentEquip} />
            </article>
          </section>
        </section>
      )}
    </main>
  )
}

export default Loft
