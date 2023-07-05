import { useState } from 'react'
import '../style/about.scss'

function About() {
  const [isFlabiliteOpen, setIsFlabiliteOpen] = useState(false)
  const [isRespectOpen, setIsRespectOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSecurityOpen, setIsSecurityOpen] = useState(false)

  const toggleFlabiliteSelect = () => {
    setIsFlabiliteOpen(!isFlabiliteOpen)
  }

  const toggleRespectOPen = () => {
    setIsRespectOpen(!isRespectOpen)
  }

  const toggleServicesOpen = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const toggleSecurityOpen = () => {
    setIsSecurityOpen(!isSecurityOpen)
  }
  return (
    <section className="main-about">
      <div className="mountain-forest"></div>

      <article className="select-container">
        <div className={`select ${isFlabiliteOpen ? 'open' : ''}`}>
          <div className="select-header" onClick={toggleFlabiliteSelect}>
            Flabilité
            <span className="arrow">{isFlabiliteOpen ? '▲' : '▼'}</span>
          </div>
          {isFlabiliteOpen && (
            <div className="select-content">
              <p className="text">
                Les annonces postées sur Kasan garantissent une fiabilité
                totale. Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes
              </p>
            </div>
          )}
        </div>
      </article>

      <article className="select-container">
        <div className={`select ${isRespectOpen ? 'open' : ''}`}>
          <div className="select-header" onClick={toggleRespectOPen}>
            Respect
            <span className="arrow">{isRespectOpen ? '▲' : '▼'}</span>
          </div>
          {isRespectOpen && (
            <div className="select-content">
              <p className="text">
                La bienveillance fait partie des valeurs fondatrices de
                Kasa.Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          )}
        </div>
      </article>

      <article className="select-container">
        <div className={`select ${isServicesOpen ? 'open' : ''}`}>
          <div className="select-header" onClick={toggleServicesOpen}>
            Services
            <span className="arrow">{isServicesOpen ? '▲' : '▼'}</span>
          </div>
          {isServicesOpen && (
            <div className="select-content">
              <p className="text">
                La bienveillance fait partie des valeurs fondatrices de
                Kasa. Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          )}
        </div>
      </article>

      <article className="select-container">
        <div className={`select ${isSecurityOpen ? 'open' : ''}`}>
          <div className="select-header" onClick={toggleSecurityOpen}>
            Sécurité
            <span className="arrow">{isSecurityOpen ? '▲' : '▼'}</span>
          </div>
          {isSecurityOpen && (
            <div className="select-content">
              <p className="text">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que le standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
              </p>
            </div>
          )}
        </div>
      </article>
    </section>
  )
}

export default About
