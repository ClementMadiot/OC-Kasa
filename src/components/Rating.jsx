import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../style/loft.scss'

function Rating({ scaleValue, careType }) {
  const range = [1, 2, 3, 4, 5]
  const scaleType =
    careType === 'red' ? (
      <FontAwesomeIcon className="star-red" icon={faStar} />
    ) : (
      <FontAwesomeIcon className="star-gray" icon={faStar} />
    )

  return (
    <div>
      {range.map((rangeStar) =>
        scaleValue >= rangeStar ? (
          <span key={rangeStar.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  )
}
export default Rating
