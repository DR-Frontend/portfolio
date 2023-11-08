import './experience.css'
import { exp, courses } from './experience'

export default function Experience(){
  const jobs = exp.map((job,i)=>(
    <div className="exp--job" key={i}>
      <div>
        <img className='exp--logo' src={job.logo} alt="David Romero : Diseñador Frontend" />
        <h4 className='exp--position'>{job.position}</h4>
        <p className="exp--dates">{job.date_start} - {job.date_finish}</p>
        <ul className="exp--functions">
          {job.description.map((item, i)=>(
              <li key={i}>{item.info}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h4 className='exp--goals'>METAS</h4>
        <ul>
          {job.goals.map((goal,i)=>(
            <li key={i}>{goal.info}</li>
          ))}
        </ul>
      </div>
    </div>
  ))

  const diplomas = courses.map((course,i)=>(
    <div className="course" key={i}>
      <div className="course--info">
        <h4 className='course--name'>{course.name}</h4>
        <p className="course--date">Fecha: {course.date}</p>
      </div>
      <img src={course.logo} alt="David Romero : Diseñador Frontend" />
    </div>
  ))

  return(
    <>
      <section id="exp" className="exp">
      <h2>Carrera_</h2>
      <h4>Experiencia Laboral</h4>

      <div className="exp--container">
        <div className="exp--jobs">
          {jobs}
        </div>
      </div>
    </section>

    <section id="courses" className="courses">
      <h2>Certificaciones_</h2>
      <h4>Cursos online</h4>
      
      <div className="courses--container">
        <div className="courses--list">
          {diplomas}
        </div>
      </div>
    </section>
    </>
  )
}