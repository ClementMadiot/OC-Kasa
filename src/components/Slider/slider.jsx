import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './slider.scss'
import '../../pages/Loft/loft.scss'



function Slider({ img }) {
  const [current, setCurrent] = useState(0);
  const length = img.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <section className='Caroussel-Container'>
      <button
      type='button'
      className={`${length === 1 ? 'no-button' : 'prev-button'}`}
      onClick={prevSlide}
      ><FontAwesomeIcon icon="fa-solid fa-chevron-left"/></button>
      <button
      type='button'
      className={`${length === 1 ? 'no-button' : 'next-button'}`}
      onClick={nextSlide}
      ><FontAwesomeIcon icon="fa-solid fa-chevron-right"/></button>
      
      {img.map((picture, index) => (
        <div key={index}>
          {index === current && <img className='Slide-Img' src={picture} alt={`${index}`} />}
        </div>
      ))}
      <div className='indicator'>{current + 1}/{length}</div>
    </section>
      

  )
}

export default Slider
