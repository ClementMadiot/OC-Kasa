import LogoErreur from '../../assets/404.png'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
// import { Data } from '../../datas/loft'
// import { useParams } from 'react-router-dom'
import './erreur.scss'



function Error() {
  // const { id } = useParams()
  // const res = Data.filter((rental) => rental.id === id)
  // console.log(res);
  // if (res.status === 404) {
  //   throw new Response("Not Found", { status: 404 });
  // }
  // const error = useRouteError();
  // if(isRouteErrorResponse(error) && error.status === 404){


    return (
      <section className='main-erreur'>
        <img className='LogoErreurImg' src={LogoErreur} alt="erreur 404" />
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <Link className='Return-Home' to='/'>Retourner sur la page d'accueil</Link>
      </section>
    )
  }


export default Error

