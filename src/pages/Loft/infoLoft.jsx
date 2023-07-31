import Stars from '../../components/Stars/stars.jsx'
import './loft.scss'

function InfoLoft({ loft, tag }) {
  const ratingStar = loft.rating;
  return (
    <section className="main-infoLoft">
      <article className="info-loft">
        <h1 className="title-loft">{loft.title}</h1>
        <p className="place-loft">{loft.location}</p>
        <ul className="all-btn-infos">
          {tag.map((Val) => (
            <li key={Val} className="btn-info">{Val}</li>
          ))}
        </ul>
      </article>

      <article className="section-host">
        <div className="Host-stuff">
          <p className="host-name">{loft.host.name}</p>

          <img
            className="host-face"
            src={loft.host.picture}
            alt={loft.host.name}
          />
        </div>
        <Stars rating={ratingStar}/>
      </article>
    </section>
  )
}
export default InfoLoft
