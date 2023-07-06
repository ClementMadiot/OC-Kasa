// import { loftList } from '../../datas/loft'
import Caroussel from '../../assets/Carrousel.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './loft.scss'
import SelectLoft from './select'

function Loft() {

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
          <div className="info-loft">
            <h1 className="title-loft">Cozy loft on the Canal Saint-Martin</h1>
            <p className="place-loft">Paris, Île-de-France</p>
            <div className="all-btn-infos">
              <button className="btn-info">Cozy</button>
              <button className="btn-info">Canal</button>
              <button className="btn-info">Paris 10</button>
            </div>
          </div>

          <article className='section-host'>
            <div className="Host-stuff">
              <p className="host-name">Alexandre Dumas</p>
              <div className="host-face"></div>
            </div>
            <div className="stars-container">
              <FontAwesomeIcon className="star-red" icon={faStar} />
              <FontAwesomeIcon className="star-red" icon={faStar} />
              <FontAwesomeIcon className="star-red" icon={faStar} />
              <FontAwesomeIcon className="star-gray" icon={faStar} />
              <FontAwesomeIcon className="star-gray" icon={faStar} />
            </div>
          </article>
        </section>
        <SelectLoft/>
      </section>
    </main>
  )
}

export default Loft
