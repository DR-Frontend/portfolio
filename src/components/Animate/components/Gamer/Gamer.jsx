import './gamer.css'
import {gsap, Back} from 'gsap'
import bkg from './imgs/gamer_bkg.webp'
import pipe from './imgs/gamer_pipe.webp'
import mario from './imgs/gamer_mario.webp'
import { useEffect } from 'react'

export default function Gamer() {
  const tl = gsap.timeline({repeat: -1})

  useEffect(()=>{
    const game = document.querySelector('.gamer--mario')

    tl.from(game,{y: 0},'+=7').to(game,{y: 160, ease: Back.easeIn},'>')
      .to(game,{y:0},'+=4')
  },[tl])

  return (
    <div className="gamer">
      <img src={pipe} alt="" className="gamer--pipe" />
      <img src={mario} alt="" className="gamer--mario" />
      <img src={bkg} alt="" className="gamer--bkg" />
    </div>
  )
}
