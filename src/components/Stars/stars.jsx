import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './stars.scss'

function Stars({ rating }) {
  const maxRating = 5
  return (
    <div>
      {Array.from({ length: maxRating }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          className={`${rating >= index + 1 ? 'red' : 'grey'}`}
          icon={faStar}
        />
      ))}
    </div>
  )
}
export default Stars
