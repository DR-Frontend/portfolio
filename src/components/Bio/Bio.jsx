import { contacto, items } from './bio'
import './bio.css'

export default function Bio(){
  const info = items.map((data,i) =>(
    <p className="bio--data" key={i}>{data.emoji} {data.title} <span>{data.description}</span></p>
  ))
  const contact = contacto.map((personal,i)=>(
    <a href={personal.link} key={i} title={personal.title} target='_blank' rel='noreferrer'>
      <img src={personal.icon} alt="David Romero : Diseñador Frontend" />
    </a>
  ))

  return(
    <section id="bio" className="bio">
      <div className="bio--container">
      <h2>BIO_</h2>
      <h4>Hola soy David Romero</h4>

      <section className="bio--profile">
        <div className="bio--header">
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
        <p>perfil <span>David Romero = </span>{`{`}</p>
          {info}
        <p>{`}`}</p>
      </section>

      <section className="bio--contact">
        <h4>CONTACTO</h4>
        <div className="bio--rrss">
          {contact}
        </div>
      </section>
      </div>
    </section>
  )
}