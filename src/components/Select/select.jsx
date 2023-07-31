import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './select.scss'

function SelectLoft({ loft, tools }) {
  const [isDescriptioneOpen, setIsFDescriptionOpen] = useState(true)
  const [isToolsOpen, setIsToolsOpen] = useState(false)

  const toggleDescriptionSelect = () => {
    setIsFDescriptionOpen(!isDescriptioneOpen)
  }
  const toggleToolsSelect = () => {
    setIsToolsOpen(!isToolsOpen)
  }
  const [height, setHeight] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    // // let box = document.querySelectorAll('.select-content')
    // setHeight(elementRef.current.offsetHeight)
    // let box = document.getElementById('tester')
    // // let open = document.getElementsByClassName('open')
    // console.log(box)
    // let testHeight = box.clientHeight
    // // open.style.height = testHeight + 'px';
    // console.log(testHeight)
    console.log(elementRef.current.getBoundingClientRect());
  }, [])

  return (
    
    <section className="section-description">
      <article className="btn-select">
        <div className="select">
          <div className="select-loft" onClick={toggleDescriptionSelect}>
            Description
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-up"
              className={`arrow ${isDescriptioneOpen ? 'up' : 'down'} `}
            />
          </div>
          <div
            id="tester"
            ref={elementRef}
            style={{ height: `${height} + px ` }}
            className={`select-content ${
              isDescriptioneOpen ? 'open' : 'close'
            }`}
          >
            <p
              className={`text ${isDescriptioneOpen ? 'appear' : 'disappear'}`}
            >
              {loft.description}
            </p>
          </div>
        </div>
      </article>
      <article className="btn-select">
        <div className="select">
          <div className="select-loft" onClick={toggleToolsSelect}>
            Équipement
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-up"
              className={`arrow ${isToolsOpen ? 'up' : 'down'} `}
            />
          </div>

          <div
            ref={elementRef}
            className={`select-content ${isToolsOpen ? 'open' : 'close'}`}
          >
            <ul
              className={`text all-tools ${
                isToolsOpen ? 'appear' : 'disappear'
              }`}
            >
              {tools.map((Val) => (
                <li key={Val}>{Val}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}
export default SelectLoft
