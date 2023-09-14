import { webs } from './webs'
import './webs.css'

export default function Webs(){
  return(
    <section id="html" className='html'>
      <div className="html--container">
        <h2>Webs_</h2>
        <h4>Landing/Single/Multi-pages</h4>

        <div className="html--webs">

          {webs.map((tech,i)=>(
            <div className="html--web" key={i}>
              <div className="html--info">
                <h4>{tech.name}</h4>
                <div className="html--techs">
                  {tech.codes.map((code,i)=>(
                      <span className="html--tech" key={i}>{code.info}</span>
                    )) 
                  }
                </div>
                <a href={tech.web} className='html--btn' target='_blank' rel='noreferrer'>VER SITIO</a>
              </div>
              <img src={tech.photo} className="html--photo" alt={tech.seo}/>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}