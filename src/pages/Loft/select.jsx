import { useState } from 'react'
import './select.scss'

function SelectLoft({ loft, tools }) {
  const [isDescriptioneOpen, setIsFDescriptionOpen] = useState(false)
  const [isToolsOpen, setIsToolsOpen] = useState(false)

  const toggleDescriptionSelect = () => {
    setIsFDescriptionOpen(!isDescriptioneOpen)
  }
  const toggleToolsSelect = () => {
    setIsToolsOpen(!isToolsOpen)
  }
  return (
    <section className="section-description">
      <article className="btn-select">
        <div>
          <div className={`select ${isDescriptioneOpen ? 'open' : ''}`}>
            <div className="select-loft" onClick={toggleDescriptionSelect}>
              Description
              <span className="arrow">{isDescriptioneOpen ? '▲' : '▼'}</span>
            </div>
            {isDescriptioneOpen && (
              <div className="select-content">
                <p className="text">
                  {loft.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
      <article className="btn-select margin">
        <div>
          <div className={`select ${isToolsOpen ? 'open' : ''}`}>
            <div className="select-loft" onClick={toggleToolsSelect}>
              Équipement
              <span className="arrow">{isToolsOpen ? '▲' : '▼'}</span>
            </div>
            {isToolsOpen && (
              <div className="select-content">
                <ul className="text all-tools">
              {tools.map((Val) => (
                <li key={Val}>{Val}</li>
              ))}
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
