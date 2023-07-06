import LogoErreur from '../../assets/404.png'
import { Link } from 'react-router-dom'
import './erreur.scss'



function Error() {
  return (
    <section className='main-erreur'>
      <img className='LogoErreurImg' src={LogoErreur} alt="erreur 404" />
      <h2>Oups ! La page que vous demandez n'existe pas.</h2>
      <Link className='Return-Home' to='/'>Retourner sur la page d'accueil</Link>
    </section>
  )
}

export default Error

