import './dexter.css'
import bkg from './imgs/dexter_image.webp'
import D from './imgs/dexter_D.webp'
import E from './imgs/dexter_E.webp'
import X from './imgs/dexter_X.webp'
import T from './imgs/dexter_T.webp'
import EE from './imgs/dexter_EE.webp'
import R from './imgs/dexter_R.webp'
import {gsap, Back} from 'gsap'
import { useEffect } from 'react'

export default function Dexter() {
  const tl = gsap.timeline({repeat: -1})

  useEffect(()=>{
    const letter = document.querySelectorAll('.dexter--letter')

    tl.to(letter,{duration: 2, rotateX: 360, stagger: .25, ease: Back.easeOut}, 5)

  },[tl])

  return (
    <div className="dexter">
      <img src={D} alt="" className="dexter--letter" />
      <img src={E} alt="" className="dexter--letter" />
      <img src={X} alt="" className="dexter--letter" />
      <img src={T} alt="" className="dexter--letter" />
      <img src={EE} alt="" className="dexter--letter" />
      <img src={R} alt="" className="dexter--letter" />
      <img src={bkg} alt="" className="dexter--bkg" />
    </div>
  )
}