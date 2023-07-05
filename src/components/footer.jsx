import LogoFooter from '../assets/LOGO Footer.png'
import '../style/footer.scss'

function Footer() {
  return(
    <footer>
      <img className='img-footer' src={LogoFooter} alt="Logo Kanban" />
      <div className="title-footer">
        <h3>© 2020 Kasa. All rights reserved</h3>
      </div>
    </footer>

  )
}

export default Footer