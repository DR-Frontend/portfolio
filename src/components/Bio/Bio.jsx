import { contacto, items } from './bio'
import './bio.css'

export default function Bio(){
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
          {items.map((data,i) =>(
            <p className="bio--data" key={i}>{data.emoji} {data.title} <span>{data.description}</span></p>
          ))}
        <p>{`}`}</p>
      </section>

      <section className="bio--contact">
        <h4>CONTACTO</h4>
        <div className="bio--rrss">
            {contacto.map((personal,i)=>(
              <a href={personal.link} key={i} title={personal.title} target='_blank' rel='noreferrer'>
                <img src={personal.icon} alt="David Romero : Diseñador Frontend" />
              </a>
            ))}
        </div>
      </section>
      </div>
    </section>
  )
}