import Collapse from '../../components/Collapse/collapse'
import './about.scss'

function About() {
  const fiabilite =
    'Les annonces postées sur Kasan garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes'
  const respect =
    'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const services =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const security =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que le standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  return (
    <section className="main-about">
      <div className="mountain-forest"></div>
      <Collapse title="fiabilité" text={fiabilite} />
      <Collapse title="Respect" text={respect} />
      <Collapse title="Service" text={services} />
      <Collapse title="Sécurité" text={security} />
    </section>
  )
}

export default About
