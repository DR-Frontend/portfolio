import './experience.css'
import { exp } from './experience'

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

  const courses = 0

  return(
    <section id="exp" className="exp">
      <h2>Carrera_</h2>
      <h4>Experiencia Laboral</h4>

      <div className="exp--container">
        <div className="exp--jobs">
          {jobs}
        </div>

        <div className="exp--courses">
          {courses}
        </div>
      </div>

    </section>
  )
}