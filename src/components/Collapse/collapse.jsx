import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from 'react'
import './collapse.scss'

function Collapse({ title, text }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxheight] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  // console.log(maxHeight);
  useEffect(() => {
    function handleResize() {
      const DOMElement = contentRef.current;
      if(DOMElement) {
        const computeHeight = () => {
          const {height} = DOMElement.getBoundingClientRect();
          const { paddingTop, paddingBottom, marginTop, marginBottom } = getComputedStyle(DOMElement)
          const heightDeltas = [paddingTop, paddingBottom, marginTop, marginBottom].map(parseFloat);
          const computedHeight = height + heightDeltas.reduce((acc, value) => acc + value, 0)
          return computedHeight
        };
        setMaxheight(computeHeight())
      } else {
        setMaxheight(null)
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
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

        <div className={`content-parent ${isOpen ? 'open' : 'close'}`} ref={contentRef} style={isOpen ? { height: contentRef.current.scrollHeight + "px" } : {height: "0px"}}>
          <div className="collapse__textWrapper">
            <p className='text all-tools'>{text}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
export default Collapse
