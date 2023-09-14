import './nav.css'
import html from '../../assets/svg/icon_html.svg'
import css from '../../assets/svg/icon_css.svg'
import js from '../../assets/svg/icon_js.svg'
import desing from '../../assets/svg/icon_design.svg'
import jobs from '../../assets/svg/icon_jobs.svg'
import Faces from '../Faces/Faces'

export default function Nav(){
  return(
    <div className="nav__container">
      <a href='#bio' className="nav__link faces">
        <Faces/>
      </a>
      <a href="#html" className='nav__link'>
        <img src={html} alt="" className="nav__icon" />
        <p className='nav__title'>WEBS</p>
      </a>
      <a href="#animate" className='nav__link'>
        <img src={css} alt="" className="nav__icon" />
        <p className='nav__title'>ANIMACIONES</p>
      </a>
      <a href="#js" className='nav__link'>
        <img src={js} alt="" className="nav__icon" />
        <p className='nav__title'>SCRIPTS</p>
      </a>
      <a href="#design" className='nav__link'>
        <img src={desing} alt="" className="nav__icon" />
        <p className='nav__title'>DISEÑOS</p>
      </a>
      <a href="#exp" className='nav__link'>
        <img src={jobs} alt="" className="nav__icon" />
        <p className='nav__title'>CARRERA</p>
      </a>
    </div>
  )
}