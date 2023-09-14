import dexter from '../../assets/img/design_dexter.webp'
import mod from '../../assets/img/design_mod.webp'
import cadpa from '../../assets/img/design_cadpa.webp'
import evotech from '../../assets/img/design_evotech.webp'
import tamales from '../../assets/img/design_tmn.webp'
import geekode from '../../assets/img/design_geekode.webp'
import dicard from '../../assets/img/design_dicard.webp'
import blackbone from '../../assets/img/design_blackbone.webp'
import fac from '../../assets/img/design_fac.webp'
import tormenta from '../../assets/img/design_tormenta.webp'
import arcadia from '../../assets/img/design_arcadia.webp'
import beuv from '../../assets/img/design_beuv.webp'
import bioax from '../../assets/img/design_bioax.webp'
import paris from '../../assets/img/design_paris.webp'
import './logos.css'

export default function Banners(){
  return(
    <section id="design" className="design">
      <div className="design--container">
        <h2>Diseños_</h2>
        <h4>Iconografía y Logos</h4>

        <div className="design--logos">
          <img src={dexter} alt="David Romero : Diseñador Frontend" />
          <img src={mod} alt="David Romero : Diseñador Frontend" />
          <img src={cadpa} alt="David Romero : Diseñador Frontend" />
          <img src={evotech} alt="David Romero : Diseñador Frontend" />
          <img src={tamales} alt="David Romero : Diseñador Frontend" />
          <img src={geekode} alt="David Romero : Diseñador Frontend" />
          <img src={dicard} alt="David Romero : Diseñador Frontend" />
          <img src={fac} alt="David Romero : Diseñador Frontend" />
          <img src={blackbone} alt="David Romero : Diseñador Frontend" />
          <img src={tormenta} alt="David Romero : Diseñador Frontend" />
          <img src={arcadia} alt="David Romero : Diseñador Frontend" />
          <img src={bioax} alt="David Romero : Diseñador Frontend" />
          <img src={beuv} alt="David Romero : Diseñador Frontend" />
          <img src={paris} alt="David Romero : Diseñador Frontend" />
        </div>
      </div>
    </section>
  )
}