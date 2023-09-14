import evotech from './imgs/evotech.svg'
import descuento from './imgs/descuento.svg'
import treinta from './imgs/treinta.svg'
import spin from './imgs/spin.svg'
import './evotech.css'
import {useEffect} from 'react'
import {gsap, Linear, Elastic} from 'gsap'

export default function Evotech() {

  const tl = gsap.timeline({repeat: -1})
  
  useEffect(()=>{
    const ev1 = document.querySelector('.evotech--treinta'),
          ev2 = document.querySelector('.evotech--descuento'),
          ev3 = document.querySelector('.evotech--spin')
          
    gsap.to(ev3,{rotation: -360, duration: 20, repeat: -1, ease: Linear.easeOut})
    tl.to(ev1,{scale: 1.1, ease: Elastic.easeOut}, 5)
      .to(ev1,{scale: .8, ease: Elastic.easeOut},'>')
      .to(ev2,{scale: 1.1, ease: Elastic.easeOut}, 5.1)
      .to(ev2,{scale: .8, ease: Elastic.easeOut},'>')
  }, [tl])

  return(
    <div className="evotech">
      <img src={evotech} alt="" />
      <img className='evotech--descuento' src={descuento} alt="" />
      <img className='evotech--treinta' src={treinta} alt="" />
      <img className='evotech--spin' src={spin} alt="" />
    </div>
  )
}
