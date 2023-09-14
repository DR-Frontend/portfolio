import './animate.css'
import Dexter from './components/Dexter/Dexter'
import Evotech from './components/Evotech/Evotech'
import Gamer from './components/Gamer/Gamer'
import Starwars from './components/Starwars/Starwars'

export default function Animate(){
  return(
    <section id="animate" className="animate">
      <div className="animate--container">
        <h2>Animaciones_</h2>
        <h4>Banners animados en GSAP</h4>

        <div className="animate--banners">
          <div className="animate--banner"><Dexter/></div>
          <div className="animate--banner"><Evotech/></div>
          <div className="animate--banner"><Gamer/></div>
          <div className="animate--banner"><Starwars/></div>
        </div>
      </div>
    </section>
  )
}