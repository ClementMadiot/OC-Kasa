import { useState } from 'react'
import './loft.scss'

function SelectLoft() {
  const [isDescriptioneOpen, setIsFDescriptionOpen] = useState(false)
  const [isToolsOpen, setIsToolsOpen] = useState(false)

  const toggleDescriptionSelect = () => {
    setIsFDescriptionOpen(!isDescriptioneOpen)
  }
  const toggleToolsSelect = () => {
    setIsToolsOpen(!isToolsOpen)
  }
  return(
    <section className='section-description'>
          <article className='btn-select'>
            <div>
              <div className={`select ${isDescriptioneOpen ? 'open' : ''}`}>
                <div className="select-loft" onClick={toggleDescriptionSelect}>
                  Description
                  <span className="arrow">{isDescriptioneOpen ? '▲' : '▼'}</span>
                </div>
                {isDescriptioneOpen && (
                  <div className="select-content">
                    <p className="text">
                      Vous serez à 50m du Canal Saint-martin où vous pourrez
                      pique-niquer l'été et à côté de nombreux bars et restaurants. Au
                      coeur de Paris avec 5 lignes de métro et de nombreux bus.
                      Logement parfait pour les voyageurs en solo ewt les voyageurs
                      d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes
                      à pied)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
          <article className='btn-select margin'>
            <div>
                <div className={`select ${isToolsOpen ? 'open' : ''}`}>
                  <div className="select-loft" onClick={toggleToolsSelect}>
                    Équipement
                    <span className="arrow">{isToolsOpen ? '▲' : '▼'}</span>
                  </div>
                  {isToolsOpen && (
                    <div className="select-content">
                      <ul className="text all-tools">
                        <li>Climatisation</li>
                        <li>Wi-fi</li>
                        <li>Cuisine</li>
                        <li>Espade de travail</li>
                        <li>Fer à repasser</li>
                        <li>Sèche-cheveux</li>
                        <li>Cintres</li>
                      </ul>
                    </div>
                  )}
                </div>
            </div>
          </article>
        </section>
  )
}
export default SelectLoft