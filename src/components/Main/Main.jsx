import Bio from '../Bio/Bio.jsx'
import Webs from '../Webs/Webs.jsx'
import Animate from '../Animate/Animate.jsx'
import Programming from '../Programming/Programming.jsx'
import Logos from '../Logos/Logos.jsx'
import Experience from '../Experience/Experience.jsx'
import './main.css'

export default function Main(){
  return(
    <section id="main" className="main">
      <div className="main__container">
        <Bio/>
        <Webs/>
        <Animate/>
        <Programming/>
        <Logos/>
        <Experience/>
      </div>
    </section>
  )
}