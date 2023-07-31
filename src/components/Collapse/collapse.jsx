import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from 'react'
import './collapse.scss'
import '../../pages/About/about.scss'
// import '../../pages/Loft/select.scss'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen((prevState) => {
      return !prevState
    })
  }
  return (
    <article className="select-container">
      <div className="select">
        <div className="select-header" onClick={toggleIsOpen}>
          {title}
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-up"
            className={`arrow ${isOpen ? 'up' : 'down'} `}
          />
        </div>

        <div className={`select-content ${isOpen ? 'open' : 'close'}`}>
          <p className={`text ${isOpen ? 'appear' : 'disappear'}`}>{text}</p>
        </div>
      </div>
    </article>
  )
}
export default Collapse


//    <article className="btn-select">
// <div className="select">
//   <div className="select-loft" onClick={toggleIsOpen}>
//     {title}
//     <FontAwesomeIcon
//       icon="fa-solid fa-chevron-up"
//       className={`arrow ${isOpen ? 'up' : 'down'} `}
//     />
//   </div>
//   <div
//     className={`select-content ${
//       isOpen ? 'open' : 'close'
//     }`}
//   >
//     <p
//       className={`text ${isOpen ? 'appear' : 'disappear'}`}
//     >
//       {text}
//     </p>
//   </div>
// </div>
// </article> 

