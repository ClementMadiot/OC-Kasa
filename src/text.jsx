import { loftList } from '../../datas/loft'
import Caroussel from '../../assets/Carrousel.png'
import InfoLoft from './infoLoft'
import Host from './host'
import SelectLoft from './select'
import './loft.scss'

function Loft() {
const indivLoft = loftList.filter(loftList =>
  loftList.id === "onlyOne"
  );
  const listItems = indivLoft.map(loftList =>
        <section className="section-infos">
            <h1 className="title-loft">{loftList.title}</h1>
            <p className="place-loft">{loftList.location}</p>
            <Host/>
        </section>
    );
    console.log(listItems);
  return (
      <section className="main-loft">
        <div className="Caroussel-Container">
          <img
            className="Caroussel-Desktop"
            src={Caroussel}
            alt="Maison d'hôte"
          />
        </div>
        <div>{listItems}</div>
        <SelectLoft/>
      </section>
  )
}

export default Loft
