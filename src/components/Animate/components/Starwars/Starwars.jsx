import './starwars.css'
import stars from './imgs/starwars.webp'
import falcon from './imgs/falcon.webp'
import ship from './imgs/ship.webp'
import gsap from 'gsap'
import { useEffect } from 'react'

export default function Starwars() {
  const tl = gsap.timeline({repeat: -1})

  useEffect(()=>{
    const sw1 = document.querySelector('.starwars--falcon'),
          sw2 = document.querySelector('.starwars--ship')

    tl.from(sw1,{x: -150, y: -100},'+=7').to(sw1,{x: 0, y: 0})
      .from(sw2,{x: -250, y: -110, delay: .2}).to(sw2,{x: 0, y: 0})
      .to(sw1,{x: 300, y: 100},'+=3')
      .to(sw2,{x: 300, y: 100},'+=.2')

  },[tl])

  return (
    <div className="starwars">
      <img src={stars} alt="" className="starwars--stars" />
      <img src={falcon} alt="" className="starwars--falcon" />
      <img src={ship} alt="" className="starwars--ship" />
    </div>
  )
}
