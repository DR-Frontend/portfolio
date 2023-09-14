import { useEffect } from 'react'
import logo from '../../assets/svg/imagotipo.svg'
import rostro from '../../assets/svg/rostro.svg'
import tribal from '../../assets/svg/tribal.svg'
import flow from '../../assets/svg/flow.svg'
import vampire from '../../assets/svg/vampire.svg'
import bits from '../../assets/svg/8bits.svg'
import './faces.css'
import { gsap } from 'gsap'

export default function Faces(){

  const timeline = gsap.timeline({repeat: -1})

  useEffect(()=>{
    const cara1 = document.querySelector('.face__1'),
          cara2 = document.querySelector('.face__2'),
          cara3 = document.querySelector('.face__3'),
          cara4 = document.querySelector('.face__4'),
          cara5 = document.querySelector('.face__5')
    
    timeline.to(cara1,{opacity: 1}).to(cara1,{opacity: 0},'+=10')
    timeline.to(cara2,{opacity: 1}).to(cara2,{opacity: 0},'+=10')
    timeline.to(cara3,{opacity: 1}).to(cara3,{opacity: 0},'+=10')
    timeline.to(cara4,{opacity: 1}).to(cara4,{opacity: 0},'+=10')
    timeline.to(cara5,{opacity: 1}).to(cara5,{opacity: 0},'+=10')

  }, [timeline])

  return(
    <div className="face">
      <div className="face__container">
        <img src={rostro} alt="" className='face__1 face__item'/>
        <img src={tribal} alt="" className='face__2 face__item'/>
        <img src={flow} alt="" className='face__3 face__item'/>
        <img src={vampire} alt="" className='face__4 face__item'/>
        <img src={bits} alt="" className='face__5 face__item'/>
      </div>
      <div className="face__logo">
        <img src={logo} alt="" className='face__img'/>
      </div>
    </div>
  )
}